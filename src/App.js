import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { fetchData } from './services';
import Table from './components/CoinTable';
import './App.css';
import { generalTheme } from './components/styles/generalTheme';
import CoinTable from './components/CoinTable';
import CoinGraph from './components/CoinGraph';
import PageNotFound from './components/PageNotFound';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(20);

  useEffect(() => {
    fetchData(rows, page).then(coins => setCoins(coins));
  }, [rows, page]);

  return (
    <Router>
      <ChakraProvider theme={generalTheme}>
        <Route
          exact
          path="/"
          render={props => (
            <CoinTable
              {...props}
              coins={coins}
              page={page}
              setPage={setPage}
              setRows={setRows}
            />
          )}
        />
        <Route
          path="/info/:id"
          render={props => <CoinGraph {...props} coins={coins} />}
        />
        <Route path="/404" render={props => <PageNotFound {...props} />} />
      </ChakraProvider>
    </Router>
  );
}

export default App;
