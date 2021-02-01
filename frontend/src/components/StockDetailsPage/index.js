import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneStock } from '../../store/stock';
import LineGraph from '../LineGraph';
import { Spinner } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AddToList from './AddToList';
import * as sessionActions from '../../store/session';

function StockDetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const stock = useSelector((state) => state.stock.stock);
  const session = useSelector((state) => state.session);
  let stocks = new Set();
  if (session.userStocks) {
    session.userStocks.data.forEach((watchlist) => {
      watchlist.Stocks.forEach((stock) => {
        stocks.add(Number(stock.id));
      });
    });
  } else {
    stocks.add(null);
  }

  useEffect(() => {
    if (session.user) {
      dispatch(sessionActions.loadUserData(session.user));
    }
  }, []);

  useEffect(() => {
    // console.log('Geting new stock...');
    dispatch(getOneStock(id));
    // console.log('STOCK ', stock);
  }, [id]);

  if (stock) {
    return (
      <Container>
        <Row className="mt-5">
          <Col xs={9}>
            {/* <div>Stock Page with id of {id}</div>
            <div>{stock && stock.name}</div>
            <div>{stock && stock.symbol}</div>
            <div>{stock && stock.change}</div>
            <div>{stock && stock.changePercent}</div>
            <div>{stock && stock.price}</div>
            <div>{stock && stock.marketCap}</div> */}
            <LineGraph stock={stock} />
          </Col>
          <Col>
            <Card style={{ maxHeight: '300px' }}>
              <Card.Body>Transactions Coming Soon</Card.Body>
              <Card.Body></Card.Body>
            </Card>
            <Card>
              <AddToList isWatched={stocks.has(Number(id))} stockId={Number(id)} />
            </Card>
          </Col>
        </Row>
      </Container>
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
