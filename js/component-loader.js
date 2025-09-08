// 组件加载器
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

// 导出函数以供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { loadComponent };
} else if (typeof window !== 'undefined') {
    window.ComponentLoader = { loadComponent };
}
