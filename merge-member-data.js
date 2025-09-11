const fs = require('fs');
const path = require('path');

/**
 * 合并成员数据脚本
 * 将从 Excel 生成的数据与现有的成员数据合并
 */
class MemberDataMerger {
    constructor() {
        this.originalDataPath = './js/data/member-data.js';
        this.excelDataPath = './js/data/member-data-from-excel.js';
        this.backupPath = './js/data/member-data-backup.js';
        this.mergedPath = './js/data/member-data-merged.js';
    }

    /**
     * 读取 JavaScript 数据文件
     */
    readJSDataFile(filePath) {
        try {
            if (!fs.existsSync(filePath)) {
                console.warn(`文件不存在: ${filePath}`);
                return {};
            }

            const content = fs.readFileSync(filePath, 'utf8');
            
            // 使用正则表达式提取 memberProfiles 数据
            const memberProfilesMatch = content.match(/const memberProfiles = ({[\s\S]*?});/);
            
            if (memberProfilesMatch) {
                try {
                    const dataStr = memberProfilesMatch[1];
                    const memberProfiles = JSON.parse(dataStr);
                    return memberProfiles;
                } catch (parseError) {
                    console.error(`解析 JSON 数据时出错:`, parseError.message);
                    
                    // 如果 JSON.parse 失败，尝试使用 eval
                    try {
                        const memberProfiles = eval(`(${memberProfilesMatch[1]})`);
                        return memberProfiles;
                    } catch (evalError) {
                        console.error(`使用 eval 解析数据时出错:`, evalError.message);
                        return {};
                    }
                }
            } else {
                console.warn(`在文件 ${filePath} 中未找到 memberProfiles 数据`);
                return {};
            }
            
        } catch (error) {
            console.error(`读取文件 ${filePath} 时出错:`, error.message);
            return {};
        }
    }

    /**
     * 备份原始数据文件
     */
    backupOriginalData() {
        try {
            if (fs.existsSync(this.originalDataPath)) {
                fs.copyFileSync(this.originalDataPath, this.backupPath);
                console.log(`已备份原始数据到: ${this.backupPath}`);
            }
        } catch (error) {
            console.error('备份原始数据时出错:', error.message);
        }
    }

    /**
     * 合并数据
     */
    mergeData(originalData, excelData) {
        const merged = { ...originalData };
        let addedCount = 0;
        let updatedCount = 0;

        console.log('\n=== 数据合并过程 ===');
        
        Object.entries(excelData).forEach(([id, memberData]) => {
            if (merged[id]) {
                console.log(`更新现有成员: ${memberData.name} (${id})`);
                
                // 合并数据，移除不需要的字段
                const { education, achievements, homepage, ...cleanMemberData } = memberData;
                merged[id] = cleanMemberData;
                updatedCount++;
            } else {
                console.log(`添加新成员: ${memberData.name} (${id})`);
                // 移除不需要的字段
                const { education, achievements, homepage, ...cleanMemberData } = memberData;
                merged[id] = cleanMemberData;
                addedCount++;
            }
        });

        console.log(`\n合并统计:`);
        console.log(`- 新增成员: ${addedCount}`);
        console.log(`- 更新成员: ${updatedCount}`);
        console.log(`- 总成员数: ${Object.keys(merged).length}`);

        return merged;
    }

    /**
     * 生成合并后的 JavaScript 文件
     */
    generateMergedFile(mergedData, outputPath) {
        const jsContent = `// 合并后的成员信息数据
// 生成时间: ${new Date().toLocaleString('zh-CN')}
// 包含原始数据和从 Excel 导入的数据

const memberProfiles = ${JSON.stringify(mergedData, null, 4)};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { memberProfiles };
} else if (typeof window !== 'undefined') {
    window.MemberData = { memberProfiles };
}`;

        fs.writeFileSync(outputPath, jsContent, 'utf8');
        console.log(`成功生成合并文件: ${outputPath}`);
    }

    /**
     * 主执行方法
     */
    async execute() {
        try {
            console.log('=== 成员数据合并工具 ===');
            
            // 备份原始数据
            this.backupOriginalData();
            
            // 读取原始数据和 Excel 数据
            console.log('\n正在读取数据文件...');
            const originalData = this.readJSDataFile(this.originalDataPath);
            const excelData = this.readJSDataFile(this.excelDataPath);
            
            console.log(`原始数据成员数: ${Object.keys(originalData).length}`);
            console.log(`Excel 数据成员数: ${Object.keys(excelData).length}`);
            
            if (Object.keys(excelData).length === 0) {
                console.warn('Excel 数据为空，请先运行 excel-reader.js 生成数据');
                return;
            }
            
            // 合并数据
            const mergedData = this.mergeData(originalData, excelData);
            
            // 生成合并文件
            this.generateMergedFile(mergedData, this.mergedPath);
            
            console.log('\n=== 合并完成 ===');
            console.log('文件说明:');
            console.log(`- 备份文件: ${this.backupPath}`);
            console.log(`- 合并文件: ${this.mergedPath}`);
            console.log('\n建议:');
            console.log('1. 检查合并文件的内容是否正确');
            console.log('2. 如果满意，可以将合并文件重命名为 member-data.js');
            console.log('3. 如果有问题，可以从备份文件恢复');
            
        } catch (error) {
            console.error('合并过程中出错:', error.message);
            throw error;
        }
    }
}

// 如果直接运行此脚本
if (require.main === module) {
    const merger = new MemberDataMerger();
    merger.execute()
        .then(() => {
            console.log('\n合并脚本执行成功！');
        })
        .catch((error) => {
            console.error('\n合并脚本执行失败:', error.message);
            process.exit(1);
        });
}

module.exports = MemberDataMerger;
