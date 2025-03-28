import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import { products } from '../../demo'
import ImgCustom from '../../components/ImgCustom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../slice/cart/CartReducer'
import { products } from '../../demo'
import { getCartItem } from '../../slice/ApisliceCart/CartReducer'

const AProductDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { ApiCart, loading, error } = useSelector((state) => state.apiCart)
  const { products = [] } = ApiCart || {};

  const singleProduct = products.find((pro) => pro.id === Number(id));

  useEffect(() => {
    dispatch(getCartItem())
  }, [])

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!singleProduct) return <div>Product not found</div>;

  const { title, image, category, brand, model, color, price, discount, description } = singleProduct
  const finalPrice = Math.round(price - (price * (discount / 100)));

  return (
    <div className='container'>
      ProductDetails

      <div className='row gy-4'>
        <div className='col-lg-6'>
          <div className='mb-4'>
            <ImgCustom
              src={image}
              alt={title}
              className="rounded"
              style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }}
            />
          </div>

        </div>

        <div className='col-lg-6'>
          <h1 className='fs-3 mb-3'>{title}</h1>
          <p>model: {model}</p>
          <div className='mb-3'>
            <span className='badge bg-primary me-2'>category: {category}</span>
            <span className='badge bg-secondary'>brand: {brand}</span>
          </div>

          <div className='mb-3'>
            <h5>Colors:</h5>
            <div className='d-flex gap-2'>
              {color}
            </div>
          </div>

          <div className='mb-3'>
            <p className='fs-5'>Price: ₹ {discount ? finalPrice.toLocaleString() : price}  {discount && <span className='fs-6 text-decoration-line-through'> ₹{price.toLocaleString()}</span>}  </p>
            {discount ? (<p>discount : <span className='badge badge-succuss'>{discount}%</span></p>) : null}
          </div>

          <div className='mb-3'>

            <p className='mb-1'>
              {/* <strong>Availability:</strong> {stock.quantity > 0
                ? `${stock.quantity} in stock`
                : 'Out of stock'} */}
            </p>
          </div>

          <button className='btn btn-primary btn-lg' onClick={() => dispatch(addToCart(singleProduct))}>
            Add to Cart
          </button>
        </div>
        <div className='col-12'>
          {description && <h5>{description}</h5>}
        </div>
      </div>
    </div>
  )
}

export default AProductDetails