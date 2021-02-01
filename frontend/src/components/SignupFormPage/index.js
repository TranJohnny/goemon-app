import './SignupForm.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) {
    return <Redirect to="/dashboard" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      setPassword('');
      setConfirmPassword('');
      return dispatch(sessionActions.signup({ firstName, lastName, email, username, password }))
        .then((res) => dispatch(sessionActions.createWatchlist(res)))
        .catch((res) => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        });
    }
    setPassword('');
    setConfirmPassword('');
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <Container style={{ maxWidth: '100%', margin: '0', padding: '0' }}>
      <Row style={{ flexWrap: 'none' }}>
        <Col style={{ maxHeight: '100vh' }}>
          <div style={{ margin: '10% 5%', width: '55%' }}>
            <h3>Make your money move</h3>
            <p>Goemon lets you invest in companies you love!</p>
            <br></br>
            <Form onSubmit={handleSubmit}>
              <div>
                {errors.map((error, idx) => (
                  <Alert variant="danger">
                    <p key={idx}>{error}</p>
                  </Alert>
                ))}
              </div>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  value={firstName}
                  placeholder="Enter first name"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  value={lastName}
                  placeholder="Enter last name"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={email}
                  placeholder="Enter an email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  placeholder="Create a username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  placeholder="Create a password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  placeholder="Confirm password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" size="lg">
                Sign Up
              </Button>
            </Form>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default SignupFormPage;
