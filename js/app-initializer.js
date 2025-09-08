// 页面加载完成后的初始化

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 加载页脚组件
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer && window.ComponentLoader) {
        // 检查当前是否在pages目录下
        if (window.location.pathname.includes('/pages/')) {
            window.ComponentLoader.loadComponent('footer-container', '../pages/footer.html');
        } else {
            window.ComponentLoader.loadComponent('footer-container', 'pages/footer.html');
        }
    }
    
    // 初始化头像点击功能
    if (window.MemberModal) {
        window.MemberModal.initializeAvatarClicks();
    }
    
    // 初始化项目点击功能
    if (window.ProjectModal) {
        window.ProjectModal.initializeProjectClicks();
    }

    // 初始化论文点击功能
    if (window.ResearchModal) {
        window.ResearchModal.initializeResearchClicks();
    }

    // 初始化新闻点击功能
    if (window.NewsModal) {
        window.NewsModal.initializeNewsClicks();
    }
    
    // 设置初始语言状态
    if (window.LanguageManager) {
        window.LanguageManager.updatePageLanguage();
    }
});

// 导出初始化函数
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {};
} else if (typeof window !== 'undefined') {
    window.AppInitializer = {};
}
