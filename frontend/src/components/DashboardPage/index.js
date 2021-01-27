import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';

function DashboardPage() {
  // const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  if (!sessionUser) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Row>
        <Col>Dashboard</Col>
      </Row>
    </Container>
  );
}

export default DashboardPage;
