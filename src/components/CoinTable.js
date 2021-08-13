import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Image,
  Text,
  Select,
} from '@chakra-ui/react';
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti';
import fetchData from './fetchData';
import { RiArrowRightSFill, RiArrowLeftSFill } from 'react-icons/ri';

function CoinTable({ coins, percentage, page, setPage, rows, setRows }) {
  const handleRow = () => {
    console.log('hola');
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const trendPrice = percentage => {
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

  return (
    <div className="table_coins_container">
      <Table variant="simple" size="sm" colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Name</Th>
            <Th>24 Change</Th>
            <Th>Price</Th>
            <Th>Price graph</Th>
          </Tr>
        </Thead>
        <Tbody>
          {coins.map(coin => (
            <Tr
              cursor="pointer"
              _hover={{
                bg: '#0D0D0D',
                opacity: '100%',
                transition: 'background-color .3s ease-out',
              }}
            >
              <Td width="1.5rem" max-height="1.5px">
                {coin.market_cap_rank}
              </Td>
              <Td>
                <div className="table_coin_info">
                  <Image boxSize="1rem" src={coin.image} />{' '}
                  <Text>{coin.name}</Text>
                  <Text color="gray">{coin.symbol.toUpperCase()}</Text>
                </div>
              </Td>
              <Td>{trendPrice(coin.price_change_percentage_24h)}</Td>
              <Td>${coin.current_price} </Td>
              <Td></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <div className="container_pagination_buttons">
        <p>Rows per page</p>
        <Select
          onChange={e => setRows(e.target.value)}
          size="sm"
          variant="flushed"
          width="3.4rem"
          borderBottom="none"
          marginTop="2.5px"
          marginLeft=".5rem"
        >
          <option value="20">20</option>
          <option value="100">100</option>
          <option value="300">300</option>
        </Select>
        <RiArrowLeftSFill
          className="pagination_button"
          onClick={() => prevPage()}
        />
        <RiArrowRightSFill
          className="pagination_button"
          onClick={() => nextPage()}
        />
      </div>
    </div>
  );
}

export default CoinTable;

//coin.sparkline_in_7d.price.map(value => {return {total : value}})}
