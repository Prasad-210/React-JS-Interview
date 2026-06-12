import React from "react";
import { useState, useEffect } from "react";
import "./CryptoDashboard.css";

const CryptoDashboard = () => {
  const API_URL = "/api/coins";
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        console.log(data);
        setCoins(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

  return (
    <div className="crypto-container">
      <div className="crypto-header">
        <h1>🚀 Crypto Dashboard</h1>
      </div>

      {loading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading crypto data...</p>
        </div>
      )}

      {error && (
        <div className="error-container">
          <p>❌ Error: {error}</p>
        </div>
      )}

      {!loading && !error && coins.length > 0 && (
        <div className="coins-grid">
          {coins.map((coin) => (
            <div className="coin-card" key={coin.id}>
              <div className="coin-header">
                <div className="coin-header-top">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="coin-image"
                  />
                  <div className="coin-name-section">
                    <h2>{coin.name}</h2>
                    <p className="price">${coin.price.toLocaleString()}</p>
                  </div>
                </div>

                <div className="coin-info">
                  <div className="info-item">
                    <label>Market Cap</label>
                    <value>${(coin.marketCap / 1e9).toFixed(2)}B</value>
                  </div>
                  <div className="info-item">
                    <label>24h Change</label>
                    <value
                      className={`change ${
                        coin.change24h >= 0 ? "positive" : "negative"
                      }`}
                    >
                      {coin.change24h >= 0 ? "📈" : "📉"}{" "}
                      {coin.change24h.toFixed(2)}%
                    </value>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CryptoDashboard;
