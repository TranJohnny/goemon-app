import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Example from '../Sidebar';
import { Spinner } from 'react-bootstrap';

import LineGraph from '../LineGraph';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';

function DashboardPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const stock = { name: null, price: 7842.42, change: 51.42, changePercent: 0.0112 };

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
        <Row className="mt-5">
          <Col md={8}>
            <LineGraph stock={stock} />
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
