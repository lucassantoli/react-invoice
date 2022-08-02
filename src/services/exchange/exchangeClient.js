import axios from "axios";

const exchangeClient = axios.create({
  baseURL: `https://api.fastforex.io`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

exchangeClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Error when fetching data. Code: " + error.response.status);
    return Promise.reject(error);
  }
);

const fetchOne = (from, to) => {
  return exchangeClient.get(
    `/fetch-one?from=${from}&to=${to}&api_key=${process.env.REACT_APP_EXCHANGE_API_KEY}`
  );
};

const exports = { fetchOne };
export default exports;
