import './LineGraph.css';
import {
  LineChart,
  Line,
  ReferenceLine,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import CustomTooltip from './customToolTip';
import { useState, useEffect } from 'react';
import Odometer from 'react-odometerjs';

const getRandomData = (numPoints, price) => {
  const dataPoints = [];
  let num = price || Math.floor(Math.random() * 1000);
  for (let i = 0; i < numPoints; i++) {
    const change = [-1, 1];
    let percent =
      1 + (Math.floor(Math.random() * 16) / 100) * change[Math.floor(Math.random() * 2)];
    num = (num * percent).toFixed(2);
    let obj = {
      name: 'x',
      value: num,
    };
    dataPoints.push(obj);
  }
  return dataPoints;
};

const mockData = getRandomData(42);

function LineGraph({ stock }) {
  const [timeline, setTimeline] = useState(7);
  const [data, setData] = useState(mockData);
  const [price, setPrice] = useState(stock.price);
  // const [price, setPrice] = useState(data ? data[data.length - 1].value : 0);

  useEffect(() => {
    const array = getRandomData(timeline * 6, stock.price);
    console.log(stock.name, 'before', array);
    if (stock.price) {
      array[array.length - 1].value = stock.price;
    }
    console.log(stock.name, 'after', array);
    setData(array);
    setPrice(array[array.length - 1].value);
  }, []);

  async function handleHover(e) {
    if (e.activePayload && e.activePayload[0].payload.value !== price) {
      // console.log(e.activePayload[0].payload.value);
      setPrice(e.activePayload[0].payload.value);
      await setTimeout(() => {}, 250);
    }
  }

  function handleLeave(e) {
    if (stock.price) {
      setPrice(stock.price);
    } else {
      setPrice(data[data.length - 1].value);
    }
  }

  return (
    <div>
      <div style={{ fontSize: '40px' }}>{stock.name}</div>
      <div style={{ fontSize: '40px' }}>
        <Odometer value={price} format="(,ddd).dd" />
      </div>
      {stock.changePercent && (
        <div>
          ${stock.change.toFixed(2)} ({(stock.changePercent * 100).toFixed(2)}%){' '}
          <span style={{ color: '#B0B0B0' }}>Past Week</span>
        </div>
      )}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 20 }}
          onMouseMove={handleHover}
          onMouseLeave={handleLeave}
        >
          <Line type="monotone" dataKey="value" stroke="#0275d8" dot={false} />
          <YAxis hide={true} type="number" domain={['dataMin', 'dataMax']} />
          <XAxis hide={true} tickLine={false} dataKey="label" />
          {stock.price && (
            <ReferenceLine y={stock.price} label="" stroke="#0275d8" strokeDasharray="2 2" />
          )}
          <Tooltip
            content={<CustomTooltip />}
            isAnimationActive={false}
            offset={2}
            position={{ y: 20 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="d-flex justify-content-left justify-content-around">
        <button className="astext">
          <span> 1D </span>
        </button>
        <button className="astext">
          <span> 1W </span>
        </button>
        <button className="astext">
          <span> 1M </span>
        </button>
        <button className="astext">
          <span> 3M </span>
        </button>
        <button className="astext">
          <span> 1Y </span>
        </button>
      </div>
    </div>
  );
}

export default LineGraph;
