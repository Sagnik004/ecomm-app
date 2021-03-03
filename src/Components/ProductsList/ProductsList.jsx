import React from 'react';
import { Container, Col, Row, CardDeck } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import ProductCategory from './ProductCategory/ProductCategory';
import ProductDetails from './ProductDetails/ProductDetails';

const ProductsLists = () => {
  const products = useSelector(state => state.productsWithCategory);
  const dispatch = useDispatch();

  function onProductAdd(skuId) {
    dispatch({ type: 'ADD_TO_CART', skuId: skuId });
  }

  let productList = <h3 style={{ textAlign: 'center' }}>Loading...</h3>;
  if (products.length) {
    productList = products.map(product => {
      if (product.details.length !== 0) {
        return (
          <Container fluid className="product-category" key={product.category}>
            <Row>
              <Col xs={12} style={{ maxWidth: '100%' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: '500', lineHeight: '1.5', letterSpacing: '0.2rem' }}>
                  <ProductCategory categoryTitle={product.category} />
                </div>
              </Col>
              <Col>
                <CardDeck style={{ maxWidth: '90%', paddingLeft: '2em' }}>
                  {product.details.map(detail => {
                    return (
                      <ProductDetails key={detail.sku} detail={detail} handleAddCartClick={onProductAdd} />
                    );
                  })}
                </CardDeck>
              </Col>
            </Row>
          </Container>
        );
      } else {
        return null;
      }
    });
  }

  return (
    productList
  );
}

export default ProductsLists;