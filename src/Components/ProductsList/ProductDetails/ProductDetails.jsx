import React from 'react';
import { Card, Button, Row } from 'react-bootstrap';

const ProductCategory = (props) => {
  const { image, description, price, sku } = props.detail;

  return (
    <Card className="shadow" style={{ padding: '1em', margin: '1em', minWidth: '18rem', maxWidth: '20rem' }}>
      <Card.Img variant="top" src={image} style={{ height: '275px', borderRadius: '1rem' }} />
      <Card.Body>
        <Card.Text style={{ lineHeight: '1.5', letterSpacing: '0.01rem' }}>
          {description.toUpperCase()}
        </Card.Text>
        <Row style={{ justifyContent: "space-between" }}>
          <Button variant="warning" disabled><strong>{price}</strong></Button>
          <Button variant="success" onClick={() => props.handleAddCartClick(sku)}>Add to Cart</Button>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ProductCategory;