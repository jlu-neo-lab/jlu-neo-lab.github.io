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
    }
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { newsData };
} else if (typeof window !== 'undefined') {
    window.NewsData = { newsData };
}

