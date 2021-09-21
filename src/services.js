import axios from 'axios';

export const fetchData = async (rows, page) => {
  try {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${rows}&page=${page}&sparkline=true`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCoinData = async id => {
  try {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}?tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
