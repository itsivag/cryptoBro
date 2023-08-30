const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  fetch("https://rest.coinapi.io/v1/exchangerate/BTC", {
    headers: {
      "X-CoinAPI-Key": "AF5CBDEA-437A-48B2-B087-E1D835DE196D",
    },
  })
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((error) => console.error("Error:", error));
});

app.listen(port, () => {
  console.log("listenting");
});
