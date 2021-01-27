import { useParams } from 'react-router-dom';

function StockDetailsPage() {
  const { id } = useParams();

  return (
    <>
      <div>Stock Page with id of {id}</div>
    </>
  );
}

export default StockDetailsPage;
