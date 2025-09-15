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
    }
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { newsData };
} else if (typeof window !== 'undefined') {
    window.NewsData = { newsData };
}

