import { spawnSync } from 'node:child_process';
import { existsSync, readdirSync } from 'node:fs';

const run = (command, args) => {
  const result = spawnSync(command, args, { stdio: 'inherit', shell: false });
  if (result.error) {
    console.error(result.error.message);
    process.exit(1);
  }
  if (result.status !== 0) process.exit(result.status ?? 1);
};

run('astro', ['build']);

// Pagefind refuses to write an index when there are no pages to index. Keep the
// zero-article build (for example, while every post is a draft) green instead.
const postsDir = 'dist/posts';
const hasPublishedArticle =
  existsSync(postsDir) &&
  readdirSync(postsDir, { recursive: true, withFileTypes: true }).some(
    (entry) => entry.isFile() && entry.name === 'index.html',
  );

if (!hasPublishedArticle) {
  console.log('No published articles: skipping Pagefind index generation.');
  process.exit(0);
}

run('pagefind', [
  '--site',
  'dist',
  '--force-language',
  'zh',
  '--root-selector',
  '[data-pagefind-body]',
]);
