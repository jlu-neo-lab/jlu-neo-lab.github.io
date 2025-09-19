// 论文详情数据
const researchDetails = {
  "memory": {
    title:
      "Visual-Enhanced Multimodal Framework for Flexible Job Shop Scheduling Problem",
    venue: "NeurIPS",
    date: "2025",
    authors:
      "Jiaqi Wang, Zhiguang Cao, Peng Zhao, Rui Cao, Yubin Xiao, Yuan Jiang, You Zhou",
    abstract: "The rise of smart manufacturing under Industry 4.0 introduces mass customization and dynamic production, demanding more advanced and flexible scheduling techniques. The flexible job-shop scheduling problem (FJSP) has attracted significant attention due to its complex constraints and strong alignment with real-world production scenarios. Current deep reinforcement learning (DRL)-based approaches to FJSP predominantly employ constructive methods. While effective, they often fall short of reaching (near-)optimal solutions. In contrast, improvement-based methods iteratively explore the neighborhood of initial solutions and are more effective in approaching optimality. However, the flexible machine allocation in FJSP poses significant challenges to the application of this framework, including accurate state representation, effective policy learning, and efficient search strategies. To address these challenges, this paper proposes a Memory-enhanced Improvement Search framework with heterogeneous graph representation—MIStar. It employs a novel heterogeneous disjunctive graph that explicitly models the operation sequences on machines to accurately represent scheduling solutions. Moreover, a memory-enhanced heterogeneous graph neural network (MHGNN) is designed for feature extraction, leveraging historical trajectories to enhance the decision-making capability of the policy network. Finally, a parallel greedy search strategy is adopted to explore the solution space, enabling superior solutions with fewer iterations. Extensive experiments on synthetic data and public benchmarks demonstrate that MIStar significantly outperforms both traditional handcrafted improvement heuristics and state-of-the-art DRL-based constructive methods.",
    paperLink: "https://example.com/paper1",
  },
  "visual-fjsp": {
    title:
      "Visual-Enhanced Multimodal Framework for Flexible Job Shop Scheduling Problem",
    venue: "ACM MM",
    date: "2025",
    authors:
      "Peng Zhao, Zhiguang Cao, Di Wang, Wen Song, Wei Pang, You Zhou, Yuan Jiang",
    abstract: "Multimodal models leverage complementary information across modalities to enrich feature representations. While visual information shows potential in representing structure for some combinatorial optimization problems (COPs), its application to complex scheduling like the Flexible Job Shop Scheduling Problem (FJSP) remains underexplored. Current learning-based FJSP solvers predominantly rely on handcrafted state features. This dependence can lead to inconsistencies and may not fully capture the problem's intricate dynamics. Crucially, these methods overlook visual modalities. Visual representations offer a distinct advantage by inherently capturing the global topological structure and complex resource interactions within the FJSP state. Unlike localized handcrafted features, this holistic, structural view provides a richer foundation for understanding scheduling complexity and making informed decisions. To overcome these limitations by leveraging visual information—known for representing topological structures and providing richer state representations—we introduce the AO-framework. This multimodal feature fusion approach enhances handcrafted state features by integrating insights from visual data. Our core contribution is a novel fusion mechanism utilizing orthogonal projection and local attention. Unlike traditional methods that often rely on simple concatenation of visual data, our method uniquely reduces redundancy by projecting global image-derived features onto local handcrafted features. This process extracts distinct information inherent to the visual modality, significantly improving the quality and complementarity of the resulting state features and enabling more informed scheduling decisions. To our knowledge, the AO-framework represents the first multimodal framework applied to scheduling problems, demonstrating the significant potential of visual information in this domain. Extensive experiments across various FJSP solvers and datasets confirm that our framework yields substantial enhancements in solution quality, decision-making capabilities, and generalization.",
    paperLink: "https://example.com/paper1",
  },
  DGL: {
    title:
      "DGL: Dynamic Global-Local Information Aggregation for Scalable VRP Generalization with Self-Improvement Learning",
    venue: "IJCAI",
    date: "2025",
    authors:
      "Yubin Xiao, Yuesong Wu, Rui Cao, Di Wang, Zhiguang Cao, Xuan Wu, Peng Zhao, Yuanshu Li, You Zhou, Yuan Jiang",
    abstract: "The Vehicle Routing Problem (VRP) is a critical combinatorial optimization problem with wide reaching real-world applications, particularly in logistics, transportation. While neural network-based VRP solvers have shown impressive results on test instances similar to training data, their performance often degrades when faced with varying scales and unseen distributions, limiting their practical applicability. To overcome these limitations, we introduce DGL (Dynamic Global-Local Information Aggregation), a novel model that combines global and local information to effectively solve VRPs. DGL dynamically adjusts local node selections within a localized range, capturing local invariance across problems of different scales and distributions, thereby enhancing generalization. At the same time, DGL integrates global context into the decision-making process, providing richer information for more informed decisions. Additionally, we propose a replacement-based self-improvement learning framework that leverages data augmentation and random replacement techniques, further enhancing DGL’s robustness. Extensive experiments on synthetic datasets, benchmark datasets, and real-world country map instances demonstrate that DGL achieves state-of-the-art performance, particularly in generalizing to large-scale VRPs and real-world scenarios. These results showcase DGL’s effectiveness in solving complex, realistic optimization challenges and highlight its potential for practical applications.",
    paperLink: "https://example.com/paper1",
  },
  Hercules: {
    title:
      "Efficient Heuristics Generation for Solving Combinatorial Optimization Problems Using Large Language Models",
    venue: "ACM SIGKDD",
    date: "2025",
    authors:
      "Xuan Wu, Di Wang, Chunguo Wu, Lijie Wen, Chunyan Miao, Yubin Xiao, You Zhou",
    abstract: "Recent studies exploited Large Language Models (LLMs) to autonomously generate heuristics for solving Combinatorial Optimization Problems (COPs), by prompting LLMs to first provide search directions and then derive heuristics accordingly. However, the absence of task-specific knowledge in prompts often leads LLMs to provide unspecific search directions, obstructing the derivation of well-performing heuristics. Moreover, evaluating the derived heuristics remains resource-intensive, especially for those semantically equivalent ones, often requiring omissible resource expenditure. To enable LLMs to provide specific search directions, we propose the Hercules algorithm, which leverages our designed Core Abstraction Prompting (CAP) method to abstract the core components from elite heuristics and incorporate them as prior knowledge in prompts. We theoretically prove the effectiveness of CAP in reducing unspecificity and provide empirical results in this work. To reduce computing resources required for evaluating the derived heuristics, we propose few-shot Performance Prediction Prompting (PPP), a first-of-its-kind method for the Heuristic Generation (HG) task. PPP leverages LLMs to predict the fitness values of newly derived heuristics by analyzing their semantic similarity to previously evaluated ones. We further develop two tailored mechanisms for PPP to enhance predictive accuracy and determine unreliable predictions, respectively. The use of PPP makes Hercules more resource-efficient and we name this variant Hercules-P. Extensive experiments across four HG tasks, five COPs, and eight LLMs demonstrate that Hercules outperforms the state-of-the-art LLM-based HG algorithms, while Hercules-P excels at minimizing required computing resources. In addition, we illustrate the effectiveness of CAP, PPP, and the other proposed mechanisms by conducting relevant ablation studies.",
    paperLink: "https://dl.acm.org/doi/abs/10.1145/3711896.3736923",
  },
  UGAS: {
    title:
      "Towards Efficient Few-shot Graph Neural Architecture Search via Partitioning Gradient Contribution",
    venue: "ACM SIGKDD",
    date: "2025",
    authors:
      "Wenhao Song, Xuan Wu, Bo Yang, You Zhou, Yubin Xiao, Yanchun Liang, Hongwei Ge, Heow Pueh Lee, Chunguo Wu",
    abstract: "To address the weight coupling problem, certain studies introduced few-shot Neural Architecture Search (NAS) methods, which partition the supernet into multiple sub-supernets. However, these methods often suffer from computational inefficiency and tend to provide suboptimal partitioning schemes. To address this problem more effectively, we analyze the weight coupling problem from a novel perspective, which primarily stems from distinct modules in succeeding layers imposing conflicting gradient directions on the preceding layer modules. Based on this perspective, we propose the Gradient Contribution (GC) method that efficiently computes the cosine similarity of gradient directions among modules by decomposing the Vector-Jacobian Product during supernet backpropagation. Subsequently, the modules with conflicting gradient directions are allocated to distinct sub-supernets while similar ones are grouped together. To assess the advantages of GC and address the limitations of existing Graph Neural Architecture Search methods, which are limited to searching a single type of Graph Neural Networks (Message Passing Neural Networks (MPNNs) or Graph Transformers (GTs)), we propose the Unified Graph Neural Architecture Search (UGAS) framework, which explores optimal combinations of MPNNs and GTs. The experimental results demonstrate that GC achieves state-of-the-art (SOTA) performance in supernet partitioning quality and time efficiency. In addition, the architectures searched by UGAS+GC outperform both the manually designed GNNs and those obtained by existing NAS methods. Finally, ablation studies further demonstrate the effectiveness of all proposed methods.",
    paperLink: "https://dl.acm.org/doi/abs/10.1145/3711896.3737162",
  },
  "dual-operation-aggregation": {
    title:
      "Dual Operation Aggregation Graph Neural Networks for Solving Flexible Job-Shop Scheduling Problem with Reinforcement Learning",
    venue: "WWW",
    date: "2025",
    authors:
      "Peng Zhao, You Zhou, Di Wang, Zhiguang Cao, Yubin Xiao, Xuan Wu, Yuanshu Li, Hongjia Liu, Wei Du, Yuan Jiang, Liupu Wang",
    abstract:
      "With the widespread adoption of Internet Protocol (IP) communication technology and Web-based platforms, cloud manufacturing has become a significant hallmark of Industry 4.0. Integrating graph algorithms into these web-enabled environments is crucial as they facilitate the representation and analysis of complex relationships in manufacturing processes, enabling efficient decision-making and adaptability in dynamic environments. As a key scheduling problem in cloud manufacturing, the flexible Job-shop Scheduling Problem (FJSP) finds extensive applications in real-world scenarios. However, traditional FJSP-solving methods struggle to meet the efficiency and adaptability demands of cloud manufacturing due to generalization issues and excessive computational time, while reinforcement learning-based methods fail to learn relationships between FJSP nodes, such as interactions between operations of different jobs, leading to limited interpretability and performance. To address these issues, we propose a dual operation aggregation graph neural network (GNN) for solving FJSP. Specifically, we decouple the disjunctive graph into two distinct graphs, reducing graph density and clarifying relationships between machines and operations, thus enabling more effective aggregation and understanding by neural networks. We develop two distinct graph aggregation methods to minimize the influence of non-critical machine and operation nodes on decision-making while enhancing the model's ability to account for long-term benefits. Additionally, to achieve more accurate multi-objective estimation and mitigate reward sparsity, we design a reward function that simultaneously considers machine efficiency, schedule balance, and makespan minimization. Extensive experimental results on well-known datasets demonstrate that our model outperforms state-of-the-art models and exhibits excellent generalization capabilities, effectively addressing the challenges of cloud manufacturing.",
    paperLink: "https://dl.acm.org/doi/10.1145/3690624.3709343",
  },
  "efficient-diffusion-solver": {
    title:
      "An Efficient Diffusion-based Non-Autoregressive Solver for Traveling Salesman Problem",
    venue: "ACM SIGKDD",
    date: "2025",
    authors:
      "Mingzhao Wang, You Zhou, Zhiguang Cao, Yubin Xiao, Xuan Wu, Wei Pang, Yuan Jiang, Hui Yang, Peng Zhao, Yuanshu Li",
    abstract:
      "Recent advances in neural models have shown considerable promise in solving Traveling Salesman Problems (TSPs) without relying on much hand-crafted engineering. However, while non-autoregressive (NAR) approaches benefit from faster inference through parallelism, they typically deliver solutions of inferior quality compared to autoregressive ones. To enhance the solution quality while maintaining fast inference, we propose DEITSP, a diffusion model with efficient iterations tailored for TSP that operates in a NAR manner. Firstly, we introduce a one-step diffusion model that integrates the controlled discrete noise addition process with self-consistency enhancement, enabling optimal solution prediction through simultaneous denoising of multiple solutions. Secondly, we design a dual-modality graph transformer to bolster the extraction and fusion of features from node and edge modalities, while further accelerating the inference with fewer layers. Thirdly, we develop an efficient iterative strategy that alternates between adding and removing noise to improve exploration compared to previous diffusion methods. Additionally, we devise a scheduling framework to progressively refine the solution space by adjusting noise levels, facilitating a smooth search for optimal solutions. Extensive experiments on real-world and large-scale TSP instances demonstrate that DEITSP performs favorably against existing neural approaches in terms of solution quality, inference latency, and generalization ability.",
    paperLink: "https://dl.acm.org/doi/10.1145/3690624.3709343",
  },
  "distilling-autoregressive-models": {
    title:
      "Distilling Autoregressive Models to Obtain High-performance Non-autoregressive Solvers for Vehicle Routing Problems with Faster Inference Speed",
    venue: "AAAI",
    date: "2024",
    authors:
      "Yubin Xiao, Di Wang, Boyang Li, Mingzhao Wang, Xuan Wu, Changliang Zhou, You Zhou",
    abstract:
      "Neural construction models have shown promising performance for Vehicle Routing Problems (VRPs) by adopting either the Autoregressive (AR) or Non-Autoregressive (NAR) learning approach. While AR models produce high-quality solutions, they generally have a high inference latency due to their sequential generation nature. Conversely, NAR models generate solutions in parallel with a low inference latency but generally exhibit inferior performance. In this paper, we propose a generic Guided Non-Autoregressive Knowledge Distillation (GNARKD) method to obtain high-performance NAR models having a low inference latency. GNARKD removes the constraint of sequential generation in AR models while preserving the learned pivotal components in the network architecture to obtain the corresponding NAR models through knowledge distillation. We evaluate GNARKD by applying it to three widely adopted AR models to obtain NAR VRP solvers for both synthesized and real-world instances. The experimental results demonstrate that GNARKD significantly reduces the inference time (4-5 times faster) with acceptable performance drop (2-3%). To the best of our knowledge, this study is first-of-its-kind to obtain NAR VRP solvers from AR ones through knowledge distillation.",
    paperLink: "https://ojs.aaai.org/index.php/AAAI/article/view/30008/31770",
  },
  gaohang_pr: {
    title:
      "Incomplete Multi-view Clustering with Cross-view Generation via Pre-trained Transformer",
    venue: "Pattern Recognition",
    date: "2025",
    authors:
      "Hang Gao, Cheng Liu, Hongming Sun, Gaoyang Li, Ying Li, You Zhou, Wei Du",
    abstract: "Addressing missing views in incomplete multi-view clustering is a significant challenge in real applications. Numerous view recovery methods have been proposed to address this problem. However, most existing methods fail to effectively capture cross-view relationships between instances across different views. Additionally, many of these methods assume the availability of a certain percentage of complete multi-view data. In response to these limitations, we introduce a novel cross-view generative model based on Transformer. This model is designed to infer missing views and generate a comprehensive semantic representation, effectively addressing the limitations of existing methods. Our approach integrates the Transformer as an intermediary between the encoder and decoder to impute latent representations for unavailable instances. To capture meaningful cross-view relationships, we employ masked multi-head self-attention based on the Transformer architecture, allowing the model to dynamically learn associations across views. Additionally, we introduce a generative pre-training process that does not require complete data, allowing the generator to recover missing views. Furthermore, a self-supervised fine-tuning process is implemented to exploit intra-view similarity, thereby enhancing the overall quality of the generated data. Extensive experiments and analyses on several incomplete benchmark datasets demonstrate the effectiveness and efficiency of our novel method compared with several state-of-the-art methods.",
    paperLink:
      "https://www.sciencedirect.com/science/article/abs/pii/S0031320325008271",
  },
  Chi_llm: {
    title:
      "A Generalized Neural Solver based on LLM-guided Heuristic Evolution Framework for Solving Diverse Variants of Vehicle Routing Problems",
    venue: "Expert Systems with Applications",
    date: "2025",
    authors:
      "Minyan Chi, Wei Pang, Xuan Wu, Peng Zhao, YuanShu Li, Tianfang Wang, Junjie Qian, Yubin Xiao, Liupu Wang, You Zhou",
    abstract: "Vehicle Routing Problems (VRPs) are key combinatorial optimization challenges with broad applications in logistics. While neural solvers based on attention mechanisms offer promising results, they require retraining for each VRP variant, limiting scalability. Existing expert-designed and LLM-based heuristic methods often suffer from limited exploration ability and premature convergence. We propose the Unified VRP Neural Solver (UNS), an LLM-enabled framework that dynamically adjusts attention scores by generating variant-specific heuristics without requiring retraining of neural model parameters. At its core, the LLM-Guided Heuristic Evolution (LHE) algorithm, which is inspired by population-based Differential Evolution (DE) frameworks, iteratively refines heuristics through Mutation, Global Crossover, and Local Crossover to enhance diversity and avoid local optima. Extensive experiments across 16 VRP variants show that LHE outperforms state-of-the-art neural solvers and LLM-based approaches. The similarity analysis of heuristic populations reveals that LHE maintains higher diversity and avoids premature convergence. Additional evaluations on CVRP and TSP, along with ablation studies, validate the effectiveness and generalizability of LHE.",
    paperLink:
      "https://www.sciencedirect.com/science/article/abs/pii/S0957417425024935",
  },
  wang_sitting: {
    title:
      "A Lightweight Model LGCSPNet for Sitting Posture Risk Management Applications",
    venue: "Expert Systems with Applications",
    date: "2025",
    authors:
      "Dapeng Wang, Wei Pang, Zheng Cao, Lei Song, Liying An, Xuan Wu, Peng Zhao, Liupu Wang, You Zhou",
    abstract: "Current methods for sitting posture recognition typically follow a pipeline involving keypoint extraction and skeleton graph construction, followed by pose classification using Convolutional Neural Networks (CNNs) or Vision Transformers (ViTs). However, CNNs struggle to model long-range dependencies among keypoints, whereas ViTs suffer from high computational costs. Moreover, both approaches tend to introduce redundancy during feature modeling. To improve efficiency, some studies have explored direct classification using keypoint coordinates, but these methods often fail to balance high accuracy with computational efficiency. To this end, this paper proposes a new model LGCSPNet with lightweight graph convolution modules (LGC) and a contrastive learning module. Firstly, LGC enables efficient full-keypoint communication by shifting features across keypoint channels, allowing each keypoint to access global context at minimal computational cost. Building on this, LGC enhances sitting posture detection by computing 3D attention weights via a parameter-free energy function with a closed-form solution, enhancing feature learning for posturally significant keypoints. The contrastive learning module enhances differentiation between similar postures in different categories by strategically selecting feature samples. Experiments on public human posture datasets and our custom sitting posture dataset show that LGCSPNet has only 0.097M parameters while achieving a 99 % recognition rate. It surpasses existing models in terms of parameter quantity and accuracy. Guided by ergonomic metrics, our model enables posture correction and mitigates long-term sitting-related injuries.",
    paperLink:
      "https://www.sciencedirect.com/science/article/abs/pii/S0957417425021050",
  },
  xiao_nn: {
    title:
      "Improving Generalization of Neural Vehicle Routing Problem Solvers through the Lens of Model Architecture",
    venue: "Neural Networks",
    date: "2025",
    authors:
      "Yubin Xiao, Di Wang, Xuan Wu, Yuesong Wu, Boyang Li, Wei Du, Liupu Wang, and You Zhou",
    abstract: "Neural models produce promising results when solving Vehicle Routing Problems (VRPs), but may often fall short in generalization. Recent attempts to enhance model generalization often incur unnecessarily large training cost or cannot be directly applied to other models solving different VRP variants. To address these issues, we take a novel perspective on model architecture in this study. Specifically, we propose a plug-and-play Entropy-based Scaling Factor (ESF) and a Distribution-Specific (DS) decoder to enhance the size and distribution generalization, respectively. ESF adjusts the attention weight pattern of the model towards familiar ones discovered during training when solving VRPs of varying sizes. The DS decoder explicitly models VRPs of multiple training distribution patterns through multiple auxiliary light decoders, expanding the model representation space to encompass a broader range of distributional scenarios. We conduct extensive experiments on both synthetic and widely recognized real-world benchmarking datasets and compare the performance with seven baseline models. The results demonstrate the effectiveness of using ESF and DS decoder to obtain a more generalizable model and showcase their applicability to solve different VRP variants, i.e., traveling salesman problem and capacitated VRP. Notably, our proposed generic components require minimal computational resources, and can be effortlessly integrated into conventional generalization strategies to further elevate model generalization.",
    paperLink:
      "https://www.sciencedirect.com/science/article/abs/pii/S089360802500259X",
  },
  Hassan_Deep: {
    title: "Deep Learning Model for Human-intuitive Shoeprint Reconstruction",
    venue: "Expert Systems with Applications",
    date: "2025",
    authors:
      "Muhammad Hassan, Yan Wang, Di Wang, Wei Pang, Daixi Li, You Zhou, Dong Xu, Sami ur-Rahman, Amin ur Rahman, Ahmed Ameen Fateh, Peiwu Qin",
    abstract: "Shoeprint reconstruction is essential in forensic science, but it is also challenging due to various inconsistencies in the patterns, textures, sizes, abrasions, etc. of shoeprints. The computational reconstruction of sharper and more complete shoeprints is conventionally conducted using handcrafted features, and it often requires human intervention. Prior studies using end-to-end machine learning approaches are limited in number and have not achieved a high level of performance. In this paper, we propose a model named ShoeRec, which employs variational autoencoder (VAE) as a component in a U-Net-like architecture to reconstruct missing regions and borders in shoeprint images. ShoeRec incorporates skip connections to preserve key patterns and employs VAE in the bottleneck to facilitate the reconstruction of desired shoeprints with the restoration of detail as perceived by humans. As a U-Net, the model skips the contextual information from the encoder to the decoder, and the compressed features in the latent space via VAE optimize the probabilistic distribution for reconstructing complete shoeprints. The reconstruction operation is automatically tuned according to the objective function, so as to reduce the structural correlation between the original and projected shoeprint and restore the absent information in the desired shoeprints. To the best of our knowledge, ShoeRec is the first deep learning infusion model that specializes in shoeprint reconstruction. The shoeprints reconstructed by ShoeRec have a close match with the originals in terms of both structures and patterns, and ShoeRec outperforms state-of-the-art generative models in human evaluation.",
    paperLink:
      "https://www.sciencedirect.com/science/article/abs/pii/S0957417424005700",
  },
  "reinforcement-learning-solver": {
    title:
      "Reinforcement Learning-Based Nonautoregressive Solver for Traveling Salesman Problems",
    venue: "IEEE Transactions on Neural Networks and Learning Systems",
    date: "2024",
    authors:
      "Yubin Xiao, Di Wang, Boyang Li, Huanhuan Chen, Wei Pang, Xuan Wu, Hao Li, Dong Xu, Yanchun Liang, You Zhou",
    abstract:"The traveling salesman problem (TSP) is a well-known combinatorial optimization problem (COP) with broad real-world applications. Recently, neural networks (NNs) have gained popularity in this research area because as shown in the literature, they provide strong heuristic solutions to TSPs. Compared to autoregressive neural approaches, nonautoregressive (NAR) networks exploit the inference parallelism to elevate inference speed but suffer from comparatively low solution quality. In this article, we propose a novel NAR model named NAR4TSP, which incorporates a specially designed architecture and an enhanced reinforcement learning (RL) strategy. To the best of our knowledge, NAR4TSP is the first TSP solver that successfully combines RL and NAR networks. The key lies in the incorporation of NAR network output decoding into the training process. NAR4TSP efficiently represents TSP-encoded information as rewards and seamlessly integrates it into RL strategies, while maintaining consistent TSP sequence constraints during both training and testing phases. Experimental results on both synthetic and real-world TSPs demonstrate that NAR4TSP outperforms five state-of-the-art (SOTA) models in terms of solution quality, inference speed, and generalization to unseen scenarios.",
    paperLink: "https://ieeexplore.ieee.org/abstract/document/10737904",
  },
  "neural-architecture-search": {
    title:
      "Neural Architecture Search for Text Classification With Limited Computing Resources Using Efficient Cartesian Genetic Programming",
    venue: "IEEE Transactions on Evolutionary Computation",
    date: "2023",
    authors:
      "Xuan Wu, Di Wang, Huanhuan Chen, Lele Yan, Yubin Xiao, Chunyan Miao, Hongwei Ge, Dong Xu, Yanchun Liang, Kangping Wang, Chunguo Wu, You Zhou",
    abstract:
      "CGP has often been applied for neural architecture search (NAS). However, the performance of Cartesian genetic programming (CGP) is less than ideal when searching for architectures with limited computing resources. To better facilitate NAS with limited computing resources, this article proposes a crossover operator, a light-weighted age mechanism, and two adaptive mutation operators as the novel components in our efficient CGP (ECGP) method. To assess the performance of ECGP, we conduct extensive experiments on three text classification task datasets. The experimental results demonstrate that ECGP outperforms other NAS methods, requiring only hundreds of fitness evaluations to find architectures with competitive accuracy compared with human-designed models. Additionally, the ECGP-evolved architectures are shown as converging fast and stably, and having high-level transferability with merely a 1%–2% accuracy drop. Ablation studies demonstrate the effectiveness of the proposed operators and age mechanism, and identify GRU as the most critical function in the text classification task. Finally, we summarize three design principles observed from the ECGP-evolved architectures that are in line with human-design strategies. To the best of our knowledge, this work introduces the first attention-derived NAS benchmark for the text classification task.",
    paperLink: "https://ieeexplore.ieee.org/abstract/document/10373942",
  },
  VDPC: {
    title: "VDPC: Variational Density Peak Clustering Algorithm",
    venue: "Information Sciences",
    date: "2023",
    authors: "Yizhang Wang, Di Wang, You Zhou, Xiaofeng Zhang, Quek Chai",
    abstract: "The widely applied density peak clustering (DPC) algorithm makes an intuitive cluster formation assumption that cluster centers are often surrounded by data points with lower local density and far away from other data points with higher local density. However, this assumption suffers from one limitation that it is often problematic when identifying clusters with lower density because they might be easily merged into other clusters with higher density. As a result, DPC may not be able to identify clusters with variational density. To address this issue, we propose a variational density peak clustering (VDPC) algorithm, which is designed to systematically and autonomously perform the clustering task on datasets with various types of density distributions. Specifically, we first propose a novel method to identify the representatives among all data points and construct initial clusters based on the identified representatives for further analysis of the clusters’ property. Furthermore, we divide all data points into different levels according to their local density and propose a unified clustering framework by combining the advantages of both DPC and DBSCAN. Thus, all the identified initial clusters spreading across different density levels are systematically processed to form the final clusters. To evaluate the effectiveness of the proposed VDPC algorithm, we conduct extensive experiments using 20 datasets including eight synthetic, six real-world, and six image datasets. The experimental results show that VDPC outperforms two classical algorithms (i.e., DPC and DBSCAN) and four state-of-the-art extended DPC algorithms.",
    paperLink:
      "https://www.sciencedirect.com/science/article/abs/pii/S0020025522013822",
  },
  "incorporating-surprisingly-popular": {
    title:
      "Incorporating Surprisingly Popular Algorithm and Euclidean Distance-based Adaptive Topology into PSO",
    venue: "Swarm and Evolutionary Computation",
    date: "2022",
    authors:
      "Xuan Wu, Jizong Han, Di Wang, Pengyue Gao, Quanlong Cui, Liang Chen, Yanchun Liang, Han Huang, Heow Pueh Lee, Chunyan Miao, You Zhou, Chunguo Wu",
    abstract:
      'While many Particle Swarm Optimization (PSO) algorithms only use fitness to assess the performance of particles, in this work, we adopt Surprisingly Popular Algorithm (SPA) as a complementary metric in addition to fitness. Consequently, particles that are not widely known also have the opportunity to be selected as the learning exemplars. In addition, we propose a Euclidean distance-based adaptive topology to cooperate with SPA, where each particle only connects to k number of particles with the shortest Euclidean distance during each iteration. We also introduce the adaptive topology into heterogeneous populations to better solve large-scale problems. Specifically, the exploration sub-population better preserves the diversity of the population while the exploitation sub-population achieves fast convergence. Therefore, large-scale problems can be solved in a collaborative manner to elevate the overall performance. To evaluate the performance of our method, we conduct extensive experiments on various optimization problems, including three benchmark suites and two real-world optimization problems. The results demonstrate that our Euclidean distance-based adaptive topology outperforms the other widely adopted topologies and further suggest that our method performs significantly better than state-of-the-art PSO variants on small, medium, and large-scale problems.',
    paperLink:
      "https://www.sciencedirect.com/science/article/pii/S2210650222001882",
  },
  IPAS: {
    title:
      "IPAS-Net: A Deep-learning Model for Generating High-fidelity Shoeprints from Low-quality Images with No Natural References",
    venue: "Journal of King Saud University-Computer and Information Sciences",
    date: "2022",
    authors:
      "Muhammad Hassan, Di Wang, Pang Wei, Di Wang, Daixi Li, You Zhou, Dong Xu",
    abstract: "Single image super-resolution (SISR) typically reconstructs higher-resolution (HR) images from the corresponding low-resolution (LR) images in the presence of natural HR images. SISR is highly important in generating high-quality images in forensic scenarios since it facilitates close investigation and examination of captured shoeprints. However, it becomes more challenging when there are no available natural HR ground truth images that correspond to the input LR images. In such cases, HR reconstruction becomes even more crucial for providing HR versions that retain the natural characteristics of shoeprints. For this purpose, we propose IPAS-Net, which utilizes U-Net for feature extraction, shares the learned parameters from LR space in HR space, and innovatively upscales, refines, and enhances the HR space via special treatments. The upsampling-and-refinement block comprises a parallel pipeline composed of attention mechanism block (AMB) and one-step-high-iteration (OSHI). All upsampling solutions are infused so that distinct upscaling can compensate each others’ weaknesses. The generated HR shoeprints are evaluated using blind/non-reference evaluation metrics, and the proposed method outperforms the state of the art (SOTA) deep learning modalities on low-quality shoeprints.",
    paperLink:
      "https://www.sciencedirect.com/science/article/abs/pii/S0020025522013822",
  },
  Hassan: {
    title:
      "Restorable-inpainting: A Novel Deep Learning Approach for Shoeprint Restoration",
    venue: "Information Sciences",
    date: "2022",
    authors:
      "Muhammad Hassan, Yan Wang, Di Wang, Wei Pang, Kangping Wang, Daixi Li, You Zhou, Dong Xu",
    abstract: "Shoeprints are important information collected at the crime scene and are of great value for forensic analysis. Shoeprints collected in real-world scenarios are normally unclear, abrasive, and lack contextual and other kinds of missing information. In this research, we apply a novel deep learning technique called restorable inpainting to repair shoeprint contours and missing parts. Existing inpainting methods aim to fill artificially occluded areas with plausible pixels, but these methods may not restore missing information for occlusions in shoeprint images. In addition, because no ground-truth shoeprints exist for training samples, inpainting occluded regions becomes challenging. In this paper, we propose DeepShoePaint, a novel deep learning approach to perform restorable inpainting by restoring synthetic information resembling desirable shoeprint images necessary for forensics. DeepShoePaint novelly adapts a probabilistic distribution borrowed from the variational autoencoder into a U-Net-like structure forming a unified architecture trained in an unsupervised fashion to restore occluded and masked regions to produce human-verifiable shoeprints. The experimental results reveal that DeepShoePaint achieves outstanding human inspection and statistical assessment results and outperforms conventional inpainting models. We believe that this study can provide valuable insights, not limited to inpainting, into restoring desirable shoeprints to automate and facilitate the forensic investigation and examination process instead of using handcrafted methods.",
    paperLink:
      "https://www.sciencedirect.com/science/article/abs/pii/S0020025522003073",
  },
};

// 导出数据
if (typeof module !== "undefined" && module.exports) {
  module.exports = { researchDetails };
} else if (typeof window !== "undefined") {
  window.ResearchData = { researchDetails };
}
