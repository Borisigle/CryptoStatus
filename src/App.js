import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import fetchData from './components/fetchData'
import Table from './components/CoinTable';
import './App.css'

function App() {
  const [coins, setCoins] = useState([]);
  const [filters, setFilters] = useState({})

  useEffect(() => {
    fetchData(filters).then(coins => setCoins(coins))
  }, [filters]);

  return (
    <ChakraProvider theme={theme}>
      <Table coins={coins} />
    </ChakraProvider>
  );
}

export default App;
