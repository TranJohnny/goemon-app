import './LineGraph.css';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import CustomTooltip from './customToolTip';
import { useState } from 'react';
import Odometer from 'react-odometerjs';

const getRandomData = (numPoints) => {
  const dataPoints = [];
  let num = Math.floor(Math.random() * 1000);
  for (let i = 0; i < numPoints; i++) {
    const change = [-1, 1];
    let percent =
      1 + (Math.floor(Math.random() * 26) / 100) * change[Math.floor(Math.random() * 2)];
    num *= percent;
    let obj = {
      name: 'x',
      value: num,
    };
    dataPoints.push(obj);
  }
  return dataPoints;
};
const data = getRandomData(30);

function LineGraph({ stock }) {
  const [price, setPrice] = useState(data[data.length - 1].value);

  async function handleHover(e) {
    if (e.activePayload && e.activePayload[0].payload.value !== price) {
      // console.log(e.activePayload[0].payload.value);
      setPrice(e.activePayload[0].payload.value);
      await setTimeout(() => {}, 250);
    }
  }

  function handleLeave(e) {
    setPrice(data[data.length - 1].value);
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
      <ResponsiveContainer width="40%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 20 }}
          onMouseMove={handleHover}
          onMouseLeave={handleLeave}
        >
          <Line type="monotone" dataKey="value" stroke="#0275d8" dot={false} />
          {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
          {/* <XAxis dataKey="name" /> */}
          {/* <YAxis /> */}
          <Tooltip
            content={<CustomTooltip />}
            isAnimationActive={false}
            offset={2}
            position={{ y: 20 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineGraph;
