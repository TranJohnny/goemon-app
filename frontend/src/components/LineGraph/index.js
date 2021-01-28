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

function LineGraph() {
  const [price, setPrice] = useState(data[data.length - 1].value);

  function handleHover(e) {
    if (e.activePayload) {
      console.log(e.activePayload[0].payload.value);
      setPrice(e.activePayload[0].payload.value);
    }
  }

  function handleLeave(e) {
    setPrice(data[data.length - 1].value);
  }
  return (
    <>
      <div style={{ fontSize: '50px' }}>
        <Odometer value={price} format="(,ddd).dd" />
      </div>
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
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default LineGraph;
