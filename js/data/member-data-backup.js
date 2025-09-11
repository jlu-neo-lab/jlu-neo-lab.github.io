// 合并后的成员信息数据
// 生成时间: 2025/9/11 12:36:04
// 包含原始数据和从 Excel 导入的数据

const memberProfiles = {
    "xuanwu": {
        "name": "Xuan Wu (吴翾)",
        "year": "2022 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Deep Learning",
            "Neural Architecture Search",
            "Computer Vision"
        ],
        "email": "xuanwu@example.com",
        "bio": "吴翾是一名专注于深度学习和神经架构搜索的博士研究生，在计算机视觉领域有着丰富的研究经验。"
    },
    "pengzhao": {
        "name": "Peng Zhao (赵鹏)",
        "year": "2023 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Machine Learning",
            "Optimization",
            "Algorithm Design"
        ],
        "email": "pengzhao@example.com",
        "bio": "赵鹏致力于机器学习优化算法的研究，在算法设计方面具有深厚的理论基础。"
    },
    "yuanshuli": {
        "name": "Yuanshu Li (李沅书)",
        "year": "2024 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Natural Language Processing",
            "Large Language Models",
            "Text Mining"
        ],
        "email": "yuanshuli@example.com",
        "bio": "李沅书专注于自然语言处理和大语言模型的研究，在文本挖掘领域贡献突出。"
    },
    "zekuanshang": {
        "name": "Zekuan Shang (尚泽宽)",
        "year": "2025 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Artificial Intelligence",
            "Robotics",
            "Autonomous Systems"
        ],
        "email": "zekuanshang@example.com",
        "bio": "尚泽宽在人工智能和机器人学方面有着跨学科的研究背景，专注于自主系统开发。"
    },
    "tianfangwang": {
        "name": "Tianfang Wang (王天放)",
        "year": "2023 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Data Mining",
            "Web Scraping",
            "Information Retrieval"
        ],
        "email": "tianfangwang@example.com",
        "bio": "王天放专注于数据挖掘和信息检索技术的研究与应用。"
    },
    "heqiaowang": {
        "name": "Heqiao Wang (王贺桥)",
        "year": "2023 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Software Engineering",
            "System Design",
            "DevOps"
        ],
        "email": "heqiaowang@example.com",
        "bio": "王贺桥在软件工程和系统设计方面有丰富的实践经验。"
    },
    "jianxue": {
        "name": "Jian Xue (薛健)",
        "year": "2023 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Cybersecurity",
            "Network Security",
            "Cryptography"
        ],
        "email": "jianxue@example.com",
        "bio": "薛健专注于网络安全和密码学研究，在信息安全领域表现突出。"
    },
    "zirouli": {
        "name": "Zirou Li (李子柔)",
        "year": "2023 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Human-Computer Interaction",
            "UI/UX Design",
            "Machine Learning"
        ],
        "email": "zirouli@example.com",
        "bio": "李子柔致力于人机交互和用户体验设计的研究，在机器学习辅助设计方面有独特见解。"
    },
    "junjieqian": {
        "name": "Junjie Qian (钱俊杰)",
        "year": "2023 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Distributed Systems",
            "Cloud Computing",
            "Performance Optimization"
        ],
        "email": "junjieqian@example.com",
        "bio": "钱俊杰专注于分布式系统和云计算技术，在系统性能优化方面有丰富经验。"
    },
    "ruikailiu": {
        "name": "Ruikai Liu (刘瑞恺)",
        "year": "2023 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Computer Graphics",
            "3D Modeling",
            "Virtual Reality"
        ],
        "email": "ruikailiu@example.com",
        "bio": "刘瑞恺在计算机图形学和虚拟现实技术方面有着深入的研究和实践经验。"
    },
    "yuesongwu": {
        "name": "Yuesong Wu (吴岳松)",
        "year": "2023 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Bioinformatics",
            "Computational Biology",
            "Data Analysis"
        ],
        "email": "yuesongwu@example.com",
        "bio": "吴岳松结合生物学和计算机科学背景，专注于生物信息学和计算生物学研究。"
    },
    "jupengson": {
        "name": "Jupeng Song (宋举鹏)",
        "year": "2023 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Embedded Systems",
            "IoT",
            "Smart Devices"
        ],
        "email": "jupengson@example.com",
        "bio": "宋举鹏专注于嵌入式系统和物联网技术，在智能设备开发方面表现出色。"
    },
    "dapengwang": {
        "name": "Dapeng Wang (王大鹏)",
        "year": "2023 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Quantum Computing",
            "Algorithm Design",
            "Theoretical Computer Science"
        ],
        "email": "dapengwang@example.com",
        "bio": "王大鹏具有深厚的数学基础，专注于量子计算和理论计算机科学研究。"
    },
    "default": {
        "name": "团队成员",
        "year": "在读中",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Computer Science",
            "Research & Development"
        ],
        "email": "member@jlu.edu.cn",
        "bio": "该成员是NeO Lab团队的重要组成部分，积极参与各项研究工作。"
    },
    "肖钰彬": {
        "name": "肖钰彬",
        "year": "2021 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Neural Combinatorial Optimization"
        ],
        "email": "xiaoyb21@mails.jlu.edu.cn",
        "bio": "OOM",
        "homepage": "https://xybfight.github.io/"
    },
    "吴翾": {
        "name": "吴翾",
        "year": "2022 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Neural Combinatorial Optimization",
            "Large Language Models",
            "Evolutionary Computation"
        ],
        "email": "xuanwu7@outlook.com",
        "bio": "Xuan Wu received his B.Sc. degree from the College of Computer Science and Technology, Jilin University, China, in 2020. From November 2023 to November 2024, he was a visiting student at the College of Computing and Data Science, Nanyang Technological University, Singapore. He is currently pursuing his Ph.D. degree at Jilin University.",
        "homepage": "https://wuuu110.github.io/"
    },
    "赵鹏": {
        "name": "赵鹏",
        "year": "2023 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Neural Combinatorial Optimization",
            "Scheduling problem."
        ],
        "email": "pengzhao23@mails.jlu.edu.cn",
        "bio": "Peng Zhao received his B.Sc. degree from the College of Software Engineering, Jilin University, China, in 2021.",
        "homepage": "none"
    },
    "李沅书": {
        "name": "李沅书",
        "year": "2024 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Neural Combinatorial Optimization"
        ],
        "email": "lys24@mails.jlu.edu.cn",
        "bio": "Yuanshu Li received her B.Sc. degree from the College of Computer Science and Technology, Jilin University, China, in 2021, and received her M.S. degree from the College of Computer Science and Technology, Jilin University, China, in 2024",
        "homepage": ""
    },
    "尚泽宽": {
        "name": "尚泽宽",
        "year": "2025 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Neural Combinatorial Optimization",
            "EDA",
            "​Bioinformatics"
        ],
        "email": "shangzk23@mails.jlu.edu.cn",
        "bio": "Zekuan Shang received a B.Eng. in Software Engineering and a B.M. in Business Administration (double degree) from Jilin University, China, in 2022.",
        "homepage": ""
    },
    "李子柔": {
        "name": "李子柔",
        "year": "2023 to now",
        "department": "School of Software",
        "researchInterests": [
            "CV"
        ],
        "email": "zirou23@mails.jlu.edu.cn",
        "bio": "李子柔是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "刘瑞恺": {
        "name": "刘瑞恺",
        "year": "2023 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "liurk23@mails.jlu.edu.cn",
        "bio": "刘瑞恺是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "王天放": {
        "name": "王天放",
        "year": "2023 to now",
        "department": "School of Software",
        "researchInterests": [
            "Neural Combinatorial Optimization",
            "Generative Flow Network"
        ],
        "email": "wangtf23@mails.jlu.edu.cn",
        "bio": "王天放是NeO Lab团队的重要成员。",
        "homepage": "none"
    },
    "吴岳松": {
        "name": "吴岳松",
        "year": "2023 to now",
        "department": "School of Software",
        "researchInterests": [
            "Neural Combinatorial Optimization"
        ],
        "email": "1377030423@qq.com",
        "bio": "吴岳松是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "李昀朔": {
        "name": "李昀朔",
        "year": "2023 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Neural Combinatorial Optimization"
        ],
        "email": "945993769@qq.com",
        "bio": "李昀朔是NeO Lab团队的重要成员。",
        "homepage": "none"
    },
    "迟敏言": {
        "name": "迟敏言",
        "year": "2023 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Neural Combinatorial Optimization"
        ],
        "email": "chimy23@mails.jlu.edu.cn",
        "bio": "迟敏言是NeO Lab团队的重要成员。",
        "homepage": "none"
    },
    "王贺桥": {
        "name": "王贺桥",
        "year": "2023 to now",
        "department": "School of Software",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "2154670373@qq.com",
        "bio": "王贺桥是NeO Lab团队的重要成员。",
        "homepage": "none"
    },
    "史浩霖": {
        "name": "史浩霖",
        "year": "2023 to now",
        "department": "School of Software",
        "researchInterests": [
            "CV"
        ],
        "email": "hlshi23@mails.jlu.edu.cn",
        "bio": "史浩霖是NeO Lab团队的重要成员。",
        "homepage": "none"
    },
    "薛健": {
        "name": "薛健",
        "year": "2323 to now",
        "department": "School of Software",
        "researchInterests": [
            "Cv"
        ],
        "email": "xuejian23@mails.jlu.edu.cn",
        "bio": "薛健是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "汪伟城": {
        "name": "汪伟城",
        "year": "2023 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "CV"
        ],
        "email": "1420767429@qq.com",
        "bio": "汪伟城是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "吴赫铭": {
        "name": "吴赫铭",
        "year": "2023 to now",
        "department": "School of Software",
        "researchInterests": [
            "CV"
        ],
        "email": "wuhm23@mails.jlu.edu.cn",
        "bio": "吴赫铭是NeO Lab团队的重要成员。",
        "homepage": "no ne"
    },
    "张宇尧": {
        "name": "张宇尧",
        "year": "2023 to now",
        "department": "School of Software",
        "researchInterests": [
            "Neural Combinatorial Optimization"
        ],
        "email": "362456320@qq.com",
        "bio": "张宇尧是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "王大鹏": {
        "name": "王大鹏",
        "year": "2023 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "CV"
        ],
        "email": "wangdp23@mails.jlu.edu.cn",
        "bio": "王大鹏是NeO Lab团队的重要成员。",
        "homepage": "none"
    },
    "钱俊杰": {
        "name": "钱俊杰",
        "year": "2023 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "CV"
        ],
        "email": "1197349043@qq.com",
        "bio": "钱俊杰是NeO Lab团队的重要成员。",
        "homepage": "none"
    },
    "宋举鹏": {
        "name": "宋举鹏",
        "year": "2023 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "CV"
        ],
        "email": "jpsong23@mails.jlu.edu.cn",
        "bio": "宋举鹏是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "彭杰": {
        "name": "彭杰",
        "year": "2024 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Large Language Models",
            "AI Infra"
        ],
        "email": "hi@nohup.life",
        "bio": "彭杰是NeO Lab团队的重要成员。",
        "homepage": "https://blog.nohup.life"
    },
    "曹智宇": {
        "name": "曹智宇",
        "year": "2024 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Large Language Models",
            "RAG"
        ],
        "email": "caozy73@foxmail.com",
        "bio": "种一棵树最好的时间是十年前，其次是现在。",
        "homepage": ""
    },
    "王拓淤": {
        "name": "王拓淤",
        "year": "2024 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Neural Combinatorial Optimization",
            "Large Language Models",
            "Evolutionary Computation"
        ],
        "email": "1074126794@qq.com",
        "bio": "王拓淤是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "曾声军": {
        "name": "曾声军",
        "year": "2024 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Computer Vision"
        ],
        "email": "sj_zeng@163.com",
        "bio": "曾声军是NeO Lab团队的重要成员。",
        "homepage": "none"
    },
    "王佳琦": {
        "name": "王佳琦",
        "year": "2024 to now",
        "department": "School of Software",
        "researchInterests": [
            "Neural Combinatorial Optimization",
            "Scheduling problem."
        ],
        "email": "1767799741@qq.com",
        "bio": "王佳琦是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "张传卓": {
        "name": "张传卓",
        "year": "2024 to now",
        "department": "School of Software",
        "researchInterests": [
            "3D Human Pose Estimation"
        ],
        "email": "604268889@qq.com",
        "bio": "张传卓是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "孙淑静": {
        "name": "孙淑静",
        "year": "2024 to now",
        "department": "School of Software",
        "researchInterests": [
            "cv"
        ],
        "email": "sunsj0427@126.com",
        "bio": "孙淑静是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "马婕": {
        "name": "马婕",
        "year": "2024 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "NCO"
        ],
        "email": "mkryptonite@163.com",
        "bio": "事已至此 先休息吧",
        "homepage": ""
    },
    "曹瑞": {
        "name": "曹瑞",
        "year": "2024 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Neural Combinatorial Optimization"
        ],
        "email": "moline2002@163.com",
        "bio": "我认为休息一下是合法的",
        "homepage": ""
    },
    "齐开放": {
        "name": "齐开放",
        "year": "2024 to now",
        "department": "School of Software",
        "researchInterests": [
            "Neural Combinatorial Optimization"
        ],
        "email": "2811099393@qq.com",
        "bio": "齐开放是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "张毅宇": {
        "name": "张毅宇",
        "year": "2024 to now",
        "department": "School of Software",
        "researchInterests": [
            "Large Language Models",
            "RAG"
        ],
        "email": "592907083@qq.com",
        "bio": "张毅宇是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "姜苏桐": {
        "name": "姜苏桐",
        "year": "2025 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "1269369038@qq.com",
        "bio": "姜苏桐是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "李福硕": {
        "name": "李福硕",
        "year": "2025 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "2294566801@qq.com",
        "bio": "李福硕是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "申鹏赟": {
        "name": "申鹏赟",
        "year": "2025 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "2478860848@qq.com",
        "bio": "申鹏赟是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "王艳": {
        "name": "王艳",
        "year": "2025 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "2631241987@qq.com",
        "bio": "王艳是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "张海洋": {
        "name": "张海洋",
        "year": "2025 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "haiyangz25@mails.jlu.edu.cn",
        "bio": "张海洋是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "张校彭": {
        "name": "张校彭",
        "year": "2025 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "2436267351@qq.com",
        "bio": "张校彭是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "姜轶凡": {
        "name": "姜轶凡",
        "year": "2025 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "yfjiang25@mails.jlu.edu.cn",
        "bio": "姜轶凡是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "张伟怡": {
        "name": "张伟怡",
        "year": "2025 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "zwy25@mails.jlu.edu.cn",
        "bio": "张伟怡是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "王世瑾": {
        "name": "王世瑾",
        "year": "2025 to now",
        "department": "School of Software",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "1720044858@qq.com",
        "bio": "王世瑾是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "周时": {
        "name": "周时",
        "year": "2025 to now",
        "department": "School of Software",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "zhoushishuai666@gmail.com",
        "bio": "周时是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "樊明磊": {
        "name": "樊明磊",
        "year": "2025 to now",
        "department": "School of Software",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "862018985@qq.com",
        "bio": "樊明磊是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "林一豪": {
        "name": "林一豪",
        "year": "2025 to now",
        "department": "School of Software",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "2971665141@qq.com",
        "bio": "林一豪是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "李佳锴": {
        "name": "李佳锴",
        "year": "2025 to now",
        "department": "School of Software",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "1614509444@qq.com",
        "bio": "李佳锴是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "王浩": {
        "name": "王浩",
        "year": "2025 to now",
        "department": "School of Software",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "496190863@qq.com",
        "bio": "王浩是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "肖堃": {
        "name": "肖堃",
        "year": "2025 to now",
        "department": "School of Software",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "1395623341@qq.com",
        "bio": "肖堃是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "张朔榕": {
        "name": "张朔榕",
        "year": "2025 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "shuorong20@163.com",
        "bio": "张朔榕是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "王冶": {
        "name": "王冶",
        "year": "2019 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "AIGC MLLM"
        ],
        "email": "yewang22@mails.jlu.edu.cn",
        "bio": "Ye Wang is currently a third-year Ph.D. student in the ICL Group at the School of Artificial Intelligence, Jilin University, under the supervision of Associate Professor Rui Ma. He also receives mentorship from Research Scientist Yilin Wang at Adobe and Associate Professor Zili Yi at Nanjing University. His research primarily centers on personalized visual content creation, including image style transfer, image editing, image customization, video content generation, and 3D vision. He is dedicated to leveraging advanced artificial intelligence techniques to enable more personalized, flexible, and expressive visual content generation that caters to diverse user needs and creative expression. Ye Wang holds a Bachelor's degree from Dalian Maritime University and a Master's degree from the School of Computer Science at Jilin University. He has also gained valuable practical experience through internships at JD.com, Baidu, and Kunlun Tech. In addition to his academic work, he is the founder and primary host of PaperABC on Bilibili, a popular series of research explanation videos that have been well-received by the community, attracting over 12,000 followers to date.",
        "homepage": "https://wangyephd.github.io/"
    },
    "焦树扬": {
        "name": "焦树扬",
        "year": "2021 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "GNN AI4Science"
        ],
        "email": "jiaosy25@mails.jlu.edu.cn",
        "bio": "Shuyang Jiao received his B.Sc. degree from Harbin University of Science and Technology, China, in 2021, and his M.Sc. degree from Jilin University, China, in 2024. He is currently pursuing his Ph.D. degree at Jilin University (since 2025).",
        "homepage": ""
    },
    "王依章": {
        "name": "王依章",
        "year": "2016 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "人工智能教育"
        ],
        "email": "",
        "bio": "扬州大学老师",
        "homepage": ""
    },
    "于昆平": {
        "name": "于昆平",
        "year": "2021 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "lebron_forchampion@163.com",
        "bio": "2024年硕士毕业，已工作，做Java开发",
        "homepage": ""
    },
    "muhammadhassan": {
        "name": "Muhammad Hassan",
        "year": "2018 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Doctor of Engineering in Computer Applied Technology",
            "Research Interests: Image Processing",
            "Medical Imaging",
            "Computer Vision",
            "AI",
            "Machine Learning",
            "Deep Learning."
        ],
        "email": "mhassandev@gmail.com",
        "bio": "Muhammad Hassan是NeO Lab团队的重要成员。",
        "homepage": "https://orcid.org/0000-0001-8303-8351"
    },
    "杨森": {
        "name": "杨森",
        "year": "2015 to now",
        "department": "School of Software",
        "researchInterests": [
            "生物信息"
        ],
        "email": "ys@cczu.edu.cn",
        "bio": "常州大学老师",
        "homepage": "None"
    },
    "郭泽洋": {
        "name": "郭泽洋",
        "year": "2021 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "CV"
        ],
        "email": "2272214412@qq.com",
        "bio": "郭泽洋是NeO Lab团队的重要成员。",
        "homepage": "None"
    },
    "郭茗涵": {
        "name": "郭茗涵",
        "year": "2017 to now",
        "department": "School of Software",
        "researchInterests": [
            "语音识别、声纹识别"
        ],
        "email": "mhguo_best@163.com",
        "bio": "兰州城市学院老师",
        "homepage": "None"
    },
    "田新亮": {
        "name": "田新亮",
        "year": "2015 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "组合优化",
            "整车控制"
        ],
        "email": "xinliangt@qq.com",
        "bio": "中国重汽集团，整车控制研究。",
        "homepage": ""
    },
    "杨文哲": {
        "name": "杨文哲",
        "year": "2017 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "大数据管理与分析"
        ],
        "email": "wenzheyang@hhu.edu.cn",
        "bio": "河海大学老师",
        "homepage": "https://yangwenzhe.github.io/"
    },
    "耿昭阳": {
        "name": "耿昭阳",
        "year": "2016 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "大数据"
        ],
        "email": "306671201@qq.com",
        "bio": "耿昭阳是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "xiaoyubin": {
        "name": "肖钰彬",
        "year": "2021 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Neural Combinatorial Optimization"
        ],
        "email": "xiaoyb21@mails.jlu.edu.cn",
        "bio": "OOM",
        "homepage": "https://xybfight.github.io/"
    },
    "wuxuan": {
        "name": "吴翾",
        "year": "2022 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Neural Combinatorial Optimization",
            "Large Language Models",
            "Evolutionary Computation"
        ],
        "email": "xuanwu7@outlook.com",
        "bio": "Xuan Wu received his B.Sc. degree from the College of Computer Science and Technology, Jilin University, China, in 2020. From November 2023 to November 2024, he was a visiting student at the College of Computing and Data Science, Nanyang Technological University, Singapore. He is currently pursuing his Ph.D. degree at Jilin University.",
        "homepage": "https://wuuu110.github.io/"
    },
    "zhaopeng": {
        "name": "赵鹏",
        "year": "2023 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Neural Combinatorial Optimization",
            "Scheduling problem."
        ],
        "email": "pengzhao23@mails.jlu.edu.cn",
        "bio": "Peng Zhao received his B.Sc. degree from the College of Software Engineering, Jilin University, China, in 2021.",
        "homepage": "none"
    },
    "liyuanshu": {
        "name": "李沅书",
        "year": "2024 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Neural Combinatorial Optimization"
        ],
        "email": "lys24@mails.jlu.edu.cn",
        "bio": "Yuanshu Li received her B.Sc. degree from the College of Computer Science and Technology, Jilin University, China, in 2021, and received her M.S. degree from the College of Computer Science and Technology, Jilin University, China, in 2024",
        "homepage": ""
    },
    "shangzekuan": {
        "name": "尚泽宽",
        "year": "2025 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Neural Combinatorial Optimization",
            "EDA",
            "​Bioinformatics"
        ],
        "email": "shangzk23@mails.jlu.edu.cn",
        "bio": "Zekuan Shang received a B.Eng. in Software Engineering and a B.M. in Business Administration (double degree) from Jilin University, China, in 2022.",
        "homepage": ""
    },
    "lizirou": {
        "name": "李子柔",
        "year": "2023 to now",
        "department": "School of Software",
        "researchInterests": [
            "CV"
        ],
        "email": "zirou23@mails.jlu.edu.cn",
        "bio": "李子柔是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "liuruikai": {
        "name": "刘瑞恺",
        "year": "2023 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "liurk23@mails.jlu.edu.cn",
        "bio": "刘瑞恺是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "wangtianfang": {
        "name": "王天放",
        "year": "2023 to now",
        "department": "School of Software",
        "researchInterests": [
            "Neural Combinatorial Optimization",
            "Generative Flow Network"
        ],
        "email": "wangtf23@mails.jlu.edu.cn",
        "bio": "王天放是NeO Lab团队的重要成员。",
        "homepage": "none"
    },
    "wuyuesong": {
        "name": "吴岳松",
        "year": "2023 to now",
        "department": "School of Software",
        "researchInterests": [
            "Neural Combinatorial Optimization"
        ],
        "email": "1377030423@qq.com",
        "bio": "吴岳松是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "liyunshuo": {
        "name": "李昀朔",
        "year": "2023 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Neural Combinatorial Optimization"
        ],
        "email": "945993769@qq.com",
        "bio": "李昀朔是NeO Lab团队的重要成员。",
        "homepage": "none"
    },
    "chiminyan": {
        "name": "迟敏言",
        "year": "2023 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Neural Combinatorial Optimization"
        ],
        "email": "chimy23@mails.jlu.edu.cn",
        "bio": "迟敏言是NeO Lab团队的重要成员。",
        "homepage": "none"
    },
    "wangheqiao": {
        "name": "王贺桥",
        "year": "2023 to now",
        "department": "School of Software",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "2154670373@qq.com",
        "bio": "王贺桥是NeO Lab团队的重要成员。",
        "homepage": "none"
    },
    "shihaolin": {
        "name": "史浩霖",
        "year": "2023 to now",
        "department": "School of Software",
        "researchInterests": [
            "CV"
        ],
        "email": "hlshi23@mails.jlu.edu.cn",
        "bio": "史浩霖是NeO Lab团队的重要成员。",
        "homepage": "none"
    },
    "xuejian": {
        "name": "薛健",
        "year": "2323 to now",
        "department": "School of Software",
        "researchInterests": [
            "Cv"
        ],
        "email": "xuejian23@mails.jlu.edu.cn",
        "bio": "薛健是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "wangweicheng": {
        "name": "汪伟城",
        "year": "2023 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "CV"
        ],
        "email": "1420767429@qq.com",
        "bio": "汪伟城是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "wuheming": {
        "name": "吴赫铭",
        "year": "2023 to now",
        "department": "School of Software",
        "researchInterests": [
            "CV"
        ],
        "email": "wuhm23@mails.jlu.edu.cn",
        "bio": "吴赫铭是NeO Lab团队的重要成员。",
        "homepage": "no ne"
    },
    "zhangyuyao": {
        "name": "张宇尧",
        "year": "2023 to now",
        "department": "School of Software",
        "researchInterests": [
            "Neural Combinatorial Optimization"
        ],
        "email": "362456320@qq.com",
        "bio": "张宇尧是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "wangdapeng": {
        "name": "王大鹏",
        "year": "2023 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "CV"
        ],
        "email": "wangdp23@mails.jlu.edu.cn",
        "bio": "王大鹏是NeO Lab团队的重要成员。",
        "homepage": "none"
    },
    "qianjunjie": {
        "name": "钱俊杰",
        "year": "2023 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "CV"
        ],
        "email": "1197349043@qq.com",
        "bio": "钱俊杰是NeO Lab团队的重要成员。",
        "homepage": "none"
    },
    "songjupeng": {
        "name": "宋举鹏",
        "year": "2023 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "CV"
        ],
        "email": "jpsong23@mails.jlu.edu.cn",
        "bio": "宋举鹏是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "pengjie": {
        "name": "彭杰",
        "year": "2024 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Large Language Models",
            "AI Infra"
        ],
        "email": "hi@nohup.life",
        "bio": "彭杰是NeO Lab团队的重要成员。",
        "homepage": "https://blog.nohup.life"
    },
    "caozhiyu": {
        "name": "曹智宇",
        "year": "2024 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Large Language Models",
            "RAG"
        ],
        "email": "caozy73@foxmail.com",
        "bio": "种一棵树最好的时间是十年前，其次是现在。",
        "homepage": ""
    },
    "wangtuoyu": {
        "name": "王拓淤",
        "year": "2024 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Neural Combinatorial Optimization",
            "Large Language Models",
            "Evolutionary Computation"
        ],
        "email": "1074126794@qq.com",
        "bio": "王拓淤是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "zengshengjun": {
        "name": "曾声军",
        "year": "2024 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Computer Vision"
        ],
        "email": "sj_zeng@163.com",
        "bio": "曾声军是NeO Lab团队的重要成员。",
        "homepage": "none"
    },
    "wangjiaqi": {
        "name": "王佳琦",
        "year": "2024 to now",
        "department": "School of Software",
        "researchInterests": [
            "Neural Combinatorial Optimization",
            "Scheduling problem."
        ],
        "email": "1767799741@qq.com",
        "bio": "王佳琦是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "zhangchuanzhuo": {
        "name": "张传卓",
        "year": "2024 to now",
        "department": "School of Software",
        "researchInterests": [
            "3D Human Pose Estimation"
        ],
        "email": "604268889@qq.com",
        "bio": "张传卓是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "sunshujing": {
        "name": "孙淑静",
        "year": "2024 to now",
        "department": "School of Software",
        "researchInterests": [
            "cv"
        ],
        "email": "sunsj0427@126.com",
        "bio": "孙淑静是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "majie": {
        "name": "马婕",
        "year": "2024 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "NCO"
        ],
        "email": "mkryptonite@163.com",
        "bio": "事已至此 先休息吧",
        "homepage": ""
    },
    "caorui": {
        "name": "曹瑞",
        "year": "2024 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Neural Combinatorial Optimization"
        ],
        "email": "moline2002@163.com",
        "bio": "我认为休息一下是合法的",
        "homepage": ""
    },
    "qikaifang": {
        "name": "齐开放",
        "year": "2024 to now",
        "department": "School of Software",
        "researchInterests": [
            "Neural Combinatorial Optimization"
        ],
        "email": "2811099393@qq.com",
        "bio": "齐开放是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "zhangyiyu": {
        "name": "张毅宇",
        "year": "2024 to now",
        "department": "School of Software",
        "researchInterests": [
            "Large Language Models",
            "RAG"
        ],
        "email": "592907083@qq.com",
        "bio": "张毅宇是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "jiangsutong": {
        "name": "姜苏桐",
        "year": "2025 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "1269369038@qq.com",
        "bio": "姜苏桐是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "lifushuo": {
        "name": "李福硕",
        "year": "2025 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "2294566801@qq.com",
        "bio": "李福硕是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "shenpengyun": {
        "name": "申鹏赟",
        "year": "2025 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "2478860848@qq.com",
        "bio": "申鹏赟是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "wangyan": {
        "name": "王艳",
        "year": "2025 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "2631241987@qq.com",
        "bio": "王艳是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "zhanghaiyang": {
        "name": "张海洋",
        "year": "2025 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "haiyangz25@mails.jlu.edu.cn",
        "bio": "张海洋是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "zhangxiaopeng": {
        "name": "张校彭",
        "year": "2025 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "2436267351@qq.com",
        "bio": "张校彭是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "jiangyifan": {
        "name": "姜轶凡",
        "year": "2025 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "yfjiang25@mails.jlu.edu.cn",
        "bio": "姜轶凡是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "zhangweiyi": {
        "name": "张伟怡",
        "year": "2025 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "zwy25@mails.jlu.edu.cn",
        "bio": "张伟怡是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "wangshijin": {
        "name": "王世瑾",
        "year": "2025 to now",
        "department": "School of Software",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "1720044858@qq.com",
        "bio": "王世瑾是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "zhoushi": {
        "name": "周时",
        "year": "2025 to now",
        "department": "School of Software",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "zhoushishuai666@gmail.com",
        "bio": "周时是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "fanminglei": {
        "name": "樊明磊",
        "year": "2025 to now",
        "department": "School of Software",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "862018985@qq.com",
        "bio": "樊明磊是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "linyihao": {
        "name": "林一豪",
        "year": "2025 to now",
        "department": "School of Software",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "2971665141@qq.com",
        "bio": "林一豪是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "lijiakai": {
        "name": "李佳锴",
        "year": "2025 to now",
        "department": "School of Software",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "1614509444@qq.com",
        "bio": "李佳锴是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "wanghao": {
        "name": "王浩",
        "year": "2025 to now",
        "department": "School of Software",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "496190863@qq.com",
        "bio": "王浩是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "xiaokun": {
        "name": "肖堃",
        "year": "2025 to now",
        "department": "School of Software",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "1395623341@qq.com",
        "bio": "肖堃是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "zhangshuorong": {
        "name": "张朔榕",
        "year": "2025 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "shuorong20@163.com",
        "bio": "张朔榕是NeO Lab团队的重要成员。",
        "homepage": ""
    },
    "wangye": {
        "name": "王冶",
        "year": "2019 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "AIGC MLLM"
        ],
        "email": "yewang22@mails.jlu.edu.cn",
        "bio": "Ye Wang is currently a third-year Ph.D. student in the ICL Group at the School of Artificial Intelligence, Jilin University, under the supervision of Associate Professor Rui Ma. He also receives mentorship from Research Scientist Yilin Wang at Adobe and Associate Professor Zili Yi at Nanjing University. His research primarily centers on personalized visual content creation, including image style transfer, image editing, image customization, video content generation, and 3D vision. He is dedicated to leveraging advanced artificial intelligence techniques to enable more personalized, flexible, and expressive visual content generation that caters to diverse user needs and creative expression. Ye Wang holds a Bachelor's degree from Dalian Maritime University and a Master's degree from the School of Computer Science at Jilin University. He has also gained valuable practical experience through internships at JD.com, Baidu, and Kunlun Tech. In addition to his academic work, he is the founder and primary host of PaperABC on Bilibili, a popular series of research explanation videos that have been well-received by the community, attracting over 12,000 followers to date.",
        "homepage": "https://wangyephd.github.io/"
    },
    "jiaoshuyang": {
        "name": "焦树扬",
        "year": "2021 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "GNN AI4Science"
        ],
        "email": "jiaosy25@mails.jlu.edu.cn",
        "bio": "Shuyang Jiao received his B.Sc. degree from Harbin University of Science and Technology, China, in 2021, and his M.Sc. degree from Jilin University, China, in 2024. He is currently pursuing his Ph.D. degree at Jilin University (since 2025).",
        "homepage": ""
    },
    "wangyizhang": {
        "name": "王依章",
        "year": "2016 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "人工智能教育"
        ],
        "email": "",
        "bio": "扬州大学老师",
        "homepage": ""
    },
    "yukunping": {
        "name": "于昆平",
        "year": "2021 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "Computer Science"
        ],
        "email": "lebron_forchampion@163.com",
        "bio": "2024年硕士毕业，已工作，做Java开发",
        "homepage": ""
    },
    "yangsen": {
        "name": "杨森",
        "year": "2015 to now",
        "department": "School of Software",
        "researchInterests": [
            "生物信息"
        ],
        "email": "ys@cczu.edu.cn",
        "bio": "常州大学老师",
        "homepage": "None"
    },
    "guozeyang": {
        "name": "郭泽洋",
        "year": "2021 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "CV"
        ],
        "email": "2272214412@qq.com",
        "bio": "郭泽洋是NeO Lab团队的重要成员。",
        "homepage": "None"
    },
    "guominghan": {
        "name": "郭茗涵",
        "year": "2017 to now",
        "department": "School of Software",
        "researchInterests": [
            "语音识别、声纹识别"
        ],
        "email": "mhguo_best@163.com",
        "bio": "兰州城市学院老师",
        "homepage": "None"
    },
    "tianxinliang": {
        "name": "田新亮",
        "year": "2015 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "组合优化",
            "整车控制"
        ],
        "email": "xinliangt@qq.com",
        "bio": "中国重汽集团，整车控制研究。",
        "homepage": ""
    },
    "yangwenzhe": {
        "name": "杨文哲",
        "year": "2017 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "大数据管理与分析"
        ],
        "email": "wenzheyang@hhu.edu.cn",
        "bio": "河海大学老师",
        "homepage": "https://yangwenzhe.github.io/"
    },
    "gengzhaoyang": {
        "name": "耿昭阳",
        "year": "2016 to now",
        "department": "School of Computer Science and Technology",
        "researchInterests": [
            "大数据"
        ],
        "email": "306671201@qq.com",
        "bio": "耿昭阳是NeO Lab团队的重要成员。",
        "homepage": ""
    }
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { memberProfiles };
} else if (typeof window !== 'undefined') {
    window.MemberData = { memberProfiles };
}