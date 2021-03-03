import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Button, Container } from 'react-bootstrap';

const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  function handleLoginFormSubmit(e) {
    e.preventDefault();
    dispatch({ type: 'LOGIN' });
    history.push("/");
  }

  return (
    <Container className="login-form">
      <h3>Sign In</h3>
      <Form onSubmit={handleLoginFormSubmit}>
        <Form.Group controlId="signInEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="signInPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">Sign In</Button>
      </Form>
    </Container>
  );
}

export default Login;