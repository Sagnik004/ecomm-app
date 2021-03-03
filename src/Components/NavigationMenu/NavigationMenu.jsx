import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navbar, Button } from 'react-bootstrap';

const NavigationMenu = () => {
  const cart = useSelector(state => state.cart);
  const isUserLoggedIn = useSelector(state => state.isLoggedIn);

  let cartCount = 0;
  if (cart) {
    cartCount = cart.reduce((acc, el) => (acc + el.quantity), 0);
  }

  let loginButton;
  if (!isUserLoggedIn) {
    loginButton = (
      <Link to="/login">
        <Button size="md" className="navbar-button">
          Login
        </Button>
      </Link>
    );
  } else {
    loginButton = (
      <Button size="md" className="navbar-button" disabled>
        My Account
      </Button>
    );
  }

  return (
    <Navbar bg="dark" variant="dark" style={{ justifyContent: 'space-between', flexWrap: 'wrap', padding: '1em', marginBottom: '1.5em' }}>
      <Link to="/">
        <Navbar.Brand className="navbar-logo">E-Commerce</Navbar.Brand>
      </Link >
      <div className="navbar-right">
        {loginButton}
        <Link to="/cart">
          <Button size="md" className="navbar-button" disabled={cartCount === 0}>
            Cart ( {cartCount} )
          </Button>
        </Link>
      </div>
    </Navbar >
  );
}

export default NavigationMenu;