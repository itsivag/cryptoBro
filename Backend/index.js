const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  fetch("https://rest.coinapi.io/v1/exchangerate/BTC", {
    headers: {
      "X-CoinAPI-Key": "ADD YOUR KEY HERE",
    },
  })
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((error) => console.error("Error:", error));
});

app.listen(port, () => {
  console.log("listenting");
});
