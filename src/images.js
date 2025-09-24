export function resolveImg(url) {
  const base = import.meta.env.BASE_URL; // '/DoggyCare/' på Pages, '/' lokalt
  if (!url) return `${base}placeholder-dog.png`;

  if (url.startsWith('http://')) return url.replace('http://', 'https://'); // mixed-content-fix
  if (url.startsWith('https://')) return url; // redan full URL

  // Annars: tolka som filnamn i public/images
  return `${base}images/${url}`;
}