import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneStock } from '../../store/stock';
import LineGraph from '../LineGraph';
import { Spinner } from 'react-bootstrap';

function StockDetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const stock = useSelector((state) => state.stock.stock);

  useEffect(() => {
    console.log('useEffect ran');
    dispatch(getOneStock(id));
    console.log('STOCK ', stock);
  }, [id]);

  if (stock) {
    return (
      <>
        <div>Stock Page with id of {id}</div>
        <div>{stock && stock.name}</div>
        <div>{stock && stock.symbol}</div>
        <div>{stock && stock.change}</div>
        <div>{stock && stock.changePercent}</div>
        <div>{stock && stock.price}</div>
        <div>{stock && stock.marketCap}</div>
        <LineGraph stock={stock} />
      </>
    );
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <Spinner animation="border" role="status" variant="primary">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}

export default StockDetailsPage;
