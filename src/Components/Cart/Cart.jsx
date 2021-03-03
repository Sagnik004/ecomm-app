import React from 'react';
import { Container, Row, Col, Table, Button, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
  const products = useSelector(state => state.products);
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  function handleDecrementQuantityClick(skuId) {
    dispatch({ type: 'DECREMENT_QTY', skuId: skuId });
  }

  function handleIncrementQuantityClick(skuId) {
    dispatch({ type: 'ADD_TO_CART', skuId: skuId });
  }

  let productsList, totalQuantity = 0, totalAmount = 0;
  productsList = cartItems.map(item => {
    const product = products.find(el => el.sku === item.sku);
    totalQuantity += item.quantity;
    totalAmount += (item.quantity * product.price);
    return (
      <tr key={item.sku}>
        <td>{product.description}</td>
        <td>{product.price}</td>
        <td>
          <Button
            variant="warning"
            className="product-sub"
            disabled={item.quantity === 0}
            onClick={() => handleDecrementQuantityClick(item.sku, item.quantity)}
          >-</Button>
          {item.quantity}
          <Button
            variant="success"
            className="product-add"
            onClick={() => handleIncrementQuantityClick(item.sku)}
          >+</Button>
        </td>
      </tr>
    );
  });

  let cartSummary;
  cartSummary = (
    <Card style={{ marginTop: '0.5em' }}>
      <Card.Header>Cart Summary</Card.Header>
      <Card.Body>
        <Card.Text><strong>Total Items: {totalQuantity}</strong></Card.Text>
        <Card.Text><strong>Total Price: {totalAmount.toFixed(2)}</strong></Card.Text>
        <Button variant="success" style={{ width: '100%' }} disabled={totalQuantity === 0}>Check out</Button>
      </Card.Body>
    </Card>
  );

  return (
    <Container>
      <Row>
        <Col sm={12} md={8}>
          <h3 style={{ marginBottom: '1em' }}>YOUR SHOPPING CART</h3>
          <Table striped>
            <thead>
              <tr>
                <th>Product Description</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {productsList}
            </tbody>
          </Table>
        </Col>
        <Col sm={12} md={4}>
          {cartSummary}
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;