// 新闻页面分页功能
(function() {
    'use strict';
    
    // 分页配置
    const ITEMS_PER_PAGE = 4;
    let currentPage = 1;
    let newsArray = [];
    let totalPages = 1;

    // 将新闻数据转换为数组并按日期排序
    function initializeNews() {
        if (!window.NewsData || !window.NewsData.newsData) {
            console.error('News data not loaded');
            return;
        }

        newsArray = Object.entries(window.NewsData.newsData).map(([id, data]) => ({
            id,
            ...data
        })).sort((a, b) => new Date(b.date) - new Date(a.date));

        totalPages = Math.ceil(newsArray.length / ITEMS_PER_PAGE);
        renderNews();
        renderPagination();
    }

    // 渲染新闻列表
    function renderNews() {
        const newsList = document.getElementById('news-list');
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        const currentNews = newsArray.slice(startIndex, endIndex);

        const currentLanguage = window.LanguageManager ? window.LanguageManager.getCurrentLanguage() : 'en';

        newsList.innerHTML = currentNews.map(news => `
            <article class="news-item clickable-news" data-news="${news.id}">
                <div class="news-content">
                    <div class="news-meta">
                        <div class="news-date">${news.date}</div>
                        <span class="news-category" data-en="${news.category.en}" data-zh="${news.category.zh}">${news.category[currentLanguage]}</span>
                    </div>
                    <h2 class="news-title" data-en="${news.title.en}" data-zh="${news.title.zh}">${news.title[currentLanguage]}</h2>
                    <p class="news-summary" data-en="${news.summary.en}" data-zh="${news.summary.zh}">${news.summary[currentLanguage]}</p>
                </div>
            </article>
        `).join('');

        // 重新初始化点击事件
        if (window.NewsModal) {
            window.NewsModal.initializeNewsClicks();
        }

        // 更新语言
        if (window.LanguageManager) {
            window.LanguageManager.updatePageLanguage();
        }
    }

    // 渲染分页控件
    function renderPagination() {
        const pagination = document.getElementById('pagination');
        const currentLanguage = window.LanguageManager ? window.LanguageManager.getCurrentLanguage() : 'en';
        
        let paginationHTML = '';

        // 上一页按钮
        paginationHTML += `
            <button class="pagination-btn ${currentPage === 1 ? 'disabled' : ''}" 
                    onclick="window.NewsPagination.changePage(${currentPage - 1})" 
                    ${currentPage === 1 ? 'disabled' : ''}>
                ←
            </button>
        `;

        // 页码按钮
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
                paginationHTML += `
                    <button class="pagination-btn ${i === currentPage ? 'active' : ''}" 
                            onclick="window.NewsPagination.changePage(${i})">
                        ${i}
                    </button>
                `;
            } else if (i === currentPage - 2 || i === currentPage + 2) {
                paginationHTML += '<span class="pagination-btn disabled">...</span>';
            }
        }

        // 下一页按钮
        paginationHTML += `
            <button class="pagination-btn ${currentPage === totalPages ? 'disabled' : ''}" 
                    onclick="window.NewsPagination.changePage(${currentPage + 1})" 
                    ${currentPage === totalPages ? 'disabled' : ''}>
                →
            </button>
        `;

        // 页面信息
        const totalText = currentLanguage === 'en' ? 'Total' : '共';
        const pageText = currentLanguage === 'en' ? 'pages' : '页';
        paginationHTML += `
            <div class="pagination-info">
                ${totalText} ${totalPages} ${pageText}
            </div>
        `;

        pagination.innerHTML = paginationHTML;
    }

    // 切换页面
    function changePage(page) {
        if (page < 1 || page > totalPages || page === currentPage) {
            return;
        }
        
        currentPage = page;
        renderNews();
        renderPagination();
        
        // 滚动到顶部
        document.querySelector('main').scrollIntoView({ 
            behavior: 'smooth' 
        });
    }

    // 页面加载完成后的初始化
    function initializePage() {
        // 加载页脚组件
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer && window.ComponentLoader) {
            window.ComponentLoader.loadComponent('footer-container', '../pages/footer.html');
        }
        
        // 初始化新闻数据和分页
        setTimeout(initializeNews, 100); // 确保数据已加载
        
        // 设置初始语言状态
        if (window.LanguageManager) {
            window.LanguageManager.updatePageLanguage();
        }
    }

    // 监听语言切换事件
    function handleLanguageChange() {
        renderNews();
        renderPagination();
    }

    // 暴露公共API
    window.NewsPagination = {
        changePage: changePage,
        initializeNews: initializeNews,
        initializePage: initializePage,
        handleLanguageChange: handleLanguageChange
    };

    // DOM加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializePage);
    } else {
        initializePage();
    }

    // 监听语言切换事件
    document.addEventListener('languageChanged', handleLanguageChange);
})();
