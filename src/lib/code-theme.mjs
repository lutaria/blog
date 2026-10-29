import githubLightHighContrast from 'shiki/themes/github-light-high-contrast.mjs';

// The bundled high-contrast light theme keeps every syntax color readable on a
// warm light panel, except comments (#66707b, 4.34:1 on #f0eee6). Reuse the
// muted ink from the site palette so comments clear 4.5:1 as well.
const commentColor = '#5e5d59';
const isCommentScope = (scope) =>
  typeof scope === 'string' && scope.includes('comment');

const tokenColors = githubLightHighContrast.tokenColors.map((token) => {
  const scopes = Array.isArray(token.scope) ? token.scope : [token.scope];
  if (!scopes.some(isCommentScope)) return token;
  return {
    ...token,
    settings: { ...token.settings, foreground: commentColor },
  };
});

export default {
  ...githubLightHighContrast,
  name: 'source-notes-light',
  tokenColors,
};
