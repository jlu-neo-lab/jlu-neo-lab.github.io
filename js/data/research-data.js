// 论文详情数据
const researchDetails = {
    'visual-fjsp': {
        title: 'Visual-Enhanced Multimodal Framework for Flexible Job Shop Scheduling Problem',
        venue: 'MM',
        date: '2025',
        authors: 'Peng Zhao, Zhiguang Cao, Di Wang, Wen Song, Wei Pang, You Zhou, Yuan Jiang',
        abstract: '.',
        paperLink: 'https://example.com/paper1'
    },
    'DGL': {
        title: 'DGL: Dynamic Global-Local Information Aggregation for Scalable VRP Generalization with Self-Improvement Learning',
        venue: 'IJCAI',
        date: '2025',
        authors: 'Yubin Xiao, Yuesong Wu, Rui Cao, Di Wang, Zhiguang Cao, Xuan Wu, Peng Zhao, Yuanshu Li, You Zhou, Yuan Jiang',
        abstract: '.',
        paperLink: 'https://example.com/paper1'
    },
    'Hercules': {
        title: 'Efficient Heuristics Generation for Solving Combinatorial Optimization Problems Using Large Language Models',
        venue: 'KDD',
        date: '2025',
        authors: 'Xuan Wu, Di Wang, Chunguo Wu, Lijie Wen, Chunyan Miao, Yubin Xiao, You Zhou',
        abstract: '.',
        paperLink: 'https://dl.acm.org/doi/abs/10.1145/3711896.3736923'
    },
    'UGAS': {
        title: 'Wenhao Song, Xuan Wu, Bo Yang, You Zhou, Yubin Xiao, Yanchun Liang, Hongwei Ge, Heow Pueh Lee, Chunguo Wu',
        venue: 'KDD',
        date: '2025',
        authors: 'Xuan Wu, Di Wang, Chunguo Wu, Lijie Wen, Chunyan Miao, Yubin Xiao, You Zhou',
        abstract: '.',
        paperLink: 'https://dl.acm.org/doi/abs/10.1145/3711896.3737162'
    },
    'dual-operation-aggregation': {
        title: 'Dual Operation Aggregation Graph Neural Networks for Solving Flexible Job-Shop Scheduling Problem with Reinforcement Learning',
        venue: 'WWW',
        date: '2025',
        authors: 'Peng Zhao, You Zhou, Di Wang, Zhiguang Cao, Yubin Xiao, Xuan Wu, Yuanshu Li, Hongjia Liu, Wei Du, Yuan Jiang, Liupu Wang',
        abstract: 'This paper proposes a novel approach using Dual Operation Aggregation Graph Neural Networks combined with reinforcement learning to tackle the Flexible Job-Shop Scheduling Problem, aiming to optimize manufacturing processes efficiently.',
        paperLink: 'https://dl.acm.org/doi/10.1145/3690624.3709343'
    },
    'efficient-diffusion-solver': {
        title: 'An Efficient Diffusion-based Non-Autoregressive Solver for Traveling Salesman Problem',
        venue: 'KDD',
        date: '2025-',
        authors: 'Mingzhao Wang, You Zhou, Zhiguang Cao, Yubin Xiao, Xuan Wu, Wei Pang, Yuan Jiang, Hui Yang, Peng Zhao, Yuanshu Li',
        abstract: 'We introduce a diffusion-based, non-autoregressive solver for the Traveling Salesman Problem that significantly accelerates solution generation while maintaining high accuracy, making it suitable for large-scale logistics and planning.',
        paperLink: 'https://example.com/paper2'
    },
    'distilling-autoregressive-models': {
        title: 'Distilling autoregressive models to obtain high-performance non-autoregressive solvers for vehicle routing problems with faster inference speed',
        venue: 'AAAI',
        date: '2024',
        authors: 'Yubin Xiao, Di Wang, Boyang Li, Mingzhao Wang, Xuan Wu, Changliang Zhou, You Zhou',
        abstract: 'This work explores the distillation of autoregressive models into faster, non-autoregressive solvers for vehicle routing problems, achieving a new state-of-the-art in performance versus inference time.',
        paperLink: 'https://ojs.aaai.org/index.php/AAAI/article/view/30008/31770'
    },
    'reinforcement-learning-solver': {
        title: 'Reinforcement Learning-Based Nonautoregressive Solver for Traveling Salesman Problems',
        venue: 'IEEE Transactions on Neural Networks and Learning Systems',
        date: '2024',
        authors: 'Yubin Xiao, Di Wang, Boyang Li, Huanhuan Chen, Wei Pang, Xuan Wu, Hao Li, Dong Xu, Yanchun Liang, You Zhou',
        abstract: 'A reinforcement learning framework is presented for training a non-autoregressive solver for the Traveling Salesman Problem, which improves upon existing methods by learning better heuristics directly from data.',
        paperLink: 'https://ieeexplore.ieee.org/abstract/document/10737904'
    },
    'neural-architecture-search': {
        title: 'Neural Architecture Search for Text Classification With Limited Computing Resources Using Efficient Cartesian Genetic Programming',
        venue: 'IEEE Transactions on Evolutionary Computation',
        date: '2024',
        authors: 'Xuan Wu, Di Wang, Huanhuan Chen, Lele Yan, Yubin Xiao, Chunyan Miao, Hongwei Ge, Dong Xu, Yanchun Liang, Kangping Wang, Chunguo Wu, You Zhou',
        abstract: 'This study demonstrates an efficient neural architecture search method based on Cartesian Genetic Programming for text classification, specifically designed to operate under constrained computational budgets.',
        paperLink: 'https://ieeexplore.ieee.org/abstract/document/10373942'
    },
    'incorporating-surprisingly-popular': {
        title: 'Incorporating Surprisingly Popular Algorithm and Euclidean Distance-based Adaptive Topology into PSO',
        venue: 'Swarm and Evolutionary Computation',
        date: '2023',
        authors: 'Xuan Wu, Jizong Han, Di Wang, Pengyue Gao, Quanlong Cui, Liang Chen, Yanchun Liang, Han Huang, Heow Pueh Lee, Chunyan Miao, You Zhou*, Chunguo Wu*',
        abstract: 'We enhance Particle Swarm Optimization (PSO) by integrating the "surprisingly popular" algorithm and an adaptive topology based on Euclidean distance, leading to improved performance in complex optimization landscapes.',
        paperLink: 'https://www.sciencedirect.com/science/article/pii/S2210650222001882'
    }
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { researchDetails };
} else if (typeof window !== 'undefined') {
    window.ResearchData = { researchDetails };
}
