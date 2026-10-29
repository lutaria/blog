# AGENTS

- 人类作者决定论点、论证、正文与发表；AI 只做获授权的画图、代码辅助、校对或润色。
- AI 不代写可发布正文，不捏造事实、经历、引用或数据。
- 省略 `draft` 即为草稿；`npm run dev` 仅在开发模式包含草稿，`npm run build` 的生产内容排除草稿。
- 发表由作者确认后显式写 `draft: false`；审稿通过不等于发表，AI 不代改这个字段。
- 中文标题、摘要、正文与目录条目标注 `lang="zh-CN"`；英文界面、日期与按钮保持 `en`。
- 文章从 `shared/` 直接导入共享代码或流程图，不在文章内复制。
- 修改后运行 `npm run check` 与 `npm run build`，使用 Node 24。
- 审稿按 `docs/reviewing.md`，写作步骤见 `docs/writing.md`。
- 不创建远程仓库、不 push、不部署，除非用户明确授权。
