import axios from 'axios';

const fetchData = async (rows, page) => {
  try {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${rows}&page=${page}&sparkline=true`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const infoCoin = async coinId => {
  try {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/bitcoin?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export { fetchData, infoCoin };
