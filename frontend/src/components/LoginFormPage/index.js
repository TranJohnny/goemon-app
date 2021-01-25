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

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch((res) => {
      if (res.data && res.data.errors) setErrors(res.data.errors);
    });
  };

  return (
    // <form onSubmit={handleSubmit}>
    // <ul>
    //   {errors.map((error, idx) => (
    //     <li key={idx}>{error}</li>
    //   ))}
    // </ul>
    //   <label>
    //     Username or Email
    //     <input
    //       type="text"
    //       value={credential}
    //       onChange={(e) => setCredential(e.target.value)}
    //       required
    //     />
    //   </label>
    //   <label>
    //     Password
    //     <input
    //       type="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       required
    //     />
    //   </label>
    //   <button type="submit">Log In</button>
    // </form>
    <Form onSubmit={handleSubmit}>
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
      <Button variant="primary" type="submit">
        Log In
      </Button>
    </Form>
  );
}

export default LoginFormPage;
