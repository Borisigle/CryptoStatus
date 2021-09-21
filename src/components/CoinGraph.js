import React, { useState, useEffect } from 'react';
import { fetchCoinData } from '../services';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import {
  Text,
  Box,
  Flex,
  VStack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';

function CoinGraph({
  match: {
    params: { id },
  },
  coins,
}) {
  const [coin, setCoin] = useState();

  useEffect(() => {
    fetchCoinData(id).then(coin => setCoin(coin));
  }, []);

  console.log(coin);
  return (
    <>
      {coin !== undefined && (
        <Box>
          <Text py={4} color="white">
            {coin.name} ({coin.symbol.toUpperCase()}) Price Chart
          </Text>

          <TradingViewWidget
            theme={Themes.DARK}
            symbol={`${coin.symbol.toUpperCase()}USD`}
            width="60rem"
            height="35rem"
          />
        </Box>
      )}
    </>
  );
}

export default CoinGraph;
