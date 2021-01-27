import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneStock } from '../../store/stock';

function StockDetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const stock = useSelector((state) => state.stock);

  useEffect(() => {
    dispatch(getOneStock(id));
    console.log('STOCK ', stock);
  }, [dispatch]);

  return (
    <>
      <div>Stock Page with id of {id}</div>
      <div>{stock && stock.name}</div>
      <div>{stock && stock.ticker}</div>
    </>
  );
}

export default StockDetailsPage;
