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

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { memberProfiles };
} else if (typeof window !== 'undefined') {
    window.MemberData = { memberProfiles };
}
