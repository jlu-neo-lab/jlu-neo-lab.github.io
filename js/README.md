# JavaScript 模块化重构说明

## 概述
原本的 `components.js` 文件已被拆分为多个单一职责的模块文件，以提高代码的可维护性、可读性和可扩展性。

## 文件结构

### 核心模块

#### `component-loader.js`
- **职责**: 负责异步加载HTML组件
- **主要功能**: 
  - `loadComponent(elementId, componentPath)` - 加载指定路径的HTML组件到指定元素中
- **使用**: 主要用于加载页脚等共用组件

#### `language-manager.js`
- **职责**: 管理网站的多语言切换功能
- **主要功能**:
  - `toggleLanguage()` - 在中英文之间切换
  - `updatePageLanguage()` - 更新页面所有语言元素
  - `updateModalLanguage(modal)` - 更新模态框内的语言
  - `getCurrentLanguage()` - 获取当前语言设置
- **存储**: 使用 localStorage 持久化语言设置

### 数据模块

#### `member-data.js`
- **职责**: 存储团队成员信息数据
- **内容**: `memberProfiles` 对象，包含所有成员的详细信息
- **数据结构**: 包含姓名、年级、院系、研究兴趣、教育背景、邮箱等信息

#### `project-data.js`
- **职责**: 存储项目详情数据
- **内容**: `projectDetails` 对象，包含所有项目的详细信息
- **数据结构**: 包含项目名称（中英文）、描述、技术栈、状态、团队成员、成就等

#### `research-data.js`
- **职责**: 存储研究论文数据
- **内容**: `researchDetails` 对象，包含所有论文的详细信息
- **数据结构**: 包含标题、发表会议、日期、作者、摘要、论文链接等

### 功能模块

#### `member-modal.js`
- **职责**: 处理团队成员详情模态框
- **主要功能**:
  - `openMemberModal(memberId)` - 打开成员详情模态框
  - `closeMemberModal()` - 关闭成员模态框
  - `initializeAvatarClicks()` - 初始化头像点击事件
  - `createMemberModal(member)` - 创建模态框HTML结构
  - `generateMemberIdFromName(nameText)` - 从姓名生成成员ID

#### `project-modal.js`
- **职责**: 处理项目详情模态框
- **主要功能**:
  - `openProjectModal(projectId)` - 打开项目详情模态框
  - `closeProjectModal()` - 关闭项目模态框
  - `initializeProjectClicks()` - 初始化项目卡片点击事件
  - `createProjectModal(project)` - 创建项目模态框HTML结构

#### `research-modal.js`
- **职责**: 处理研究论文详情模态框
- **主要功能**:
  - `openResearchModal(researchId)` - 打开论文详情模态框
  - `closeResearchModal()` - 关闭论文模态框
  - `initializeResearchClicks()` - 初始化论文卡片点击事件
  - `createResearchModal(research)` - 创建论文模态框HTML结构

#### `app-initializer.js`
- **职责**: 页面初始化和事件绑定
- **主要功能**: 
  - 页面加载完成后的统一初始化
  - 调用各模块的初始化函数
  - 设置初始语言状态

## 全局命名空间

为了避免命名冲突并提供清晰的API，每个模块都将其功能暴露在特定的全局命名空间下：

- `window.ComponentLoader` - 组件加载器
- `window.LanguageManager` - 语言管理器
- `window.MemberData` - 成员数据
- `window.MemberModal` - 成员模态框
- `window.ProjectData` - 项目数据
- `window.ProjectModal` - 项目模态框
- `window.ResearchData` - 研究数据
- `window.ResearchModal` - 研究模态框
- `window.AppInitializer` - 应用初始化器

## HTML 文件更新

所有HTML文件都已更新以导入新的模块化文件：

```html
<!-- 导入模块化JavaScript文件 -->
<script src="js/component-loader.js"></script>
<script src="js/member-data.js"></script>
<script src="js/member-modal.js"></script>
<script src="js/project-data.js"></script>
<script src="js/project-modal.js"></script>
<script src="js/research-data.js"></script>
<script src="js/research-modal.js"></script>
<script src="js/language-manager.js"></script>
<script src="js/app-initializer.js"></script>
```

## 设计原则

重构遵循了以下软件设计原则：

- **单一职责原则 (SRP)**: 每个模块只负责一个特定的功能
- **开闭原则 (OCP)**: 模块对扩展开放，对修改关闭
- **DRY原则**: 避免重复代码，提取共用逻辑
- **KISS原则**: 保持简单直接的实现
- **YAGNI原则**: 只实现当前需要的功能

## 优势

1. **可维护性**: 每个文件职责单一，更容易定位和修改问题
2. **可读性**: 代码结构清晰，功能分离明确
3. **可扩展性**: 新功能可以独立添加，不影响现有模块
4. **可测试性**: 模块化使得单元测试更容易实现
5. **团队协作**: 不同开发者可以并行开发不同模块
6. **代码复用**: 模块可以在不同页面间复用

## 使用示例

```javascript
// 打开成员详情模态框
window.MemberModal.openMemberModal('xuanwu');

// 切换语言
window.LanguageManager.toggleLanguage();

// 加载组件
window.ComponentLoader.loadComponent('footer-container', 'footer.html');

// 打开项目详情
window.ProjectModal.openProjectModal('smart-scheduling');
```

## 注意事项

1. 所有模块都支持 CommonJS 和浏览器环境
2. 模态框的关闭函数已更新为使用命名空间调用
3. 语言切换按钮的onclick事件已更新
4. 页面初始化会自动调用所有必要的初始化函数
