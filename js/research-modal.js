// 论文模态框功能

function createResearchModal(research) {
    const modal = document.createElement('div');
    modal.className = 'member-modal'; // 复用样式
    modal.id = 'research-modal';
    
    modal.innerHTML = `
        <div class="modal-overlay" onclick="window.ResearchModal.closeResearchModal()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h2>${research.title}</h2>
                <button class="modal-close" onclick="window.ResearchModal.closeResearchModal()">×</button>
            </div>
            <div class="modal-body">
                <div class="member-basic-info">
                    <p><strong data-en="Venue:" data-zh="发表会议:">发表会议:</strong> ${research.venue}</p>
                    <p><strong data-en="Date:" data-zh="发表时间:">发表时间:</strong> ${research.date}</p>
                </div>
                
                <div class="member-education">
                    <h3 data-en="Authors" data-zh="作者">作者</h3>
                    <p>${research.authors}</p>
                </div>

                <div class="member-bio">
                    <h3 data-en="Abstract" data-zh="摘要">摘要</h3>
                    <p>${research.abstract}</p>
                </div>
                
                <div class="member-education">
                    <h3 data-en="Links" data-zh="链接">链接</h3>
                    <p><a href="${research.paperLink}" target="_blank" data-en="Read Paper" data-zh="阅读论文">阅读论文</a></p>
                </div>
            </div>
        </div>
    `;
    return modal;
}

function openResearchModal(researchId) {
    const research = window.ResearchData.researchDetails[researchId];
    if (!research) {
        console.error('Research not found:', researchId);
        return;
    }

    const modal = createResearchModal(research);
    document.body.appendChild(modal);
    
    // 应用当前语言设置到模态框
    if (window.LanguageManager) {
        window.LanguageManager.updateModalLanguage(modal);
    }
    
    setTimeout(() => modal.classList.add('show'), 10);
}

function closeResearchModal() {
    const modal = document.querySelector('#research-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
}

// 初始化论文点击事件
function initializeResearchClicks() {
    const researchCards = document.querySelectorAll('.clickable-research');
    
    researchCards.forEach(card => {
        card.style.cursor = 'pointer';
        const researchId = card.getAttribute('data-research');
        if (researchId) {
            card.onclick = () => openResearchModal(researchId);
        }
    });
}

// 导出函数
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        openResearchModal, 
        closeResearchModal, 
        initializeResearchClicks,
        createResearchModal
    };
} else if (typeof window !== 'undefined') {
    window.ResearchModal = { 
        openResearchModal, 
        closeResearchModal, 
        initializeResearchClicks,
        createResearchModal
    };
}
