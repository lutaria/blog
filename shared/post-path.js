// Single shared source for the article path used by the article and page UI.
const SAFE_SLUG = /^[a-z0-9-]+$/;

export function postPath(slug, base = '/') {
  if (!SAFE_SLUG.test(slug)) {
    throw new Error(`Unsafe article slug: ${slug}`);
  }
  const prefix = base === '/' ? '' : `/${base.replace(/^\/+|\/+$/g, '')}`;
  return `${prefix}/posts/${slug}/`;
}
