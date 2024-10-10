## Clone The Respository
git clone https://github.com/suryapranay1/KoinX-task.git
cd KoinX-task

## Install the node_modules
npm i 

## Run the Project
npm start

## Tech Stack used
Server: Node, Express

 Database: Mongodb

API: CoinGecko

## Get Latest Cryptocurrency Stats
## URL: /stats
Method: GET
Description: Retrieves the latest data for all tracked cryptocurrencies.

{
    "bitcoin": {
        "price": 40000,
        "marketCap": 800000000,
        "change24h": 3.4
    },
    "matic-network": {
        "price": 1.50,
        "marketCap": 10000000000,
        "change24h": -2.1
    },
    "ethereum": {
        "price": 3000,
        "marketCap": 350000000000,
        "change24h": 1.5
    }
}
## Get Standard Deviation of Cryptocurrency Prices
## URL: /deviation
Method: GET
Description: Calculates the standard deviation of the price for each cryptocurrency based on the last 100 records.

200 OK
{
    "deviations": {
        "bitcoin": 4082.48,
        "matic-network": 0.15,
        "ethereum": 250.35
    }
    
}
## After starting the server, type the following

http://localhost:3000/api/stats to fetch the etch the current price in USD, market cap in USD and 24 hour change of 3 cryptocurrencies.

## To fetch standard deviation
http://localhost:3000/api/deviation?{coin}
## example
http://localhost:3000/api/deviation?coin=bitcoin




