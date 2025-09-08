// 实验室新闻资讯数据
const newsData = {
    'team-expansion-2025': {
        title: {
            en: 'Lambda Lab Welcomes New PhD Students in 2025',
            zh: 'Lambda实验室2025年迎来新博士生'
        },
        date: '2025-01-15',
        category: {
            en: 'Team News',
            zh: '团队动态'
        },
        summary: {
            en: 'We are excited to welcome new PhD students joining our research team this year.',
            zh: '我们很高兴迎来今年加入研究团队的新博士生。'
        },
        content: {
            en: 'Lambda Lab is thrilled to announce the arrival of our newest PhD students for the 2025 academic year. These talented researchers bring diverse backgrounds in machine learning and optimization.',
            zh: 'Lambda实验室很高兴宣布2025学年新博士生的到来。这些才华横溢的研究人员在机器学习和优化方面拥有不同的背景。'
        }
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
            en: 'Our research on diffusion-based combinatorial optimization has been accepted at KDD 2025.',
            zh: '我们关于基于扩散模型的组合优化研究被KDD 2025接收。'
        },
        content: {
            en: 'We are proud to announce that our paper on diffusion-based non-autoregressive solver for TSP has been accepted at KDD 2025.',
            zh: '我们自豪地宣布，我们关于基于扩散模型的非自回归TSP求解器的论文被KDD 2025接收。'
        }
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
            en: 'Lambda Lab partners with leading technology companies.',
            zh: 'Lambda实验室与领先的科技公司合作。'
        },
        content: {
            en: 'We are excited to announce new partnerships with industry leaders in manufacturing and logistics.',
            zh: '我们很高兴宣布与制造业和物流业的行业领导者建立新的合作伙伴关系。'
        }
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
            en: 'Our team delivered an outstanding presentation at AAAI 2024.',
            zh: '我们的团队在AAAI 2024上发表了杰出报告。'
        },
        content: {
            en: 'At AAAI 2024, our research on vehicle routing problems was presented to an enthusiastic audience.',
            zh: '在AAAI 2024上，我们关于车辆路径问题的研究向热情的观众进行了展示。'
        }
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
            en: 'Lambda Lab has upgraded its computing infrastructure with new high-performance GPUs.',
            zh: 'Lambda实验室升级了计算基础设施，配备了新的高性能GPU。'
        },
        content: {
            en: 'We have significantly enhanced our computational capabilities with the installation of state-of-the-art GPU clusters.',
            zh: '我们通过安装最先进的GPU集群显著增强了计算能力。'
        }
    },
    'student-awards': {
        title: {
            en: 'Students Receive Outstanding Research Awards',
            zh: '学生获得杰出研究奖'
        },
        date: '2024-12-10',
        category: {
            en: 'Awards',
            zh: '获奖信息'
        },
        summary: {
            en: 'Several Lambda Lab students have been recognized with prestigious awards.',
            zh: 'Lambda实验室的几名学生获得了著名奖项。'
        },
        content: {
            en: 'We are proud to announce that several of our graduate students have received prestigious awards for their research excellence.',
            zh: '我们自豪地宣布，我们的几名研究生因其研究卓越而获得了著名奖项。'
        }
    },
    'workshop-organization': {
        title: {
            en: 'Lambda Lab Organizes International Workshop',
            zh: 'Lambda实验室组织国际研讨会'
        },
        date: '2024-11-25',
        category: {
            en: 'Conference',
            zh: '会议报告'
        },
        summary: {
            en: 'Successfully organized an international workshop on combinatorial optimization.',
            zh: '成功组织了组合优化国际研讨会。'
        },
        content: {
            en: 'Our lab successfully organized an international workshop bringing together leading researchers in combinatorial optimization.',
            zh: '我们的实验室成功组织了一次国际研讨会，汇聚了组合优化领域的顶尖研究人员。'
        }
    },
    'new-funding': {
        title: {
            en: 'Lambda Lab Receives Major Research Grant',
            zh: 'Lambda实验室获得重大研究资助'
        },
        date: '2024-11-10',
        category: {
            en: 'Funding',
            zh: '资助信息'
        },
        summary: {
            en: 'Received substantial funding for next-generation AI research projects.',
            zh: '获得下一代人工智能研究项目的大量资金。'
        },
        content: {
            en: 'We are excited to announce that Lambda Lab has received a major research grant to advance our work in AI and optimization.',
            zh: '我们很高兴宣布Lambda实验室获得了重大研究资助，以推进我们在人工智能和优化方面的工作。'
        }
    }
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { newsData };
} else if (typeof window !== 'undefined') {
    window.NewsData = { newsData };
}
