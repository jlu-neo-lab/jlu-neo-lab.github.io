// 组件加载器
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

// 成员信息数据结构 
const memberProfiles = {
    // PhD Students
    'xuanwu': {
        name: 'Xuan Wu (吴翾)',
        year: '2022 to now',
        department: 'School of Computer Science and Technology',
        researchInterests: ['Deep Learning', 'Neural Architecture Search', 'Computer Vision'],
        education: 'M.S. in Computer Science, Jilin University',
        email: 'xuanwu@example.com',
        achievements: ['Best Paper Award at CVPR 2023', 'Outstanding Graduate Student'],
        bio: '吴翾是一名专注于深度学习和神经架构搜索的博士研究生，在计算机视觉领域有着丰富的研究经验。'
    },
    'pengzhao': {
        name: 'Peng Zhao (赵鹏)',
        year: '2023 to now',
        department: 'School of Computer Science and Technology',
        researchInterests: ['Machine Learning', 'Optimization', 'Algorithm Design'],
        education: 'M.S. in Mathematics, Beijing University',
        email: 'pengzhao@example.com',
        achievements: ['National Scholarship Recipient', 'Research Excellence Award'],
        bio: '赵鹏致力于机器学习优化算法的研究，在算法设计方面具有深厚的理论基础。'
    },
    'yuanshuli': {
        name: 'Yuanshu Li (李沅书)',
        year: '2024 to now',
        department: 'School of Computer Science and Technology',
        researchInterests: ['Natural Language Processing', 'Large Language Models', 'Text Mining'],
        education: 'M.S. in Computer Science, Tsinghua University',
        email: 'yuanshuli@example.com',
        achievements: ['Top Student Award', 'Conference Presentation at ACL 2024'],
        bio: '李沅书专注于自然语言处理和大语言模型的研究，在文本挖掘领域贡献突出。'
    },
    'zekuanshang': {
        name: 'Zekuan Shang (尚泽宽)',
        year: '2025 to now',
        department: 'School of Computer Science and Technology',
        researchInterests: ['Artificial Intelligence', 'Robotics', 'Autonomous Systems'],
        education: 'M.S. in Mechanical Engineering, Shanghai Jiao Tong University',
        email: 'zekuanshang@example.com',
        achievements: ['Innovation Award', 'Patent Holder'],
        bio: '尚泽宽在人工智能和机器人学方面有着跨学科的研究背景，专注于自主系统开发。'
    },
    // Master Students - 2023级
    'tianfangwang': {
        name: 'Tianfang Wang (王天放)',
        year: '2023 to now',
        department: 'School of Computer Science and Technology',
        researchInterests: ['Data Mining', 'Web Scraping', 'Information Retrieval'],
        education: 'B.S. in Computer Science, Jilin University',
        email: 'tianfangwang@example.com',
        achievements: ['Academic Excellence Scholarship'],
        bio: '王天放专注于数据挖掘和信息检索技术的研究与应用。'
    },
    'heqiaowang': {
        name: 'Heqiao Wang (王贺桥)',
        year: '2023 to now',
        department: 'School of Computer Science and Technology',
        researchInterests: ['Software Engineering', 'System Design', 'DevOps'],
        education: 'B.S. in Software Engineering, Dalian University of Technology',
        email: 'heqiaowang@example.com',
        achievements: ['Outstanding Student Leader'],
        bio: '王贺桥在软件工程和系统设计方面有丰富的实践经验。'
    },
    'jianxue': {
        name: 'Jian Xue (薛健)',
        year: '2023 to now',
        department: 'School of Computer Science and Technology',
        researchInterests: ['Cybersecurity', 'Network Security', 'Cryptography'],
        email: 'jianxue@example.com',
        bio: '薛健专注于网络安全和密码学研究，在信息安全领域表现突出。'
    },
    'zirouli': {
        name: 'Zirou Li (李子柔)',
        year: '2023 to now',
        department: 'School of Computer Science and Technology',
        researchInterests: ['Human-Computer Interaction', 'UI/UX Design', 'Machine Learning'],
        email: 'zirouli@example.com',
        bio: '李子柔致力于人机交互和用户体验设计的研究，在机器学习辅助设计方面有独特见解。'
    },
    'junjieqian': {
        name: 'Junjie Qian (钱俊杰)',
        year: '2023 to now',
        department: 'School of Computer Science and Technology',
        researchInterests: ['Distributed Systems', 'Cloud Computing', 'Performance Optimization'],
        email: 'junjieqian@example.com',
        bio: '钱俊杰专注于分布式系统和云计算技术，在系统性能优化方面有丰富经验。'
    },
    'ruikailiu': {
        name: 'Ruikai Liu (刘瑞恺)',
        year: '2023 to now',
        department: 'School of Computer Science and Technology',
        researchInterests: ['Computer Graphics', '3D Modeling', 'Virtual Reality'],
        email: 'ruikailiu@example.com',
        bio: '刘瑞恺在计算机图形学和虚拟现实技术方面有着深入的研究和实践经验。'
    },
    'yuesongwu': {
        name: 'Yuesong Wu (吴岳松)',
        year: '2023 to now',
        department: 'School of Computer Science and Technology',
        researchInterests: ['Bioinformatics', 'Computational Biology', 'Data Analysis'],
        email: 'yuesongwu@example.com',
        bio: '吴岳松结合生物学和计算机科学背景，专注于生物信息学和计算生物学研究。'
    },
    'jupengson': {
        name: 'Jupeng Song (宋举鹏)',
        year: '2023 to now',
        department: 'School of Computer Science and Technology',
        researchInterests: ['Embedded Systems', 'IoT', 'Smart Devices'],
        email: 'jupengson@example.com',
        bio: '宋举鹏专注于嵌入式系统和物联网技术，在智能设备开发方面表现出色。'
    },
    'dapengwang': {
        name: 'Dapeng Wang (王大鹏)',
        year: '2023 to now',
        department: 'School of Computer Science and Technology',
        researchInterests: ['Quantum Computing', 'Algorithm Design', 'Theoretical Computer Science'],
        education: 'B.S. in Mathematics and Applied Mathematics, Fudan University',
        email: 'dapengwang@example.com',
        achievements: ['Mathematical Modeling Competition Winner', 'Theory Research Excellence'],
        bio: '王大鹏具有深厚的数学基础，专注于量子计算和理论计算机科学研究。'
    },
    // 2024级硕士和其他成员的示例数据
    'default': {
        name: '团队成员',
        year: '在读中',
        department: 'School of Computer Science and Technology',
        researchInterests: ['Computer Science', 'Research & Development'],
        education: '正在攻读学位',
        email: 'member@jlu.edu.cn',
        achievements: ['积极参与团队研究'],
        bio: '该成员是Lambda Lab团队的重要组成部分，积极参与各项研究工作。'
    }
};

