import React from 'react';

const ProductCategory = ({ categoryTitle }) => {
  return (
    <div style={{ fontSize: '1.6rem', fontWeight: '500', lineHeight: '1.5', letterSpacing: '0.2rem', paddingLeft: '1.5em' }}>
      {categoryTitle.toUpperCase()}
    </div>
  );
}

export default ProductCategory;