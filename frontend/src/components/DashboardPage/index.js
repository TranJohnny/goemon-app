import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Spinner } from 'react-bootstrap';

import LineGraph from '../LineGraph';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';

function DashboardPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const stock = { name: null, price: 500 };

  useEffect(() => {
    if (sessionUser) {
      console.log('DASHBOARD', sessionUser);
      dispatch(sessionActions.loadUserData(sessionUser));
    }
  }, []);

  if (!sessionUser) {
    return <Redirect to="/" />;
  }

  if (stock) {
    return (
      <Container>
        <Row>
          <Col xs={9}>
            {/* <div>Stock Page with id of {id}</div> */}
            <div>{stock && stock.name}</div>
            <div>{stock && stock.symbol}</div>
            <div>{stock && stock.change}</div>
            <div>{stock && stock.changePercent}</div>
            <div>{stock && stock.price}</div>
            <div>{stock && stock.marketCap}</div>
            <LineGraph stock={stock} />
          </Col>
          <Col>Sidebar</Col>
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

export default DashboardPage;
