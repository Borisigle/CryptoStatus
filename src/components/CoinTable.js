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
} from '@chakra-ui/react';
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti';
import { LineChart, Line, ResponsiveContainer , YAxis} from 'recharts';

function CoinTable({ coins }) {


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
    <Table variant="simple">
      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <Thead>
        <Tr>
          <Th>#</Th>
          <Th>Name</Th>
          <Th>24 Change</Th>
          <Th>Price</Th>
          <Th isNumeric>Price graph</Th>
        </Tr>
      </Thead>
      <Tbody>
        {coins.map(coin => (
          <Tr>
            <Td width="1.5rem" max-height="1.5px">
              {coin.market_cap_rank}{' '}
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
            <Td>
              {console.log(coin.sparkline_in_7d)}
              <LineChart width={200} height={50} data={coin.sparkline_in_7d.price.map((value, index) => {return {total : value}})}>
                <Line type="linear" dataKey="total" stroke="#8884d8" strokeWidth={2} dot={false} />
              </LineChart>
            </Td>
          </Tr>
        ))}
      </Tbody>
      <Tfoot></Tfoot>
    </Table>
  );
}

export default CoinTable;


//coin.sparkline_in_7d.price.map(value => {return {total : value}})}