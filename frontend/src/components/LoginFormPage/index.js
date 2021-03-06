import './LoginForm.css';

import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/dashboard" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch((res) => {
      if (res.data && res.data.errors) setErrors(res.data.errors);
    });
  };

  function demoLogin() {
    // setCredential('demo@user.io');
    // setPassword('password');
    return dispatch(sessionActions.login({ credential: 'demo@user.io', password: 'password' }));
  }

  return (
    <Container style={{ maxWidth: '100%', margin: '0', padding: '0' }}>
      <Row style={{ flexWrap: 'none' }}>
        <Col className="img-col" style={{ maxHeight: '100vh' }}>
          <Image
            src="images/login-splash.jpg"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              overflow: 'hidden',
            }}
          />
        </Col>
        <Col>
          <div style={{ margin: '30% 5%', width: '55%' }}>
            <Form onSubmit={handleSubmit}>
              <h3>Welcome to Goemon</h3>
              <div>
                {errors.map((error, idx) => (
                  <Alert variant="danger">
                    <p key={idx}>{error}</p>
                  </Alert>
                ))}
              </div>
              <Form.Group>
                <Form.Label>Email or Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email or username"
                  value={credential}
                  onChange={(e) => setCredential(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Row className="d-flex justify-content-between">
                <Col sm={4}>
                  <Button variant="primary" type="submit" size="md" style={{ minWidth: '78px' }}>
                    Log In
                  </Button>
                </Col>
                <Col sm={5}>
                  <Button as="p" className="mt-2" size="sm" onClick={demoLogin}>
                    {' '}
                    Demo Login
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginFormPage;
