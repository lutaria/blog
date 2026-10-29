import type { APIContext } from 'astro';
import rss from '@astrojs/rss';
import { posts } from '../lib/posts';
import { SITE_DESCRIPTION, SITE_NAME } from '../lib/site';
import { url } from '../lib/url';

export async function GET(context: APIContext) {
  return rss({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    site: new URL(import.meta.env.BASE_URL, context.site!),
    items: (await posts()).map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: url(`posts/${post.id}/`),
    })),
    customData: '<language>zh-CN</language>',
  });
}
