const axios = require("axios");
const Crypto = require("../models/cryptoModel");

// Function to fetch and store data for a specific coin
const fetchAndStoreData = async (coin) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`
    );
    const data = response.data[coin];
    const newCrypto = new Crypto({
      coin,
      price: data.usd,
      marketCap: data.usd_market_cap,
      change24h: data.usd_24h_change,
    });
    await newCrypto.save();
    console.log(`Fetched and saved data for ${coin}`);
  } catch (error) {
    console.error(`Error fetching data for ${coin}:`, error);
  }
};

// Function to fetch and store data for multiple coins
const fetchCryptoData = async () => {
  const coins = ["bitcoin", "matic-network", "ethereum"];
  for (const coin of coins) {
    await fetchAndStoreData(coin);
  }
};

module.exports = { fetchCryptoData, fetchAndStoreData };
