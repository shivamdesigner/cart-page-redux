import React from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../demo';

const ProductsList = () => {
  return (
    <div className='container'>
      <div className='row gy-4' >
        {products.map((cur) => (
          <div className='col-lg-3' key={cur.id}>
            <ProductCard productData={cur} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsList