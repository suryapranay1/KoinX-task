const Crypto = require("../models/cryptoModel");

const getLatestData = async (req, res) => {
  try {
    const data = await Crypto.find().sort({ timestamp: -1 });
    const latestData = {};

    // Group the latest data by coin
    data.forEach((record) => {
      if (
        !latestData[record.coin] ||
        record.timestamp > latestData[record.coin].timestamp
      ) {
        latestData[record.coin] = {
          price: record.price,
          marketCap: record.marketCap,
          change24h: record.change24h,
        };
      }
    });

    res.json(latestData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStandardDeviation = async (req, res) => {
  const { coin } = req.query;
  try {
    const records = await Crypto.find({ coin })
      .sort({ timestamp: -1 })
      .limit(100);
    const prices = records.map((record) => record.price);
    const mean = prices.reduce((a, b) => a + b, 0) / prices.length;
    const variance =
      prices.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / prices.length;
    const stddev = Math.sqrt(variance);
    res.json({ deviation: stddev });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getLatestData, getStandardDeviation };
