const express = require("express");
const {
  getLatestData,
  getStandardDeviation,
} = require("../controllers/cryptoController");
const cryptoService = require("../services/cryptoService");

const router = express.Router();

// Route to fetch and store data for a specific coin
router.post("/fetch", async (req, res) => {
  const { coin } = req.body; // Expecting { "coin": "bitcoin" }
  if (!coin) {
    return res.status(400).json({ message: "Coin name is required" });
  }

  await cryptoService.fetchAndStoreData(coin);
  res.json({ message: `Fetched and stored data for ${coin}` });
});

// Existing routes

router.get("/stats", getLatestData);
router.get("/deviation", getStandardDeviation);

module.exports = router;
