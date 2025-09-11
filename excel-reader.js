const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

/**
 * 读取 Excel 文件并转换为成员数据格式
 * Excel 表头: Name, Email, 入学时间/学院, 研究兴趣, 个人主页, 自传
 */
class ExcelMemberReader {
    constructor(excelFilePath) {
        this.excelFilePath = excelFilePath;
        this.memberData = {};
    }

    /**
     * 读取 Excel 文件
     */
    readExcel() {
        try {
            console.log('正在读取 Excel 文件:', this.excelFilePath);
            
            // 读取 Excel 文件
            const workbook = XLSX.readFile(this.excelFilePath);
            
            // 获取第一个工作表
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            
            // 将工作表转换为 JSON
            const jsonData = XLSX.utils.sheet_to_json(worksheet);
            
            console.log(`成功读取 ${jsonData.length} 条记录`);
            
            return this.processData(jsonData);
            
        } catch (error) {
            console.error('读取 Excel 文件时出错:', error.message);
            throw error;
        }
    }

    /**
     * 处理原始数据，转换为网站需要的格式
     */
    processData(rawData) {
        const processedData = {};
        
        rawData.forEach((row, index) => {
            try {
                // 获取各字段数据，支持不同的可能列名
                const name = this.getFieldValue(row, ['Name', 'name', '姓名', '名字', '__EMPTY']);
                const email = this.getFieldValue(row, ['Email', 'email', '邮箱', '电子邮件']);
                const yearDept = this.getFieldValue(row, ['入学时间/学院', '入学时间', '学院', '入学时间  学院', 'Year/Department']);
                const interests = this.getFieldValue(row, ['研究兴趣', '兴趣', 'Research Interests', 'Interests']);
                const homepage = this.getFieldValue(row, ['个人主页', '主页', 'Homepage', 'Website']);
                const bio = this.getFieldValue(row, ['自传', '简介', 'Bio', 'Biography']);

                if (!name) {
                    console.warn(`第 ${index + 1} 行缺少姓名信息，跳过`);
                    return;
                }

                // 生成唯一 ID（基于姓名）
                const id = this.generateId(name);
                
                // 解析研究兴趣（支持逗号、分号、换行分隔）
                const researchInterests = this.parseInterests(interests);
                
                // 解析年份和学院信息
                const { year, department } = this.parseYearDepartment(yearDept);

                // 构建成员数据对象
                processedData[id] = {
                    name: name,
                    year: year || '在读中',
                    department: department || 'School of Computer Science and Technology',
                    researchInterests: researchInterests,
                    email: email || '',
                    bio: bio || `${name}是NeO Lab团队的重要成员。`
                };

                console.log(`处理成员: ${name} (ID: ${id})`);

            } catch (error) {
                console.error(`处理第 ${index + 1} 行数据时出错:`, error.message);
            }
        });

        return processedData;
    }

    /**
     * 获取字段值，支持多种可能的列名
     */
    getFieldValue(row, possibleKeys) {
        for (const key of possibleKeys) {
            if (row[key] !== undefined && row[key] !== null && row[key] !== '') {
                return String(row[key]).trim();
            }
        }
        return '';
    }

    /**
     * 生成唯一ID - 直接使用中文姓名
     */
    generateId(name) {
        // 直接使用中文姓名作为 ID，移除空格和特殊字符
        return name.replace(/[^\u4e00-\u9fa5a-zA-Z]/g, '');
    }

    /**
     * 解析研究兴趣
     */
    parseInterests(interestsStr) {
        if (!interestsStr) return ['Computer Science'];
        
        // 支持多种分隔符
        const interests = interestsStr
            .split(/[,，;；\n\r]/)
            .map(item => item.trim())
            .filter(item => item.length > 0);
        
        return interests.length > 0 ? interests : ['Computer Science'];
    }

