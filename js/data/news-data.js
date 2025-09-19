// 实验室新闻资讯数据
const newsData = {
     'NeurIPS2025': {
        title: {
            en: 'One paper got accepted by NeurIPS’25',
            zh: '我们的一篇论文被NeurIPS’25接受！'
        },
        date: '2025-09-19',
        category: {
            en: 'Academic News',
            zh: '学术动态'
        },
        summary: {
            en: 'Congratulations to Jiaqi on having the paper accepted to NeurIPS’25!',
            zh: '祝贺佳琦的论文被NeurIPS’25接受！'
        },
        content: {
            en: 'Congratulations to Jiaqi on having the paper accepted to NeurIPS’25!',
            zh: '祝贺佳琦的论文被NeurIPS’25接受！'
        },
        image: 'https://via.placeholder.com/600x300',
        tags: ['Team',  'Welcome']
    }
    'team-expansion-2025': {
        title: {
            en: 'The official website of NeO lab has launched!!',
            zh: 'NeO实验室的官方网站上线啦！！'
        },
        date: '2025-09-15',
        category: {
            en: 'Team News',
            zh: '团队动态'
        },
        summary: {
            en: 'We are pleased to announce the official launch of our laboratory’s website, where we will share our research achievements.',
            zh: '我们很高兴我们实验室的官方网站正式上线，在这里我们将分享我们的研究成果。'
        },
        content: {
            en: 'We are pleased to announce the official launch of our laboratory website. Our principal research interests lie in Neural Combinatorial Optimization (the use of neural models to tackle combinatorial optimization problems) and in the applications of large language models (LLMs), with particular emphasis on automated code generation. Through this website, we aim to share our findings with the broader community and foster collaboration.',
            zh: '我们荣幸地宣布实验室网站正式上线。我们的主要研究方向为神经组合优化（利用神经模型解决组合优化问题）以及大型语言模型 (LLM) 的应用，尤其侧重于自动代码生成。通过此网站，我们旨在与更广泛的社区分享我们的研究成果，并促进合作。'
        },
        image: 'https://via.placeholder.com/600x300',
        tags: ['Team',  'Welcome']
    }
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { newsData };
} else if (typeof window !== 'undefined') {
    window.NewsData = { newsData };
}

