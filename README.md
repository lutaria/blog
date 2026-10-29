# Source Notes

Notes on code, systems, and the ideas behind them.

Source Notes 是一个静态 Astro 技术博客。文章由人类作者撰写，AI 只按授权协助画图、代码示例、校对或润色，不代写可发布正文。站点界面为英文，中文文章的标题、摘要与正文标注 `lang="zh-CN"`。

## 项目结构

- `src/blog/`：文章内容，支持 Markdown 与 MDX，也支持子目录。
- `src/pages/`：首页、文章、标签、搜索与 RSS 路由。
- `src/components/`：文章列表、代码块、Mermaid 图表与路径预览。
- `shared/`：文章直接导入的共享代码和流程图，不在文章里另复制一份。
- `docs/writing.md`：完整的写作、预览与发表步骤。
- `docs/reviewing.md`：较长的审稿清单。
- `AGENTS.md`：项目规则源；`CLAUDE.md` 是指向它的相对软链接。

## 本地运行

需要 Node 24（见 `.nvmrc`）。首次安装后常用命令：

```bash
npm ci
npm run dev       # 本地写作预览，热更新，包含草稿
npm run check     # TypeScript / Astro 检查
npm run build     # 构建静态站点，排除草稿；有公开文章时生成 Pagefind 索引
npm run preview   # 预览构建产物，与线上内容一致
```

两种预览方式用途不同：

- `npm run dev`：开发模式包含草稿。首页会列出草稿，文章地址为 `http://127.0.0.1:4321/tech-blog/posts/<文章 id>/`，子目录文章也按目录层级访问。搜索索引只在构建时生成，所以开发模式的搜索页显示构建后可用，不提供查询。
- `npm run build` + `npm run preview`：生产构建排除所有草稿。预览地址为 `http://127.0.0.1:4321/tech-blog/`，文章、首页、标签、RSS、sitemap 与搜索索引都只包含 `draft: false` 的文章。全部文章为草稿时构建会跳过 Pagefind，搜索页显示空态而不是故障。

## 开始写文章

在 `src/blog/` 新建 `.md` 或 `.mdx` 文件，填写 `title`、`description`、`pubDate`、`tags`。省略 `draft` 字段即按草稿处理，草稿可用 `npm run dev` 打开预览；只有作者明确写 `draft: false` 才进入生产公开内容。最小示例：

```md
---
title: 文章标题
description: 一句话摘要
pubDate: 2026-10-29
tags: [astro]
draft: true   # 可省略；省略等同于草稿
---

正文从这里开始。
```

详细步骤、图片与共享代码的用法见 [docs/writing.md](docs/writing.md)。审稿流程见 [docs/reviewing.md](docs/reviewing.md)。

## 发布状态

站点已发布到 GitHub Pages：<https://lutaria.github.io/tech-blog/>。`astro.config.mjs` 的 `site` 为 `https://lutaria.github.io`，项目路径由 `base: '/tech-blog'` 提供。远程仓库为 [lutaria/tech-blog](https://github.com/lutaria/tech-blog)，Pages 的构建来源是 GitHub Actions：推送到 `main` 后由 `.github/workflows/pages.yml` 校验、构建并部署，PR 只做校验。当前所有文章仍是草稿，因此线上首页显示零篇文章、搜索页为正常空态，这是预期结果。
