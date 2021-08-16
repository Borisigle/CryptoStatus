import React, {useState, useEffect} from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

function CoinGraph({coinGraph}) {

  const [graph, setGraph] = useState('')
  console.log(coinGraph)
  
  useEffect(() => {
    setGraph(coinGraph[0].sparklineIn7.map(value => {return {total: value}}))
    console.log(graph)
  }, [coinGraph])

  return (
    <>
    <p>{coinGraph[0].coin}</p>
    <LineChart width={300} height={100} data={graph}>
      <Line type="monotone" dataKey="total" stroke="#8884d8" strokeWidth={2} />
    </LineChart>
    </>
  );
}

export default CoinGraph;