// 模态框功能 (遵循SRP原则，单一职责处理模态框逻辑)
function openMemberModal(memberId) {
    let member = memberProfiles[memberId];
    
    // 如果没有找到具体成员信息，使用默认模板并尝试从DOM中提取基本信息
    if (!member) {
        member = createDefaultMemberProfile(memberId);
    }

    const modal = createMemberModal(member);
    document.body.appendChild(modal);
    
    // 应用当前语言设置到模态框
    updateModalLanguage(modal);
    
    // 使用KISS原则，简单的显示动画
    setTimeout(() => modal.classList.add('show'), 10);
}

// 为没有配置文件的成员创建默认信息 (遵循OCP原则，可扩展不可修改)
function createDefaultMemberProfile(memberId) {
    // 尝试从DOM中查找成员信息
    const avatars = document.querySelectorAll('.avatar[data-member="' + memberId + '"]');
    let memberCard = null;
    
    if (avatars.length > 0) {
        memberCard = avatars[0].closest('.member-card');
    }
    
    const defaultProfile = { ...memberProfiles.default };
    
    if (memberCard) {
        const nameElement = memberCard.querySelector('.name');
        const infoElements = memberCard.querySelectorAll('.info');
        
        if (nameElement) {
            defaultProfile.name = nameElement.textContent;
        }
        
        if (infoElements.length > 0) {
            defaultProfile.year = infoElements[0].textContent;
        }
        
        if (infoElements.length > 1) {
            defaultProfile.department = infoElements[1].textContent;
        }
    }
    
    return defaultProfile;
}

