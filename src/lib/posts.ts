import { getCollection } from 'astro:content';

// Drafts are visible while writing with `npm run dev` so authors can open
// their own article. Production builds (`npm run build`) exclude them.
const includeDrafts = import.meta.env.DEV;

export async function posts() {
  const entries = await getCollection('blog', ({ data }) => includeDrafts || !data.draft);
  return entries.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
