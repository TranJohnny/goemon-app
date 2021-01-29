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
  let num = price;
  for (let i = 0; i < numPoints; i++) {
    const change = [-1.1, -0.8, -0.4, 0.4, 0.8, 1.2];
    let percent = 1 + (Math.floor(Math.random() * 3) / 100) * change[Math.floor(Math.random() * 6)];
    num = (num * percent).toFixed(2);
    let obj = {
      name: 'x',
      value: num,
    };
    dataPoints.push(obj);
  }
  if (price) {
    dataPoints[dataPoints.length - 1].value = price;
  }
  return dataPoints;
};

function LineGraph({ stock }) {
  const [timeline, setTimeline] = useState(7);
  const [data, setData] = useState([]);
  const [sourceData, setSourceData] = useState([]);
  const [price, setPrice] = useState(stock.price);
  const [range, setRange] = useState({ min: 0, max: stock.price });

  useEffect(() => {
    if (timeline * 6 > sourceData.length) {
      const remainingTimeline = timeline * 6 - sourceData.length;
      const dataToAdd = getRandomData(remainingTimeline, stock.price);
      const newData = [...dataToAdd, ...sourceData];
      const min = Math.min(...Object.values(newData).map((point) => point.value));
      const max = Math.max(...Object.values(newData).map((point) => point.value));
      setRange({ min, max });
      setSourceData(newData);
      setData(newData);
    } else {
      const dataToDisplay = sourceData.slice(sourceData.length - timeline * 6);
      const min = Math.min(...Object.values(dataToDisplay).map((point) => point.value));
      const max = Math.max(...Object.values(dataToDisplay).map((point) => point.value));
      setRange({ min, max });
      setData(dataToDisplay);
    }
  }, [timeline]);

  async function handleHover(e) {
    if (e.activePayload && e.activePayload[0].payload.value !== price) {
      setPrice(e.activePayload[0].payload.value);
      // await setTimeout(() => {}, 250);
    }
  }

  function handleLeave(e) {
    if (stock.price) {
      setPrice(stock.price);
    } else {
      setPrice(data[data.length - 1].value);
    }
  }

  function handleClick(num) {
    if (num < timeline) {
      const current = sourceData.slice(timeline - num);
      setData(current);
    }
    setTimeline(num);
  }

  return (
    <div>
      <div style={{ fontSize: '40px' }}>{stock.name}</div>
      <div style={{ fontSize: '40px' }}>
        <Odometer value={price} format="(,ddd).dd" duration="500" />
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
          <Line type="monotone" dataKey="value" stroke="#0275d8" dot={false} strokeWidth={1.5} />
          <YAxis hide={true} type="number" domain={[range.min, range.max]} />
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
      <div></div>
      <div className="d-flex justify-content-left justify-content-around">
        <button className="astext" onClick={() => handleClick(1)}>
          <span> 1D </span>
        </button>
        <button className="astext" onClick={() => handleClick(7)}>
          <span> 1W </span>
        </button>
        <button className="astext" onClick={() => handleClick(30)}>
          <span> 1M </span>
        </button>
        <button className="astext" onClick={() => handleClick(90)}>
          <span> 3M </span>
        </button>
        <button className="astext" onClick={() => handleClick(365)}>
          <span> 1Y </span>
        </button>
      </div>
    </div>
  );
}

export default LineGraph;
