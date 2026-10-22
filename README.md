# 林木茂盛 · 个人网站

量化研究、全栈开发与 AI Agent 工具链的个人作品与文字记录。

在线访问：[lxj808624.github.io](https://lxj808624.github.io/)

## 页面与样式

- `index.html`：个人介绍、项目与贡献、文章入口和联系方式。
- `blog/index.html`：文章列表。
- `blog/dsh-tool-git-maintainer.html`：开源维护手记。
- `style.css`：暖米白、深松绿与铜棕色的共享样式，包含移动端布局。
- `script.js`：渐进增强，读取 dsh-tool-git 最新 Release 版本；失败不影响正文和链接。

纯 HTML/CSS/JavaScript，无第三方运行时依赖、无需构建。文章和导航在禁用 JavaScript 时仍然可用。

## 本地预览

在仓库根目录运行：

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

访问 http://127.0.0.1:8000 。

GitHub Pages 从 `main` 分支根目录发布。开发分支用于预览，合并并推送到 `main` 后更新正式网站。GitHub 个人资料 README 由独立的 `lxj808624` 仓库管理。
