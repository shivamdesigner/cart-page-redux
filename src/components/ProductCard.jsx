import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../slice/cart/CartReducer';
import ImgCustom from './ImgCustom';

const ProductCard = ({ productData }) => {
  const {
    id,
    title,
    name,
    category,
    brand,
    color = [],
    price,
    images = [],
    image,
    rating,
    discount
  } = productData;
const finalPrice = Math.round(price - (price * (discount / 100)))
  const dispatch = useDispatch()

  const handelAddToCart = () => {
    dispatch(addToCart(productData))
    alert("cart items add")
  }
  return (
    <>
      <div className="card card-body" key={id} >
        <ImgCustom
        className='mb-3'
          src={images[0] || image}
          alt={name}
          width={300}
        />
        <h3 className='fs-4 text-truncate'>{title || name}</h3>
        <p>Category: {category}</p>
        <p>Brand: {brand}</p>
        <p>Color: {Array.isArray(color) ? color.join(', ') : color}</p>
        <p className='fs-5'>Price: ₹{finalPrice.toLocaleString()} <span className='fs-6 text-decoration-line-through'> ₹{price.toLocaleString()}</span> </p>
        <p>Rating: ⭐{rating}</p>
        <div className='d-flex'>
        <Link to={`/product/${id}`} className='btn btn-outline-info' aria-label={`View details for ${name}`}>More details</Link>
        <button className='btn btn-outline-primary' aria-label={`Add ${name} to cart`} onClick={handelAddToCart}>Add to Cart</button>
        </div>
      </div >
    </>
  );
};

export default memo(ProductCard);
