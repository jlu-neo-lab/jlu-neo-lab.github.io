// 语言切换功能 (遵循KISS原则，简单高效的语言切换)
let currentLanguage = localStorage.getItem('language') || 'en'; // 从localStorage获取语言或默认英文

function getCurrentLanguage() {
    return currentLanguage;
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
    localStorage.setItem('language', currentLanguage); // 保存语言选择
    updatePageLanguage();
}

function updatePageLanguage() {
    // 更新所有具有data-en和data-zh属性的元素
    const elementsWithLang = document.querySelectorAll('[data-en][data-zh]');
    elementsWithLang.forEach(element => {
        const text = currentLanguage === 'en' ? element.getAttribute('data-en') : element.getAttribute('data-zh');
        element.innerHTML = text;
    });

    // 更新语言切换按钮文本
    const langBtn = document.querySelector('.nav-links a[onclick="window.LanguageManager.toggleLanguage()"]');
    if (langBtn) {
        langBtn.textContent = currentLanguage === 'en' ? '中文' : 'English';
    }
}

// 更新模态框内的语言
function updateModalLanguage(modal) {
    const elementsWithLang = modal.querySelectorAll('[data-en][data-zh]');
    elementsWithLang.forEach(element => {
        const text = currentLanguage === 'en' ? element.getAttribute('data-en') : element.getAttribute('data-zh');
        element.innerHTML = text;
    });
}

// 导出函数
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        toggleLanguage, 
        updatePageLanguage, 
        updateModalLanguage,
        getCurrentLanguage
    };
} else if (typeof window !== 'undefined') {
    window.LanguageManager = { 
        toggleLanguage, 
        updatePageLanguage, 
        updateModalLanguage,
        getCurrentLanguage
    };
}
