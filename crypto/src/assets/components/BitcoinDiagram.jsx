// src/components/BitcoinDiagram.jsx
import React from "react";
import BitcoinCoin from "./BitcoinCoin";

function Block({ label }) {
  return (
    <div className="block">
      <div className="block-rect" />
      <div className="block-label">{label}</div>
    </div>
  );
}

export default function BitcoinDiagram({ coins = 5, price, change24h }) {
  const coinElements = Array.from({ length: coins }).map((_, i) => (
    <div key={i} className="coin-stack-item" style={{ transform: `translateY(${-i * 10}px) scale(${1 - i * 0.03})` }}>
      <BitcoinCoin size={70} shine={i === 0} border />
    </div>
  ));

  const changeClass = change24h == null ? "" : (change24h >= 0 ? "positive" : "negative");

  return (
    <div className="diagram-root">
      <div className="left-column">
        <div className="coin-stack" aria-hidden>
          {coinElements}
        </div>
        <div className="caption">
          {price == null ? "—" : (
            <>
              <div className="price">${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              <div className={`change ${changeClass}`}>{change24h != null ? `${change24h.toFixed(2)}% (24h)` : ""}</div>
            </>
          )}
        </div>
      </div>

      <div className="middle-column">
        <div className="arrow">⟶</div>
      </div>

      <div className="right-column">
        <div className="blockchain">
          <Block label="Bllok #1" />
          <div className="chain-connector" />
          <Block label="Bllok #2" />
          <div className="chain-connector" />
          <Block label="Bllok #3" />
        </div>
        <div className="caption">Rrjedha e blloqeve</div>
      </div>
    </div>
  );
}
