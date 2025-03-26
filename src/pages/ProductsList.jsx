import React from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../demo';
const ProductsList = () => {
  return (
      <div style={{ display: 'flex',flexWrap:'wrap',gap:'30px' }}>
        {products.map((cur) => (
          <ProductCard key={cur.id} productData={cur} />
        ))}
      </div>
  )
}

export default ProductsList