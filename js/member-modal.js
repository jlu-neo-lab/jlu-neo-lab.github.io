// 成员模态框功能 (遵循SRP原则，单一职责处理模态框逻辑)

// 为没有配置文件的成员创建默认信息 (遵循OCP原则，可扩展不可修改)
function createDefaultMemberProfile(memberId) {
    // 尝试从DOM中查找成员信息
    const avatars = document.querySelectorAll('.avatar[data-member="' + memberId + '"]');
    let memberCard = null;
    
    if (avatars.length > 0) {
        memberCard = avatars[0].closest('.member-card');
    }
    
    const defaultProfile = { ...window.MemberData.memberProfiles.default };
    
    if (memberCard) {
        const nameElement = memberCard.querySelector('.name');
        const infoElements = memberCard.querySelectorAll('.info');
        
        if (nameElement) {
            defaultProfile.name = nameElement.textContent;
        }
        
        if (infoElements.length > 0) {
            defaultProfile.year = infoElements[0].textContent;
        }
        
        if (infoElements.length > 1) {
            defaultProfile.department = infoElements[1].textContent;
        }
    }
    
    return defaultProfile;
}

function createMemberModal(member) {
    const modal = document.createElement('div');
    modal.className = 'member-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="window.MemberModal.closeMemberModal()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h2>${member.name}</h2>
                <button class="modal-close" onclick="window.MemberModal.closeMemberModal()">×</button>
            </div>
            <div class="modal-body">
                <div class="member-basic-info">
                    <p><strong data-en="Study Period:" data-zh="在读时间:">在读时间:</strong> ${member.year}</p>
                    <p><strong data-en="Department:" data-zh="所属学院:">所属学院:</strong> ${member.department}</p>
                    <p><strong data-en="Email:" data-zh="邮箱:">邮箱:</strong> <a href="mailto:${member.email}">${member.email}</a></p>
                </div>
                
                <div class="member-research">
                    <h3 data-en="Research Interests" data-zh="研究兴趣">研究兴趣</h3>
                    <div class="research-tags">
                        ${member.researchInterests.map(interest => 
                            `<span class="research-tag">${interest}</span>`
                        ).join('')}
                    </div>
                </div>
                <div class="member-bio">
                    <h3 data-en="Biography" data-zh="个人简介">个人简介</h3>
                    <p>${member.bio}</p>
                </div>
            </div>
        </div>
    `;
    return modal;
}

function openMemberModal(memberId) {
    let member = window.MemberData.memberProfiles[memberId];
    
    // 如果没有找到具体成员信息，使用默认模板并尝试从DOM中提取基本信息
    if (!member) {
        member = createDefaultMemberProfile(memberId);
    }

    const modal = createMemberModal(member);
    document.body.appendChild(modal);
    
    // 应用当前语言设置到模态框
    if (window.LanguageManager) {
        window.LanguageManager.updateModalLanguage(modal);
    }
    
    // 使用KISS原则，简单的显示动画
    setTimeout(() => modal.classList.add('show'), 10);
}

function closeMemberModal() {
    const modal = document.querySelector('.member-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300); // 等待动画完成
    }
}

// 初始化头像点击事件 (遵循YAGNI原则，只添加必需的功能)
function initializeAvatarClicks() {
    const avatars = document.querySelectorAll('.avatar');
    
    avatars.forEach(avatar => {
        // 跳过导师头像（通过检查是否在supervisor-card内）
        if (avatar.closest('.supervisor-card')) {
            return;
        }
        
        // 为头像添加点击样式和事件
        avatar.classList.add('clickable-avatar');
        
        // 从member-card中提取成员信息生成ID
        const memberCard = avatar.closest('.member-card');
        if (memberCard) {
            const nameElement = memberCard.querySelector('.name');
            if (nameElement) {
                const nameText = nameElement.textContent;
                const memberId = generateMemberIdFromName(nameText);
                
                avatar.setAttribute('data-member', memberId);
                avatar.onclick = () => openMemberModal(memberId);
            }
        }
    });
}

// 工具函数：从姓名生成成员ID (遵循DRY原则，避免重复逻辑)
function generateMemberIdFromName(nameText) {
    // 提取中文名（在括号中）
    const chineseMatch = nameText.match(/\(([^)]+)\)/);
    const chineseName = chineseMatch ? chineseMatch[1] : nameText;
    
    // 直接使用中文姓名作为 ID，移除空格和特殊字符
    return chineseName.replace(/[^\u4e00-\u9fa5a-zA-Z]/g, '');
}

// 导出函数
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        openMemberModal, 
        closeMemberModal, 
        initializeAvatarClicks,
        createDefaultMemberProfile,
        createMemberModal,
        generateMemberIdFromName
    };
} else if (typeof window !== 'undefined') {
    window.MemberModal = { 
        openMemberModal, 
        closeMemberModal, 
        initializeAvatarClicks,
        createDefaultMemberProfile,
        createMemberModal,
        generateMemberIdFromName
    };
}
