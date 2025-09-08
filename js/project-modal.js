// 项目模态框功能 (遵循SRP原则，专门处理项目详情)

function createProjectModal(project) {
    const modal = document.createElement('div');
    modal.className = 'member-modal';
    modal.id = 'project-modal';
    
    const currentLanguage = window.LanguageManager ? window.LanguageManager.getCurrentLanguage() : 'en';
    const name = project.name[currentLanguage];
    const description = project.description[currentLanguage];
    const achievements = project.achievements.map(achievement => achievement[currentLanguage]);
    
    modal.innerHTML = `
        <div class="modal-overlay" onclick="window.ProjectModal.closeProjectModal()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h2>${name}</h2>
                <button class="modal-close" onclick="window.ProjectModal.closeProjectModal()">×</button>
            </div>
            <div class="modal-body">
                <div class="member-basic-info">
                    <p><strong>${currentLanguage === 'en' ? 'Status:' : '状态:'}</strong> ${project.status}</p>
                    <p><strong>${currentLanguage === 'en' ? 'Duration:' : '时间:'}</strong> ${project.duration}</p>
                    <p><strong>${currentLanguage === 'en' ? 'Team:' : '团队:'}</strong> ${project.team.join(', ')}</p>
                </div>
                
                <div class="member-bio">
                    <h3>${currentLanguage === 'en' ? 'Project Description' : '项目描述'}</h3>
                    <p>${description}</p>
                </div>
                
                <div class="member-research">
                    <h3>${currentLanguage === 'en' ? 'Technologies' : '技术栈'}</h3>
                    <div class="research-tags">
                        ${project.technologies.map(tech => 
                            `<span class="research-tag">${tech}</span>`
                        ).join('')}
                    </div>
                </div>
                
                <div class="member-achievements">
                    <h3>${currentLanguage === 'en' ? 'Key Achievements' : '主要成就'}</h3>
                    <ul>
                        ${achievements.map(achievement => 
                            `<li>${achievement}</li>`
                        ).join('')}
                    </ul>
                </div>
                
                ${project.github || project.demo || project.paper || project.docs ? `
                <div class="member-education">
                    <h3>${currentLanguage === 'en' ? 'Links & Resources' : '链接与资源'}</h3>
                    ${project.github && project.github !== 'Private Repository' ? `<p><strong>GitHub:</strong> <a href="${project.github}" target="_blank">${project.github}</a></p>` : ''}
                    ${project.demo ? `<p><strong>Demo:</strong> <a href="${project.demo}" target="_blank">${project.demo}</a></p>` : ''}
                    ${project.paper ? `<p><strong>Paper:</strong> <a href="${project.paper}" target="_blank">${project.paper}</a></p>` : ''}
                    ${project.docs ? `<p><strong>Documentation:</strong> <a href="${project.docs}" target="_blank">${project.docs}</a></p>` : ''}
                    ${project.github === 'Private Repository' ? `<p><strong>GitHub:</strong> ${currentLanguage === 'en' ? 'Private Repository' : '私有仓库'}</p>` : ''}
                </div>
                ` : ''}
            </div>
        </div>
    `;
    return modal;
}

function openProjectModal(projectId) {
    const project = window.ProjectData.projectDetails[projectId];
    if (!project) {
        console.error('Project not found:', projectId);
        return;
    }

    const modal = createProjectModal(project);
    document.body.appendChild(modal);
    
    // 应用当前语言设置到模态框
    if (window.LanguageManager) {
        window.LanguageManager.updateModalLanguage(modal);
    }
    
    // 使用KISS原则，简单的显示动画
    setTimeout(() => modal.classList.add('show'), 10);
}

function closeProjectModal() {
    const modal = document.querySelector('#project-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300); // 等待动画完成
    }
}

// 初始化项目点击事件 (遵循DRY原则，复用类似逻辑)
function initializeProjectClicks() {
    const projectCards = document.querySelectorAll('.clickable-project');
    
    projectCards.forEach(card => {
        // 添加视觉提示样式
        card.style.cursor = 'pointer';
        
        // 添加点击事件
        const projectId = card.getAttribute('data-project');
        if (projectId) {
            card.onclick = () => openProjectModal(projectId);
        }
    });
}

// 导出函数
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        openProjectModal, 
        closeProjectModal, 
        initializeProjectClicks,
        createProjectModal
    };
} else if (typeof window !== 'undefined') {
    window.ProjectModal = { 
        openProjectModal, 
        closeProjectModal, 
        initializeProjectClicks,
        createProjectModal
    };
}
