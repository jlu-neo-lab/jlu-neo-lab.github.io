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

    // 移动端汉堡菜单功能
    initMobileMenu();
});

// 移动端菜单功能
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.getElementById('mobile-overlay');
    const navItems = navLinks?.querySelectorAll('a');
    
    if (!hamburger || !navLinks) return;
    
    // 切换菜单状态
    function toggleMenu() {
        const isActive = navLinks.classList.contains('active');
        
        if (isActive) {
            closeMenu();
        } else {
            openMenu();
        }
    }
    
    // 打开菜单
    function openMenu() {
        hamburger.classList.add('active');
        navLinks.classList.add('active');
        if (overlay) overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // 防止背景滚动
    }
    
    // 关闭菜单
    function closeMenu() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = ''; // 恢复滚动
    }
    
    // 事件监听
    hamburger.addEventListener('click', toggleMenu);
    
    // 点击遮罩层关闭菜单
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }
    
    // 点击导航链接关闭菜单
    if (navItems) {
        navItems.forEach(item => {
            item.addEventListener('click', closeMenu);
        });
    }
    
    // ESC键关闭菜单
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // 窗口大小改变时关闭菜单（防止桌面端显示移动端菜单）
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });
}

// 导出初始化函数
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {};
} else if (typeof window !== 'undefined') {
    window.AppInitializer = {};
}
