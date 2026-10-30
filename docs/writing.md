# 写作指南

文章由人类作者决定论点、论证、正文与是否发表。AI 可以按授权协助画图、整理代码示例、校对或润色，但不能代写可发布正文，也不能捏造事实、经历、引用或数据。

## 1. 新建文章

在 `src/blog/` 下新建 `.md` 或 `.mdx` 文件。文件名使用小写字母、数字和连字符，例如 `source-notes-workflow.mdx`；也可以放进子目录，例如 `src/blog/guides/preview.mdx`，路由会保留子目录层级。

Front matter 最少包含以下字段：

```yaml
---
title: 文章标题
description: 一句话摘要，用于列表、搜索与 RSS
pubDate: 2026-10-29
tags: [astro, documentation]
draft: true
---
```

- `title`、`description`、`pubDate` 必填。
- `tags` 可选，只能使用小写字母、数字和连字符；每个标签会自动生成标签页。
- `draft` 默认是草稿：省略该字段或写 `true` 都按草稿处理。草稿只在开发模式可见，不会进入生产构建的首页、文章路由、标签页、RSS、sitemap 或搜索索引。只有作者明确写 `draft: false` 才会公开。

## 2. 正文与语言

- 可以用 Markdown 写普通文章；需要组件或共享源文件时使用 MDX。
- 中文标题、摘要、正文和目录条目应带 `lang="zh-CN"`；英文界面、日期和按钮保持英文，不要为了搜索把中文正文改成英文。
- 图片放在 `src/assets/`，在 MDX 中用 Astro 的 `Image` 组件引用。
- 代码块可以直接写 Markdown 围栏；需要文件名、复制按钮或统一高亮时使用 `src/components/CodeBlock.astro`。
- 流程图用 `src/components/Mermaid.astro`，源文件放在 `shared/`，文章直接导入，不要复制第二份。
- 文章需要与页面 UI 共用逻辑时，从 `shared/` 导入；`shared/post-path.js` 目前同时被文章和路径预览使用。

## 3. 预览与检查

```bash
npm run dev       # 开发预览，包含草稿，热更新
npm run check     # 类型与 Astro 检查
npm run build     # 生产构建，排除草稿；有公开文章时生成搜索索引
npm run preview   # 预览生产构建产物
```

写作时用 `npm run dev`。开发模式包含草稿，首页会列出草稿，文章地址带 base 前缀：`http://127.0.0.1:4321/blog/posts/<文章 id>/`，例如 `src/blog/guides/preview.mdx` 对应 `http://127.0.0.1:4321/blog/posts/guides/preview/`。开发模式不生成搜索索引，搜索页会提示索引在构建后可用。

确认文章可以公开后，再用 `npm run build` + `npm run preview` 验收生产内容。生产构建排除所有草稿，预览地址为 `http://127.0.0.1:4321/blog/`；搜索依赖构建后的 Pagefind 索引，需要实际输入关键词、打开结果、刷新带 `q` 的链接。结束预览时关闭对应进程。

## 4. 发表

1. 作者确认标题、摘要、正文、事实与引用。
2. 由作者把 front matter 的 `draft` 明确改为 `false`；审稿通过不等于发表，AI 不代改这个字段。
3. 运行 `npm run check` 与 `npm run build`，确认首页、文章页、标签、RSS、sitemap 与搜索都出现该文章。
4. 由作者完成提交与远程发布；AI 不擅自 push 或部署。

全部文章为草稿是合法状态：构建会跳过 Pagefind，首页显示 `0 articles`，搜索页显示空态并停用查询。