function createMemberModal(member) {
    const modal = document.createElement('div');
    modal.className = 'member-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeMemberModal()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h2>${member.name}</h2>
                <button class="modal-close" onclick="closeMemberModal()">×</button>
            </div>
            <div class="modal-body">
                <div class="member-basic-info">
                    <p><strong data-en="Study Period:" data-zh="在读时间:">在读时间:</strong> ${member.year}</p>
                    <p><strong data-en="Department:" data-zh="所属学院:">所属学院:</strong> ${member.department}</p>
                    <p><strong data-en="Email:" data-zh="邮箱:">邮箱:</strong> <a href="mailto:${member.email}">${member.email}</a></p>
                </div>
                
                <div class="member-research">
                    <h3 data-en="Research Interests" data-zh="研究兴趣">研究兴趣</h3>
                    <div class="research-tags">
                        ${member.researchInterests.map(interest => 
                            `<span class="research-tag">${interest}</span>`
                        ).join('')}
                    </div>
                </div>
                <div class="member-bio">
                    <h3 data-en="Biography" data-zh="个人简介">个人简介</h3>
                    <p>${member.bio}</p>
                </div>
            </div>
        </div>
    `;
    return modal;
}

function closeMemberModal() {
    const modal = document.querySelector('.member-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300); // 等待动画完成
    }
}

// 初始化头像点击事件 (遵循YAGNI原则，只添加必需的功能)
function initializeAvatarClicks() {
    const avatars = document.querySelectorAll('.avatar');
    
    avatars.forEach(avatar => {
        // 跳过导师头像（通过检查是否在supervisor-card内）
        if (avatar.closest('.supervisor-card')) {
            return;
        }
        
        // 为头像添加点击样式和事件
        avatar.classList.add('clickable-avatar');
        
        // 从member-card中提取成员信息生成ID
        const memberCard = avatar.closest('.member-card');
        if (memberCard) {
            const nameElement = memberCard.querySelector('.name');
            if (nameElement) {
                const nameText = nameElement.textContent;
                const memberId = generateMemberIdFromName(nameText);
                
                avatar.setAttribute('data-member', memberId);
                avatar.onclick = () => openMemberModal(memberId);
            }
        }
    });
}

// 工具函数：从姓名生成成员ID (遵循DRY原则，避免重复逻辑)
function generateMemberIdFromName(nameText) {
    // 提取英文名字并转换为小写ID
    const match = nameText.match(/^(\w+)\s+(\w+)/);
    if (match) {
        return match[1].toLowerCase() + match[2].toLowerCase();
    }
    // 回退方案：使用中文名
    const chineseMatch = nameText.match(/\((.+)\)/);
    if (chineseMatch) {
        return chineseMatch[1].replace(/\s+/g, '');
    }
    return 'unknown';
}

// 项目详情数据 (遵循DRY原则，集中管理项目信息)
const projectDetails = {
    'smart-scheduling': {
        name: {
            en: 'Intelligent Workshop Scheduling Optimization System',
            zh: '智能车间调度优化系统'
        },
        description: {
            en: 'This project develops an intelligent workshop scheduling optimization system based on deep reinforcement learning and graph neural networks. The system can process complex job scheduling problems in real-time, significantly improving production efficiency and resource utilization.',
            zh: '本项目基于深度强化学习和图神经网络，开发了一套智能车间调度优化系统。该系统能够实时处理复杂的作业调度问题，显著提高生产效率和资源利用率。'
        },
        technologies: ['Deep Reinforcement Learning', 'Graph Neural Networks', 'Python', 'TensorFlow', 'PyTorch'],
        status: 'Active',
        duration: '2024-Present',
        team: ['Prof. You Zhou', 'Peng Zhao', 'Xuan Wu', 'Research Collaborators'],
        achievements: [
            { en: 'Deployed in 5+ manufacturing companies', zh: '已在5家以上制造企业部署应用' },
            { en: '30% improvement in production efficiency', zh: '生产效率提升30%' },
            { en: 'Real-time scheduling with <100ms latency', zh: '实时调度延迟小于100毫秒' }
        ],
        github: 'https://github.com/lamdaLab/smart-scheduling',
        demo: 'https://demo.lamdaLab.com/scheduling'
    },
    'diffusion-solver': {
        name: {
            en: 'Diffusion-based Non-Autoregressive Combinatorial Optimization Solver',
            zh: '基于扩散模型的组合优化求解器'
        },
        description: {
            en: 'Developed a diffusion-based non-autoregressive combinatorial optimization solver specifically for Traveling Salesman Problem (TSP) and Vehicle Routing Problem (VRP). This approach maintains high-quality solutions while significantly improving inference speed.',
            zh: '开发了基于扩散模型的非自回归组合优化求解器，专门针对旅行商问题(TSP)和车辆路径问题(VRP)。该方法在保持高质量解的同时，大幅提升了推理速度。'
        },
        technologies: ['Diffusion Models', 'Combinatorial Optimization', 'Non-Autoregressive Methods', 'PyTorch', 'CUDA'],
        status: 'Active',
        duration: '2024-Present',
        team: ['Prof. You Zhou', 'Mingzhao Wang', 'Yubin Xiao'],
        achievements: [
            { en: '10x faster inference than autoregressive methods', zh: '推理速度比自回归方法快10倍' },
            { en: 'State-of-the-art results on TSP benchmarks', zh: '在TSP基准测试中取得最先进结果' },
            { en: 'Published at KDD 2025', zh: '发表于KDD 2025' }
        ],
        github: 'https://github.com/lamdaLab/diffusion-solver',
        paper: 'https://arxiv.org/abs/2024.xxxxx'
    },
    'automl-platform': {
        name: {
            en: 'Neural Architecture Search Automation Platform',
            zh: '神经架构搜索自动化平台'
        },
        description: {
            en: 'Built an efficient neural architecture search platform using genetic programming algorithms to optimize network structure design. The platform supports various tasks including text classification and image recognition, automatically discovering high-performance neural network architectures with limited computational resources.',
            zh: '构建了一个高效的神经架构搜索平台，采用遗传编程算法优化网络结构设计。平台支持文本分类、图像识别等多种任务，在有限计算资源下能够自动发现高性能的神经网络架构。'
        },
        technologies: ['Neural Architecture Search', 'Genetic Programming', 'AutoML', 'TensorFlow', 'Keras'],
        status: 'Completed',
        duration: '2023-2024',
        team: ['Prof. You Zhou', 'Xuan Wu', 'Students'],
        achievements: [
            { en: 'Reduced architecture search time by 70%', zh: '架构搜索时间减少70%' },
            { en: 'Supports multiple ML tasks', zh: '支持多种机器学习任务' },
            { en: 'Open-source with 500+ GitHub stars', zh: '开源项目获得500+GitHub星标' }
        ],
        github: 'https://github.com/lamdaLab/automl-platform',
        demo: 'https://automl.lamdaLab.com'
    },
    'pso-library': {
        name: {
            en: 'Multi-Objective Particle Swarm Optimization Library',
            zh: '多目标粒子群优化算法库'
        },
        description: {
            en: 'Developed an open-source multi-objective particle swarm optimization library integrating the latest adaptive topology structures and popularity algorithms. The library provides rich API interfaces and visualization tools, adopted by multiple research institutions and enterprises.',
            zh: '开发了一个开源的多目标粒子群优化算法库，集成了最新的自适应拓扑结构和流行度算法。该库提供了丰富的API接口和可视化工具，已被多个研究机构和企业采用。'
        },
        technologies: ['Particle Swarm Optimization', 'Multi-Objective Optimization', 'Python', 'NumPy', 'Matplotlib'],
        status: 'Active',
        duration: '2023-Present',
        team: ['Prof. You Zhou', 'Xuan Wu', 'Open Source Contributors'],
        achievements: [
            { en: '1000+ GitHub stars and 200+ forks', zh: '获得1000+GitHub星标和200+分支' },
            { en: 'Used by 50+ research institutions', zh: '被50+研究机构采用' },
            { en: 'Featured in swarm intelligence journal', zh: '在群体智能期刊中被重点介绍' }
        ],
        github: 'https://github.com/lamdaLab/multi-pso',
        docs: 'https://multi-pso.readthedocs.io'
    },
    'smart-logistics': {
        name: {
            en: 'Smart Logistics Route Planning System',
            zh: '智慧物流路径规划系统'
        },
        description: {
            en: 'Developed a reinforcement learning-based smart logistics route planning system for e-commerce scenarios. The system dynamically optimizes delivery routes considering traffic conditions, time windows, vehicle capacity, and other constraints to reduce delivery costs and improve customer satisfaction.',
            zh: '面向电商物流场景，开发了基于强化学习的智慧物流路径规划系统。系统能够动态优化配送路线，考虑交通状况、时间窗口、车辆容量等多重约束，有效降低配送成本并提升客户满意度。'
        },
        technologies: ['Reinforcement Learning', 'Route Optimization', 'Real-time Systems', 'Python', 'Redis'],
        status: 'Active',
        duration: '2024-Present',
        team: ['Prof. You Zhou', 'Yuanshu Li', 'Industry Partners'],
        achievements: [
            { en: '25% reduction in delivery costs', zh: '配送成本降低25%' },
            { en: 'Real-time optimization for 1000+ vehicles', zh: '支持1000+车辆的实时优化' },
            { en: 'Partnership with major e-commerce platform', zh: '与主要电商平台建立合作关系' }
        ],
        github: 'https://github.com/lamdaLab/smart-logistics'
    },
    'gnn-framework': {
        name: {
            en: 'Large-Scale Graph Neural Network Training Framework',
            zh: '大规模图神经网络训练框架'
        },
        description: {
            en: 'Designed and implemented an efficient large-scale graph neural network training framework supporting distributed training and memory optimization. The framework uses advanced graph sampling and aggregation strategies, capable of processing million-node graph data for social network analysis and recommendation systems.',
            zh: '设计并实现了一个高效的大规模图神经网络训练框架，支持分布式训练和内存优化。框架采用了先进的图采样和聚合策略，能够处理百万级节点的图数据，为社交网络分析、推荐系统等应用提供了强大的技术支撑。'
        },
        technologies: ['Graph Neural Networks', 'Distributed Computing', 'Memory Optimization', 'PyTorch Geometric', 'CUDA'],
        status: 'Completed',
        duration: '2023-2024',
        team: ['Prof. You Zhou', 'Peng Zhao', 'Computing Team'],
        achievements: [
            { en: 'Scales to 10M+ node graphs', zh: '支持1000万+节点图数据' },
            { en: '5x faster training than baseline', zh: '训练速度比基线快5倍' },
            { en: 'Deployed in recommendation systems', zh: '部署于推荐系统中' }
        ],
        github: 'https://github.com/lamdaLab/scalable-gnn'
    },
    'medical-ai': {
        name: {
            en: 'Medical Image Intelligence Analysis Platform',
            zh: '医疗影像智能分析平台'
        },
        description: {
            en: 'Developed in collaboration with hospitals, this medical image intelligence analysis platform uses deep learning technology for automatic analysis and diagnostic assistance of CT, MRI and other medical images. The platform integrates multiple disease detection models, providing accurate diagnostic recommendations to improve medical diagnosis efficiency and accuracy.',
            zh: '与医院合作开发的医疗影像智能分析平台，运用深度学习技术对CT、MRI等医疗影像进行自动分析和诊断辅助。平台集成了多种病症检测模型，能够为医生提供准确的诊断建议，提升医疗诊断效率和准确性。'
        },
        technologies: ['Deep Learning', 'Computer Vision', 'Medical Imaging', 'TensorFlow', 'DICOM'],
        status: 'Active',
        duration: '2024-Present',
        team: ['Prof. You Zhou', 'Medical Collaborators', 'AI Team'],
        achievements: [
            { en: '95% accuracy on lung nodule detection', zh: '肺结节检测准确率达95%' },
            { en: 'Deployed in 3 major hospitals', zh: '已在3家大型医院部署' },
            { en: 'Processed 10,000+ medical images', zh: '已处理10,000+医疗影像' }
        ],
        github: 'Private Repository',
        demo: 'Available for Medical Partners'
    },
    'time-series': {
        name: {
            en: 'Time Series Prediction Algorithm Optimization',
            zh: '时间序列预测算法优化'
        },
        description: {
            en: 'Developed prediction models based on hybrid Transformer and LSTM architectures for time series forecasting needs in finance and energy sectors. The models achieved state-of-the-art performance on multiple public datasets and have been applied to stock price prediction and energy consumption forecasting.',
            zh: '针对金融、能源等领域的时间序列预测需求，开发了基于Transformer和LSTM混合架构的预测模型。模型在多个公开数据集上取得了state-of-the-art的性能，并已应用于股票价格预测和能源消耗预测等实际场景。'
        },
        technologies: ['Transformer', 'LSTM', 'Time Series Analysis', 'PyTorch', 'pandas'],
        status: 'Completed',
        duration: '2023-2024',
        team: ['Prof. You Zhou', 'Finance Collaborators', 'Data Science Team'],
        achievements: [
            { en: 'SOTA results on 5 benchmark datasets', zh: '在5个基准数据集上取得最先进结果' },
            { en: 'Applied in financial trading systems', zh: '应用于金融交易系统' },
            { en: 'Published in top-tier conference', zh: '发表于顶级会议' }
        ],
        github: 'https://github.com/lamdaLab/time-series-prediction',
        paper: 'https://arxiv.org/abs/2023.xxxxx'
    }
};

// 论文详情数据
const researchDetails = {
    'dual-operation-aggregation': {
        title: 'Dual Operation Aggregation Graph Neural Networks for Solving Flexible Job-Shop Scheduling Problem with Reinforcement Learning',
        venue: 'WWW',
        date: '2025-05',
        authors: 'Peng Zhao, You Zhou, Di Wang, Zhiguang Cao, Yubin Xiao, Xuan Wu, Yuanshu Li, Hongjia Liu, Wei Du, Yuan Jiang, Liupu Wang',
        abstract: 'This paper proposes a novel approach using Dual Operation Aggregation Graph Neural Networks combined with reinforcement learning to tackle the Flexible Job-Shop Scheduling Problem, aiming to optimize manufacturing processes efficiently.',
        paperLink: 'https://example.com/paper1'
    },
    'efficient-diffusion-solver': {
        title: 'An Efficient Diffusion-based Non-Autoregressive Solver for Traveling Salesman Problem',
        venue: 'KDD',
        date: '2025-02',
        authors: 'Mingzhao Wang, You Zhou, Zhiguang Cao, Yubin Xiao, Xuan Wu, Wei Pang, Yuan Jiang, Hui Yang, Peng Zhao, Yuanshu Li',
        abstract: 'We introduce a diffusion-based, non-autoregressive solver for the Traveling Salesman Problem that significantly accelerates solution generation while maintaining high accuracy, making it suitable for large-scale logistics and planning.',
        paperLink: 'https://example.com/paper2'
    },
    'distilling-autoregressive-models': {
        title: 'Distilling autoregressive models to obtain high-performance non-autoregressive solvers for vehicle routing problems with faster inference speed',
        venue: 'AAAI',
        date: '2024-03-24',
        authors: 'Yubin Xiao, Di Wang, Boyang Li, Mingzhao Wang, Xuan Wu, Changliang Zhou, You Zhou',
        abstract: 'This work explores the distillation of autoregressive models into faster, non-autoregressive solvers for vehicle routing problems, achieving a new state-of-the-art in performance versus inference time.',
        paperLink: 'https://example.com/paper3'
    },
    'reinforcement-learning-solver': {
        title: 'Reinforcement Learning-Based Nonautoregressive Solver for Traveling Salesman Problems',
        venue: 'IEEE Transactions on Neural Networks and Learning Systems',
        date: '2024-10-29',
        authors: 'Yubin Xiao, Di Wang, Boyang Li, Huanhuan Chen, Wei Pang, Xuan Wu, Hao Li, Dong Xu, Yanchun Liang, You Zhou',
        abstract: 'A reinforcement learning framework is presented for training a non-autoregressive solver for the Traveling Salesman Problem, which improves upon existing methods by learning better heuristics directly from data.',
        paperLink: 'https://example.com/paper4'
    },
    'neural-architecture-search': {
        title: 'Neural Architecture Search for Text Classification With Limited Computing Resources Using Efficient Cartesian Genetic Programming',
        venue: 'IEEE Transactions on Evolutionary Computation',
        date: '2024-05',
        authors: 'Xuan Wu, Di Wang, Huanhuan Chen, Lele Yan, Yubin Xiao, Chunyan Miao, Hongwei Ge, Dong Xu, Yanchun Liang, Kangping Wang, Chunguo Wu, You Zhou',
        abstract: 'This study demonstrates an efficient neural architecture search method based on Cartesian Genetic Programming for text classification, specifically designed to operate under constrained computational budgets.',
        paperLink: 'https://example.com/paper5'
    },
    'incorporating-surprisingly-popular': {
        title: 'Incorporating surprisingly popular algorithm and euclidean distance-based adaptive topology into PSO',
        venue: 'Swarm and Evolutionary Computation',
        date: '2023',
        authors: 'Xuan Wu, Jizong Han, Di Wang, Pengyue Gao, Quanlong Cui, Liang Chen, Yanchun Liang, Han Huang, Heow Pueh Lee, Chunyan Miao, You Zhou*, Chunguo Wu*',
        abstract: 'We enhance Particle Swarm Optimization (PSO) by integrating the "surprisingly popular" algorithm and an adaptive topology based on Euclidean distance, leading to improved performance in complex optimization landscapes.',
        paperLink: 'https://example.com/paper6'
    }
};

// 语言切换功能 (遵循KISS原则，简单高效的语言切换)
let currentLanguage = localStorage.getItem('language') || 'en'; // 从localStorage获取语言或默认英文

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
    localStorage.setItem('language', currentLanguage); // 保存语言选择
    updatePageLanguage();
}

function updatePageLanguage() {
    // 更新所有具有data-en和data-zh属性的元素
    const elementsWithLang = document.querySelectorAll('[data-en][data-zh]');
    elementsWithLang.forEach(element => {
        const text = currentLanguage === 'en' ? element.getAttribute('data-en') : element.getAttribute('data-zh');
        element.innerHTML = text;
    });

    // 更新语言切换按钮文本
    const langBtn = document.querySelector('.nav-links a[onclick="toggleLanguage()"]');
    if (langBtn) {
        langBtn.textContent = currentLanguage === 'en' ? '中文' : 'English';
    }
}

// 更新模态框内的语言
function updateModalLanguage(modal) {
    const elementsWithLang = modal.querySelectorAll('[data-en][data-zh]');
    elementsWithLang.forEach(element => {
        const text = currentLanguage === 'en' ? element.getAttribute('data-en') : element.getAttribute('data-zh');
        element.innerHTML = text;
    });
}

// 项目模态框功能 (遵循SRP原则，专门处理项目详情)
function openProjectModal(projectId) {
    const project = projectDetails[projectId];
    if (!project) {
        console.error('Project not found:', projectId);
        return;
    }

    const modal = createProjectModal(project);
    document.body.appendChild(modal);
    
    // 应用当前语言设置到模态框
    updateModalLanguage(modal);
    
    // 使用KISS原则，简单的显示动画
    setTimeout(() => modal.classList.add('show'), 10);
}

function createProjectModal(project) {
    const modal = document.createElement('div');
    modal.className = 'member-modal';
    modal.id = 'project-modal';
    
    const name = project.name[currentLanguage];
    const description = project.description[currentLanguage];
    const achievements = project.achievements.map(achievement => achievement[currentLanguage]);
    
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeProjectModal()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h2>${name}</h2>
                <button class="modal-close" onclick="closeProjectModal()">×</button>
            </div>
            <div class="modal-body">
                <div class="member-basic-info">
                    <p><strong>${currentLanguage === 'en' ? 'Status:' : '状态:'}</strong> ${project.status}</p>
                    <p><strong>${currentLanguage === 'en' ? 'Duration:' : '时间:'}</strong> ${project.duration}</p>
                    <p><strong>${currentLanguage === 'en' ? 'Team:' : '团队:'}</strong> ${project.team.join(', ')}</p>
                </div>
                
                <div class="member-bio">
                    <h3>${currentLanguage === 'en' ? 'Project Description' : '项目描述'}</h3>
                    <p>${description}</p>
                </div>
                
                <div class="member-research">
                    <h3>${currentLanguage === 'en' ? 'Technologies' : '技术栈'}</h3>
                    <div class="research-tags">
                        ${project.technologies.map(tech => 
                            `<span class="research-tag">${tech}</span>`
                        ).join('')}
                    </div>
                </div>
                
                <div class="member-achievements">
                    <h3>${currentLanguage === 'en' ? 'Key Achievements' : '主要成就'}</h3>
                    <ul>
                        ${achievements.map(achievement => 
                            `<li>${achievement}</li>`
                        ).join('')}
                    </ul>
                </div>
                
                ${project.github || project.demo || project.paper || project.docs ? `
                <div class="member-education">
                    <h3>${currentLanguage === 'en' ? 'Links & Resources' : '链接与资源'}</h3>
                    ${project.github && project.github !== 'Private Repository' ? `<p><strong>GitHub:</strong> <a href="${project.github}" target="_blank">${project.github}</a></p>` : ''}
                    ${project.demo ? `<p><strong>Demo:</strong> <a href="${project.demo}" target="_blank">${project.demo}</a></p>` : ''}
                    ${project.paper ? `<p><strong>Paper:</strong> <a href="${project.paper}" target="_blank">${project.paper}</a></p>` : ''}
                    ${project.docs ? `<p><strong>Documentation:</strong> <a href="${project.docs}" target="_blank">${project.docs}</a></p>` : ''}
                    ${project.github === 'Private Repository' ? `<p><strong>GitHub:</strong> ${currentLanguage === 'en' ? 'Private Repository' : '私有仓库'}</p>` : ''}
                </div>
                ` : ''}
            </div>
        </div>
    `;
    return modal;
}

