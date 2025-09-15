// 实验室新闻资讯数据
const newsData = {
    'team-expansion-2025': {
        title: {
            en: 'NeO Lab Welcomes New PhD Students in 2025',
            zh: 'Lambda实验室2025年迎来新博士生'
        },
        date: '2025-01-15',
        category: {
            en: 'Team News',
            zh: '团队动态'
        },
        summary: {
            en: 'We are excited to welcome new PhD students joining our research team this year, bringing fresh perspectives to our ongoing projects.',
            zh: '我们很高兴迎来今年加入研究团队的新博士生，他们为我们正在进行的项目带来了新的视角。'
        },
        content: {
            en: 'NeO Lab is thrilled to announce the arrival of our newest PhD students for the 2025 academic year. These talented researchers bring diverse backgrounds in machine learning, optimization, and artificial intelligence. We look forward to their contributions to our ongoing research in combinatorial optimization, neural architecture search, and large language models.',
            zh: 'Lambda实验室很高兴宣布2025学年新博士生的到来。这些才华横溢的研究人员在机器学习、优化和人工智能方面拥有不同的背景。我们期待他们在组合优化、神经架构搜索和大语言模型等正在进行的研究中做出贡献。'
        },
        image: 'https://via.placeholder.com/600x300',
        tags: ['Team', 'PhD Students', 'Welcome']
    },
    'kdd-paper-accepted': {
        title: {
            en: 'Paper Accepted at KDD 2025',
            zh: 'KDD 2025论文被接收'
        },
        date: '2025-01-10',
        category: {
            en: 'Research Achievement',
            zh: '研究成果'
        },
        summary: {
            en: 'Our research on diffusion-based combinatorial optimization has been accepted at KDD 2025, marking another milestone in our AI research.',
            zh: '我们关于基于扩散模型的组合优化研究被KDD 2025接收，这是我们人工智能研究的又一个里程碑。'
        },
        content: {
            en: 'We are proud to announce that our paper "An Efficient Diffusion-based Non-Autoregressive Solver for Traveling Salesman Problem" has been accepted at KDD 2025. This work represents a significant advancement in solving combinatorial optimization problems using diffusion models, achieving 10x faster inference while maintaining solution quality.',
            zh: '我们自豪地宣布，我们的论文《基于扩散模型的高效非自回归旅行商问题求解器》被KDD 2025接收。这项工作代表了使用扩散模型解决组合优化问题的重大进展，在保持解质量的同时实现了10倍的推理速度提升。'
        },
        image: 'https://via.placeholder.com/600x300',
        tags: ['KDD', 'Publication', 'Diffusion Models', 'TSP']
    },
    'industry-collaboration': {
        title: {
            en: 'New Industry Partnership Announced',
            zh: '宣布新的产业合作伙伴关系'
        },
        date: '2025-01-05',
        category: {
            en: 'Partnership',
            zh: '合作伙伴'
        },
        summary: {
            en: 'NeO Lab partners with leading technology companies to advance AI applications in smart manufacturing and logistics.',
            zh: 'Lambda实验室与领先的科技公司合作，推进人工智能在智能制造和物流领域的应用。'
        },
        content: {
            en: 'We are excited to announce new partnerships with several industry leaders in manufacturing and logistics. These collaborations will focus on applying our research in reinforcement learning and optimization to real-world production scheduling and route planning challenges. The partnerships will provide valuable datasets and practical validation opportunities for our algorithms.',
            zh: '我们很高兴宣布与制造业和物流业的几家行业领导者建立新的合作伙伴关系。这些合作将专注于将我们在强化学习和优化方面的研究应用于现实世界的生产调度和路径规划挑战。这些合作伙伴关系将为我们的算法提供宝贵的数据集和实际验证机会。'
        },
        image: 'https://via.placeholder.com/600x300',
        tags: ['Industry', 'Collaboration', 'Manufacturing', 'Logistics']
    },
    'conference-presentation': {
        title: {
            en: 'Outstanding Presentation at AAAI 2024',
            zh: 'AAAI 2024杰出报告'
        },
        date: '2024-12-20',
        category: {
            en: 'Conference',
            zh: '会议报告'
        },
        summary: {
            en: 'Our team delivered an outstanding presentation on vehicle routing problems at AAAI 2024, receiving positive feedback from the research community.',
            zh: '我们的团队在AAAI 2024上就车辆路径问题发表了杰出报告，获得了研究界的积极反馈。'
        },
        content: {
            en: 'At AAAI 2024, our research on "Distilling autoregressive models to obtain high-performance non-autoregressive solvers for vehicle routing problems" was presented to an enthusiastic audience. The presentation highlighted our novel approach to knowledge distillation in combinatorial optimization, sparking interesting discussions with fellow researchers about future applications and extensions.',
            zh: '在AAAI 2024上，我们关于"蒸馏自回归模型以获得车辆路径问题高性能非自回归求解器"的研究向热情的观众进行了展示。报告重点介绍了我们在组合优化中知识蒸馏的新方法，引发了与同行研究人员关于未来应用和扩展的有趣讨论。'
        },
        image: 'https://via.placeholder.com/600x300',
        tags: ['AAAI', 'Presentation', 'VRP', 'Knowledge Distillation']
    },
    'lab-equipment-upgrade': {
        title: {
            en: 'Laboratory Computing Infrastructure Upgrade',
            zh: '实验室计算基础设施升级'
        },
        date: '2024-12-15',
        category: {
            en: 'Infrastructure',
            zh: '基础设施'
        },
        summary: {
            en: 'NeO Lab has upgraded its computing infrastructure with new high-performance GPUs to support large-scale machine learning research.',
            zh: 'Lambda实验室升级了计算基础设施，配备了新的高性能GPU以支持大规模机器学习研究。'
        },
        content: {
            en: 'We have significantly enhanced our computational capabilities with the installation of state-of-the-art GPU clusters. This upgrade will enable us to tackle more complex optimization problems, train larger neural networks, and accelerate our research in deep learning and AI. The new infrastructure supports both individual research projects and collaborative efforts across multiple research areas.',
            zh: '我们通过安装最先进的GPU集群显著增强了计算能力。这次升级将使我们能够处理更复杂的优化问题，训练更大的神经网络，并加速我们在深度学习和人工智能方面的研究。新的基础设施支持个人研究项目和跨多个研究领域的合作努力。'
        },
        image: 'https://via.placeholder.com/600x300',
        tags: ['Infrastructure', 'GPU', 'Computing', 'Research']
    }, 
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { newsData };
} else if (typeof window !== 'undefined') {
    window.NewsData = { newsData };
}

