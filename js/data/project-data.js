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

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projectDetails };
} else if (typeof window !== 'undefined') {
    window.ProjectData = { projectDetails };
}
