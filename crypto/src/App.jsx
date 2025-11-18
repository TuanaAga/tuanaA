// src/App.jsx
import React, { useEffect, useState, useRef } from "react";
import { fetchBitcoinTicker } from "./api";
import BitcoinDiagram from "./components/BitcoinDiagram";
import "./styles.css";

export default function App() {
  const [btc, setBtc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const intervalRef = useRef(null);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchBitcoinTicker();
      // data sample fields: id, name, symbol, rank, circulating_supply, total_supply, quotes: { USD: { price, percent_change_24h } }
      setBtc(data);
    } catch (err) {
      setError(err.message || "Gabim në marrjen e të dhënave");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();

    // rifreskojmë çdo 30s
    intervalRef.current = setInterval(load, 30000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="app-root">
      <header>
        <h1>Skemë Bitcoin — Të dhëna Live</h1>
        <p className="subtitle">Të dhëna nga CoinPaprika API (<code>tickers/btc-bitcoin</code>)</p>
      </header>

      <main>
        {loading && <div className="status">Duke ngarkuar çmimin...</div>}
        {error && <div className="status error">Gabim: {error}</div>}

        <BitcoinDiagram
          coins={6}
          price={btc?.quotes?.USD?.price ?? null}
          change24h={btc?.quotes?.USD?.percent_change_24h ?? null}
        />

        <section className="meta">
          <div><strong>Simbol:</strong> {btc?.symbol ?? "—"}</div>
          <div><strong>Renditja:</strong> {btc?.rank ?? "—"}</div>
          <div><strong>Kapitalizim:</strong> {btc?.quotes?.USD?.market_cap ? `$${Number(btc.quotes.USD.market_cap).toLocaleString()}` : "—"}</div>
          <div><strong>Përditësuar:</strong> {btc?.last_updated ? new Date(btc.last_updated).toLocaleString() : "—"}</div>
        </section>

        <footer className="footer">
          <small>Projekt demonstrues • Të dhënat sjellë nga CoinPaprika</small>
        </footer>
      </main>
    </div>
  );
}

