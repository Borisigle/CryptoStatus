import React, { useState, useEffect } from 'react';
import { fetchCoinData } from '../services';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import {
  Text,
  Box,
  Image,
  Flex,
  HStack,
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
          <HStack justifyContent="center">
            <Image boxSize="2rem" src={coin.image.thumb} />
            <Text py={4} color="white">
              {coin.name} ({coin.symbol.toUpperCase()}) Price Chart
            </Text>
            <Text
              h="17px"
              w="20px"
              bg="orange"
              fontSize="xs"
              borderRadius="2px"
            >
              #{coin.market_cap_rank}
            </Text>
          </HStack>
          <HStack>
            <Text color="white" fontSize="2xl">
              ${coin.market_data.current_price.usd}
            </Text>
            <Text>{coin.market_data.price_change_percentage_24h} </Text>
          </HStack>

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
