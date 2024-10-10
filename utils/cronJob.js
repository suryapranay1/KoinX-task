const cron = require("node-cron");
const cryptoService = require("../services/cryptoService");

const scheduleCryptoFetch = () => {
  cron.schedule("0 */2 * * *", () => {
    console.log("Running scheduled task to fetch cryptocurrency data...");
    cryptoService.fetchCryptoData();
  });
};

module.exports = { scheduleCryptoFetch };
