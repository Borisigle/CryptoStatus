import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { fetchCandleData } from '../services';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

function CoinGraph({
  match: {
    params: { id },
  },
  coinId,
}) {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetchCandleData(id).then(response =>
  //     setData(
  //       response.map(candle => {
  //         return { x: new Date(candle[0]), y: candle.slice(1) };
  //       })
  //     )
  //   );
  // }, []);

  // const dataSet = {
  //   series: [{ data: data }],
  //   options: {
  //     chart: {
  //       type: 'candlestick',
  //       height: 350,
  //     },
  //     title: {
  //       text: 'CandleStick Chart',
  //       align: 'left',
  //     },
  //     xaxis: {
  //       type: 'datetime',
  //     },
  //     yaxis: {
  //       tooltip: {
  //         enabled: true,
  //       },
  //     },
  //   },
  // };
  console.log(id);

  return (
    <TradingViewWidget theme={Themes.DARK} symbol={`${id.toUpperCase()}USD`} />
  );
}

export default CoinGraph;
