import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneStock } from '../../store/stock';

function StockDetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const stock = useSelector((state) => state.stock);

  useEffect(() => {
    console.log('use effect ran');
    dispatch(getOneStock(id));
  }, [dispatch]);

  return (
    <>
      <div>Stock Page with id of {id}</div>
    </>
  );
}

export default StockDetailsPage;