    /**
     * 解析年份和学院信息
     */
    parseYearDepartment(yearDeptStr) {
        if (!yearDeptStr) {
            return { year: '', department: '' };
        }

        let year = '';
        let department = '';

        // 尝试提取年份 - 支持多种格式
        const yearMatch = yearDeptStr.match(/(\d{2,4})/);
        if (yearMatch) {
            let yearNum = parseInt(yearMatch[1]);
            // 如果是两位数年份，转换为四位数
            if (yearNum < 100) {
                yearNum = yearNum > 50 ? 1900 + yearNum : 2000 + yearNum;
            }
            year = `${yearNum} to now`;
        }

        // 尝试提取学院信息
        if (yearDeptStr.includes('计算机') || yearDeptStr.includes('Computer')) {
            department = 'School of Computer Science and Technology';
        } else if (yearDeptStr.includes('软件') || yearDeptStr.includes('Software')) {
            department = 'School of Software';
        } else if (yearDeptStr.includes('数学') || yearDeptStr.includes('Mathematics')) {
            department = 'School of Mathematics';
        } else if (yearDeptStr.includes('电子') || yearDeptStr.includes('Electronic')) {
            department = 'School of Electronic Science and Engineering';
        } else if (yearDeptStr.includes('物理') || yearDeptStr.includes('Physics')) {
            department = 'School of Physics';
        } else {
            // 如果包含学院相关词汇，直接使用
            if (yearDeptStr.includes('学院') || yearDeptStr.includes('School')) {
                department = yearDeptStr.replace(/\d{2,4}.*?年?/, '').trim();
            }
        }

        return { year, department };
    }

    /**
     * 生成 JavaScript 数据文件
     */
    generateJSFile(data, outputPath) {
        const jsContent = `// 从 Excel 文件生成的成员信息数据
// 生成时间: ${new Date().toLocaleString('zh-CN')}

const memberProfiles = ${JSON.stringify(data, null, 4)};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { memberProfiles };
} else if (typeof window !== 'undefined') {
    window.MemberData = { memberProfiles };
}`;

        fs.writeFileSync(outputPath, jsContent, 'utf8');
        console.log(`成功生成 JavaScript 文件: ${outputPath}`);
    }

    /**
     * 生成 JSON 文件
     */
    generateJSONFile(data, outputPath) {
        const jsonContent = JSON.stringify(data, null, 4);
        fs.writeFileSync(outputPath, jsonContent, 'utf8');
        console.log(`成功生成 JSON 文件: ${outputPath}`);
    }

    /**
     * 主执行方法
     */
    async execute() {
        try {
            console.log('=== Excel 成员数据读取器 ===');
            
            // 检查文件是否存在
            if (!fs.existsSync(this.excelFilePath)) {
                throw new Error(`Excel 文件不存在: ${this.excelFilePath}`);
            }

            // 读取并处理数据
            const memberData = this.readExcel();
            
            // 生成输出文件
            const baseDir = path.dirname(this.excelFilePath);
            const jsOutputPath = path.join(baseDir, 'js', 'data', 'member-data-from-excel.js');
            const jsonOutputPath = path.join(baseDir, 'member-data-from-excel.json');
            
            this.generateJSFile(memberData, jsOutputPath);
            this.generateJSONFile(memberData, jsonOutputPath);
            
            console.log('\n=== 处理完成 ===');
            console.log(`共处理 ${Object.keys(memberData).length} 个成员`);
            console.log('输出文件:');
            console.log(`- JavaScript: ${jsOutputPath}`);
            console.log(`- JSON: ${jsonOutputPath}`);
            
            return memberData;
            
        } catch (error) {
            console.error('执行过程中出错:', error.message);
            throw error;
        }
    }
}

// 如果直接运行此脚本
if (require.main === module) {
    const excelPath = process.argv[2] || './实验室网页.xlsx';
    
    console.log('使用方法: node excel-reader.js [Excel文件路径]');
    console.log(`当前使用的Excel文件: ${excelPath}\n`);
    
    const reader = new ExcelMemberReader(excelPath);
    reader.execute()
        .then(() => {
            console.log('\n脚本执行成功！');
        })
        .catch((error) => {
            console.error('\n脚本执行失败:', error.message);
            process.exit(1);
        });
}

module.exports = ExcelMemberReader;
