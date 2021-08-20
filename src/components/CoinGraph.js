import React, { useState, useEffect } from 'react';
import { infoCoin } from './Functions';
import { Redirect } from 'react-router-dom';

function CoinGraph({
  match: {
    params: { id },
  },
  coinId,
}) {
  const [coinToGraph, setCoinToGraph] = useState('');
  useEffect(() => {
    infoCoin(coinId).then(data => setCoinToGraph(data));
  }, [coinId]);

  const goodId = id;

  if (goodId !== id) {
    return <Redirect to={{ pathname: '/404' }} />;
  }

  return <h1 style={{ color: '#E5E5E5' }}>{coinToGraph.id} </h1>;
}

export default CoinGraph;
