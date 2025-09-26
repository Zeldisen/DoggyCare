export function resolveImg(src) {
  // fallback om inget finns
  const fallback = `${import.meta.env.BASE_URL}placeholder-dog.png`;

  if (!src) return fallback;
  // redan absolut/extern
  if (/^(https?:)?\/\//.test(src)) return src;
  if (src.startsWith('data:') || src.startsWith('blob:')) return src;

  // absolut sökväg från public/ eller med base
  if (src.startsWith('/')) {
    return `${import.meta.env.BASE_URL}${src.replace(/^\//, '')}`;
  }

  // relativ fil i ditt repo (t.ex. src/components/images/...)
  try {
    return new URL(`../images/${src}`, import.meta.url).href; // justera mapp om behövs
  } catch {
    return fallback;
  }
}