import axios from 'axios';
import { RiArrowRightSFill, RiArrowLeftSFill } from 'react-icons/ri';

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

export const trendPrice = percentage => {
  if (percentage >= 0) {
    return (
      <div className="table_coin_info" style={{ color: '#32E25A' }}>
        <TiArrowSortedUp />
        <span>{percentage.toFixed(2)}%</span>
      </div>
    );
  } else {
    return (
      <div className="table_coin_info" style={{ color: '#FF3535' }}>
        <TiArrowSortedDown />
        <span>{percentage.toFixed(2)}%</span>
      </div>
    );
  }
};