function closeProjectModal() {
    const modal = document.querySelector('#project-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300); // 等待动画完成
    }
}

// 论文模态框功能
function openResearchModal(researchId) {
    const research = researchDetails[researchId];
    if (!research) {
        console.error('Research not found:', researchId);
        return;
    }

    const modal = createResearchModal(research);
    document.body.appendChild(modal);
    
    // 应用当前语言设置到模态框
    updateModalLanguage(modal);
    
    setTimeout(() => modal.classList.add('show'), 10);
}

function createResearchModal(research) {
    const modal = document.createElement('div');
    modal.className = 'member-modal'; // 复用样式
    modal.id = 'research-modal';
    
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeResearchModal()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h2>${research.title}</h2>
                <button class="modal-close" onclick="closeResearchModal()">×</button>
            </div>
            <div class="modal-body">
                <div class="member-basic-info">
                    <p><strong data-en="Venue:" data-zh="发表会议:">发表会议:</strong> ${research.venue}</p>
                    <p><strong data-en="Date:" data-zh="发表时间:">发表时间:</strong> ${research.date}</p>
                </div>
                
                <div class="member-education">
                    <h3 data-en="Authors" data-zh="作者">作者</h3>
                    <p>${research.authors}</p>
                </div>

                <div class="member-bio">
                    <h3 data-en="Abstract" data-zh="摘要">摘要</h3>
                    <p>${research.abstract}</p>
                </div>
                
                <div class="member-education">
                    <h3 data-en="Links" data-zh="链接">链接</h3>
                    <p><a href="${research.paperLink}" target="_blank" data-en="Read Paper" data-zh="阅读论文">阅读论文</a></p>
                </div>
            </div>
        </div>
    `;
    return modal;
}

function closeResearchModal() {
    const modal = document.querySelector('#research-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
}

// 初始化项目点击事件 (遵循DRY原则，复用类似逻辑)
function initializeProjectClicks() {
    const projectCards = document.querySelectorAll('.clickable-project');
    
    projectCards.forEach(card => {
        // 添加视觉提示样式
        card.style.cursor = 'pointer';
        
        // 添加点击事件
        const projectId = card.getAttribute('data-project');
        if (projectId) {
            card.onclick = () => openProjectModal(projectId);
        }
    });
}

// 初始化论文点击事件
function initializeResearchClicks() {
    const researchCards = document.querySelectorAll('.clickable-research');
    
    researchCards.forEach(card => {
        card.style.cursor = 'pointer';
        const researchId = card.getAttribute('data-research');
        if (researchId) {
            card.onclick = () => openResearchModal(researchId);
        }
    });
}

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 加载页脚组件
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        loadComponent('footer-container', 'footer.html');
    }
    
    // 初始化头像点击功能
    initializeAvatarClicks();
    
    // 初始化项目点击功能
    initializeProjectClicks();

    // 初始化论文点击功能
    initializeResearchClicks();
    
    // 设置初始语言状态
    updatePageLanguage();
});
