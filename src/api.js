
const API_URL = 'https://api.jsonbin.io/v3/b/68d156ca43b1c97be94b93aa/latest?meta=false';

export async function fetchDogs() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
      const txt = await res.text().catch(() => '');
      throw new Error(`HTTP ${res.status} ${res.statusText} – ${txt.slice(0,180)}`);
    }
    const data = await res.json();
    // Säkerställ att vi alltid returnerar en ARRAY
    return Array.isArray(data) ? data : (data?.record ?? []);
  } catch (err) {
    // Hjälpsam logg i konsolen
    console.error('fetchDogs() error:', err);
    throw err;
  }
}