import fetch from "node-fetch";

const CryptoService = () => {
  fetch("https://rest.coinapi.io/v1/exchangerate/BTC/USD", {
    headers: {
      "X-CoinAPI-Key": "AF5CBDEA-437A-48B2-B087-E1D835DE196D", // Replace with your API key
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));

  return <div>CryptoService</div>;
};

export default CryptoService;
