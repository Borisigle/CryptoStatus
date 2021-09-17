import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image,
  Text,
  Select,
} from '@chakra-ui/react';
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti';
import { RiArrowRightSFill, RiArrowLeftSFill } from 'react-icons/ri';
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function CoinTable({ coins, page, setPage, setRows, setCoinId }) {
  let history = useHistory();

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

  const handleOnClick = symbol => {
    history.push(`/info/${symbol}`);
  };

  return (
    <>
      <h1>CoinStatus</h1>
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
                onClick={() => handleOnClick(coin.symbol)}
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
            onClick={() => setPage(page - 1)}
          />
          <RiArrowRightSFill
            className="pagination_button"
            onClick={() => setPage(page + 1)}
          />
        </div>
      </div>
    </>
  );
}

export default CoinTable;
