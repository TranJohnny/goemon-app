import './StockRow.css';
import stock1 from '../stock1.svg';
import stock2 from '../stock2.svg';

function StockRow({ stock }) {
  const percentage = Math.random() * 10;
  const volume = '500';
  const price = '$200';
  const charts = [stock1, stock2];
  const rand = Math.floor(Math.random() * 2);
  const miniChart = charts[rand];

  const handleClick = () => {};
  return (
    <div className="stock-row" onClick={handleClick}>
      <div className="stock-row__intro">
        <h1>{stock.ticker}</h1>
        <p>{volume + ' shares'}</p>
      </div>
      <div className="stock-row__chart">
        <img src={miniChart} height={16} />
      </div>
      <div className="stock-row__numbers">
        <p className="stock-row__price">{price}</p>
        <p className="stock-row__percentage"> +{Number(percentage).toFixed(2)}%</p>
      </div>
    </div>
  );
}

export default StockRow;
