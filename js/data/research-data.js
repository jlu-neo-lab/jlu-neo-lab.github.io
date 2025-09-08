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

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { researchDetails };
} else if (typeof window !== 'undefined') {
    window.ResearchData = { researchDetails };
}
