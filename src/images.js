export function resolveImg(url) {
   const base = import.meta.env.BASE_URL; // '/DoggyCare/' på Pages, '/' lokalt
  if (!url) return `${base}placeholder-dog.png`;
  if (url.startsWith('http://')) return url.replace('http://', 'https://');
  if (url.startsWith('https://')) return url;
  // Om det *inte* är en full URL, använd placeholder (ingen lokal fil krävs)
  return `${base}placeholder-dog.png`;
}