// 新闻模态框功能

function createNewsModal(news) {
    const modal = document.createElement('div');
    modal.className = 'member-modal'; // 复用样式
    modal.id = 'news-modal';
    
    const currentLanguage = window.LanguageManager ? window.LanguageManager.getCurrentLanguage() : 'en';
    const title = news.title[currentLanguage];
    const content = news.content[currentLanguage];
    const category = news.category[currentLanguage];
    
    modal.innerHTML = `
        <div class="modal-overlay" onclick="window.NewsModal.closeNewsModal()"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h2>${title}</h2>
                <button class="modal-close" onclick="window.NewsModal.closeNewsModal()">×</button>
            </div>
            <div class="modal-body">
                <div class="member-basic-info">
                    <p><strong data-en="Date:" data-zh="日期:">${currentLanguage === 'en' ? 'Date:' : '日期:'}</strong> ${news.date}</p>
                    <p><strong data-en="Category:" data-zh="分类:">${currentLanguage === 'en' ? 'Category:' : '分类:'}</strong> ${category}</p>
                    ${news.tags ? `<p><strong data-en="Tags:" data-zh="标签:">${currentLanguage === 'en' ? 'Tags:' : '标签:'}</strong> ${news.tags.join(', ')}</p>` : ''}
                </div>
                
                
                <div class="member-bio">
                    <h3 data-en="Details" data-zh="详细内容">${currentLanguage === 'en' ? 'Details' : '详细内容'}</h3>
                    <p style="line-height: 1.6; text-align: justify;">${content}</p>
                </div>
            </div>
        </div>
    `;
    return modal;
}

function openNewsModal(newsId) {
    const news = window.NewsData.newsData[newsId];
    if (!news) {
        console.error('News not found:', newsId);
        return;
    }

    const modal = createNewsModal(news);
    document.body.appendChild(modal);
    
    // 应用当前语言设置到模态框
    if (window.LanguageManager) {
        window.LanguageManager.updateModalLanguage(modal);
    }
    
    setTimeout(() => modal.classList.add('show'), 10);
}

function closeNewsModal() {
    const modal = document.querySelector('#news-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
}

// 初始化新闻点击事件
function initializeNewsClicks() {
    const newsCards = document.querySelectorAll('.clickable-news');
    
    newsCards.forEach(card => {
        card.style.cursor = 'pointer';
        const newsId = card.getAttribute('data-news');
        if (newsId) {
            card.onclick = () => openNewsModal(newsId);
        }
    });
}

// 导出函数
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        openNewsModal, 
        closeNewsModal, 
        initializeNewsClicks,
        createNewsModal
    };
} else if (typeof window !== 'undefined') {
    window.NewsModal = { 
        openNewsModal, 
        closeNewsModal, 
        initializeNewsClicks,
        createNewsModal
    };
}
