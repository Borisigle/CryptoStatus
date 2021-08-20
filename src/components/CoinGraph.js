import React, { useState, useEffect } from 'react';
import { infoCoin } from './Functions';
import { Redirect } from 'react-router-dom';

function CoinGraph({
  match: {
    params: { id },
  },
}) {
  const [coinToGraph, setCoinToGraph] = useState('');
  useEffect(() => {
    infoCoin().then(data => setCoinToGraph(data));
  }, []);

  const goodId = id;

  if (!goodId) {
    return <Redirect to={{ pathname: '/404' }} />;
  }

  return <h1 style={{ color: '#E5E5E5' }}>{coinToGraph.id} </h1>;
}

export default CoinGraph;
