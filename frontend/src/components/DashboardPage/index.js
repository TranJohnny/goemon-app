import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Example from '../Sidebar';
import { Spinner } from 'react-bootstrap';
import NewsBlock from '../NewsBlock';

import LineGraph from '../LineGraph';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';

function DashboardPage() {
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session);
  const sessionUser = session.user;

  const stock = { name: null, price: 7842.42, change: 51.42, changePercent: 0.0112 };

  useEffect(() => {
    if (sessionUser) {
      dispatch(sessionActions.loadUserData(sessionUser));
    }
    // if (!session.userStocks.data.length) {
    //   dispatch(sessionActions.createWatchlist(sessionUser));
    // }
  }, []);

  if (!sessionUser) {
    return <Redirect to="/" />;
  }

  if (stock) {
    return (
      <Container>
        <Row className="mt-5">
          <Col md={8}>
            <LineGraph stock={stock} />
            <h2 className="mt-5">News</h2>
            <NewsBlock />
          </Col>
          <Col>
            <Example />
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

export default DashboardPage;
