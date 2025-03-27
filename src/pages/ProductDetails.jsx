import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../demo'
import ImgCustom from '../components/ImgCustom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../slice/cart/CartReducer'

const ProductDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const signalProducts = products.find((pro) => pro.id === id);
  if (!signalProducts) {
    return <div>not found</div>
  }
  const { name, images = [], category, brand, color = [], price, rating, discount, stock, disruption } = signalProducts
  const finalPrice = Math.round(price - (price * (discount / 100)));

  return (
    <div className='container'>
      ProductDetails

      <div className='row gy-4'>
        <div className='col-lg-6'>
          <div className='mb-4'>
            <ImgCustom
              src={images[0]}
              alt={name}
              className="rounded"
              style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }}
            />

          </div>
          <div className='d-flex gap-2 flex-wrap'>
            {images.map((img, i) => (
              <ImgCustom
                key={i}
                src={img}
                alt={`${name} - ${i + 1}`}
                className='img-thumbnail'
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
            ))}
          </div>
        </div>

        <div className='col-lg-6'>
          <h1 className='mb-3'>{name}</h1>

          <div className='mb-3'>
            <span className='badge bg-primary me-2'>{category}</span>
            <span className='badge bg-secondary'>{brand}</span>
          </div>

          <div className='mb-3'>
            <h5>Colors:</h5>
            <div className='d-flex gap-2'>
              {color.map((c, i) => (
                <span key={i} className='badge bg-light text-dark'>{c}</span>
              ))}
            </div>
          </div>

          <div className='mb-3'>
            <h3 className='text-primary'>
              ₹{finalPrice.toLocaleString()}
              {discount && (
                <small className='fs-6 text-danger text-decoration-line-through ms-2 text-decoration-line-through'>
                  ₹{price}
                </small>
              )}
            </h3>
            {discount && (
              <span className='badge bg-success ms-2'>{discount}% OFF</span>
            )}
          </div>

          <div className='mb-3'>
            <p className='mb-1'>
              <strong>Rating:</strong> ⭐{rating}/5
            </p>
            <p className='mb-1'>
              <strong>Availability:</strong> {stock.quantity > 0
                ? `${stock.quantity} in stock`
                : 'Out of stock'}
            </p>
          </div>

          <button className='btn btn-primary btn-lg' onClick={() => dispatch(addToCart(signalProducts))}>
            Add to Cart
          </button>
        </div>
        <div className='col-12'>
          {disruption && <h5>{disruption}</h5>}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails