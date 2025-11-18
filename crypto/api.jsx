// src/api.js
const BASE = "https://api.coinpaprika.com/v1";

/**
 * Marr të dhënat e ticker për Bitcoin (BTC)
 * Kthen objektin JSON nga /tickers/btc-bitcoin
 */
export async function fetchBitcoinTicker() {
  const res = await fetch(`${BASE}/tickers/btc-bitcoin`);
  if (!res.ok) throw new Error(`Network error: ${res.status}`);
  return res.json();
}

/**
 * (Opsionale) Merr listën e ticker-ave (p.sh. top coins).
 * Nuk përdoret drejtpërdrejt në këtë shembull, por e lë për zgjerim.
 */
export async function fetchTickers(limit = 100) {
  const res = await fetch(`${BASE}/tickers?limit=${limit}`);
  if (!res.ok) throw new Error(`Network error: ${res.status}`);
  return res.json();
}
