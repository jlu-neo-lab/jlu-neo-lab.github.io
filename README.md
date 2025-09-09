# NeO Lab 网站维护指南

## 项目概述

这是吉林大学神经优化实验室（NeO Lab）的官方网站，用于展示实验室成员、研究成果、项目和新闻动态。网站采用纯HTML、CSS、JavaScript构建，具有中英文双语支持和响应式设计。

## 联系方式

仍有问题请联系：
skippy1010177@gmail.com

## 文件结构

## 快速开始

### 1. 本地运行

在浏览器中访问 `https://jlu-neo-lab.github.io`

### 2. 部署到GitHub Pages

1. 将代码推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择主分支作为发布源
4. 网站将自动部署到 `https://jlu-neo-lab.github.io/jlu-neo-lab/`

## 数据维护指南

### 添加新成员

#### 1. 更新HTML文件

在 `LamdaLab.html` 中找到对应的学生类型section，添加新的成员卡片：

```html
<div class="member-card">
    <img src="static/avator/new-member.jpg" alt="新成员姓名 的头像" class="avatar">
    <p class="name">English Name (中文姓名)</p>
    <p class="info">2025 to now</p>
</div>
```

#### 2. 添加成员详细信息

在 `js/data/member-data.js` 中添加新成员的详细信息：

```javascript
const memberProfiles = {
    // 现有成员...
    
    'newmemberid': {
        name: 'New Member (新成员)',
        year: '2025 to now',
        department: 'School of Computer Science and Technology',
        researchInterests: ['研究方向1', '研究方向2', '研究方向3'],
        email: 'newmember@example.com',
        bio: '成员的详细介绍和研究背景...'
    }
};
```

#### 3. 添加头像图片

将成员头像放入 `static/avator/` 目录，建议命名为 `member-name.jpg`

### 添加新闻动态

在 `js/data/news-data.js` 中添加新的新闻条目：

```javascript
const newsData = {
    // 现有新闻...
    
    'news-id-2025': {
        title: {
            en: 'English Title',
            zh: '中文标题'
        },
        date: '2025-01-20',
        category: {
            en: 'Category',
            zh: '分类'
        },
        summary: {
            en: 'English summary...',
            zh: '中文摘要...'
        },
        content: {
            en: 'Full English content...',
            zh: '完整中文内容...'
        },
        image: 'https://via.placeholder.com/600x300',
        tags: ['标签1', '标签2', '标签3']
    }
};
```

### 添加新项目

在 `js/data/project-data.js` 中添加新项目：

```javascript
const projectDetails = {
    // 现有项目...
    
    'new-project-id': {
        name: {
            en: 'Project English Name',
            zh: '项目中文名称'
        },
        description: {
            en: 'English description...',
            zh: '中文描述...'
        },
        technologies: ['技术1', '技术2', '技术3'],
        status: 'Active', // Active, Completed, In Progress
        duration: '2025-Present',
        team: ['团队成员1', '团队成员2'],
        achievements: [
            { en: 'English achievement', zh: '中文成就' },
            { en: 'Another achievement', zh: '另一个成就' }
        ],
        github: 'https://github.com/username/repo', // 可选
        demo: 'https://demo.example.com', // 可选
        paper: 'https://arxiv.org/abs/xxxx.xxxxx' // 可选
    }
};
```

### 添加研究论文

在 `js/data/research-data.js` 中添加新论文：

```javascript
const researchDetails = {
    // 现有论文...
    
    'new-paper-id': {
        title: 'Paper Title',
        venue: 'Conference/Journal Name',
        date: '2025-03',
        authors: 'Author1, Author2, Author3, You Zhou',
        abstract: 'Paper abstract describing the research contribution...',
        paperLink: 'https://example.com/paper-link'
    }
};
```

## 页面维护指南

### 主页（LamdaLab.html）

- **导师信息**：直接在HTML中修改supervisor-card部分
- **学生分组**：按博士生、硕士生、毕业生分组
- **成员排序**：建议按入学年份排序

### 研究页面（research.html）

- 展示实验室的研究论文
- 支持点击查看详情
- 按时间倒序排列

### 项目页面（projects.html）

- 展示实验室的研究项目
- 包含项目状态、技术栈、成就等信息
- 支持GitHub链接、演示链接等

### 新闻页面（news.html）

- 展示实验室动态和新闻
- 支持分类和标签
- 按时间倒序排列

## 样式定制

### 颜色主题

在 `styles.css` 中可以修改主要颜色：

```css
:root {
    --primary-color: #2c3e50;    /* 主色调 */
    --secondary-color: #3498db;  /* 次要色调 */
    --accent-color: #e74c3c;     /* 强调色 */
    --text-color: #333;          /* 文字颜色 */
    --bg-color: #f8f9fa;         /* 背景色 */
}
```

### 响应式断点

```css
/* 平板设备 */
@media (max-width: 768px) {
    /* 样式调整 */
}

/* 手机设备 */
@media (max-width: 480px) {
    /* 样式调整 */
}
```

## 语言管理

网站支持中英文双语，语言切换通过以下方式实现：

### 1. HTML元素语言标记

```html
<element data-en="English Text" data-zh="中文文本">English Text</element>
```

### 2. JavaScript数据对象

```javascript
{
    title: {
        en: 'English Title',
        zh: '中文标题'
    }
}
```

### 3. 添加新的多语言内容

1. 在HTML中添加 `data-en` 和 `data-zh` 属性
2. 在JavaScript数据文件中使用对象结构
3. 语言切换会自动更新所有标记的元素

## 图片管理

### 成员头像

- 存放位置：`static/avator/`
- 推荐尺寸：150x150px
- 格式：JPG/PNG
- 命名规范：`member-name.jpg`

### 新闻图片

- 可使用外部链接或本地存储
- 推荐尺寸：600x300px
- 在新闻数据中设置image字段

### 占位图片

目前使用 `https://via.placeholder.com/` 作为占位图片，建议替换为实际图片。



## 更新日志

### 2025-09-8
- 发布v1
- 创建详细的维护文档

---

**注意**：在进行任何重大修改前，请务必备份现有数据和代码。建议在开发环境中测试所有修改，确认无误后再部署到生产环境。