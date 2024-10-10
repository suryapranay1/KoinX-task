1.Deployemnt Link: https://koinx-task-production.up.railway.app/api
Get Latest Cryptocurrency Stats
URL: /stats
Method: GET
Description: Retrieves the latest data for all tracked cryptocurrencies.
Example:
Response
200 OK
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
Get Standard Deviation of Cryptocurrency Prices
URL: /deviation
Method: GET
Description: Calculates the standard deviation of the price for each cryptocurrency based on the last 100 records.
Example
Response
200 OK
{
    "deviations": {
        "bitcoin": 4082.48,
        "matic-network": 0.15,
        "ethereum": 250.35
    }
}
To retrieve the latest stats for all cryptocurrencies, send a GET request to:

arduino
Copy code
GET https://koinx-task-production.up.railway.app/api/stats
Get Standard Deviation
To retrieve the standard deviation of prices for each cryptocurrency, send a GET request to:

arduino
Copy code
GET https://koinx-task-production.up.railway.app/api/deviation

