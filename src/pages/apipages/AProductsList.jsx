import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, getCartItem } from '../../slice/ApisliceCart/CartReducer'
import ImgCustom from '../../components/ImgCustom'
import { Link } from 'react-router-dom'

const AProductsList = () => {
    const dispatch = useDispatch()
    const { ApiCart, loading,error } = useSelector((state) => state.apiCart)
    const productData = ApiCart.products
    useEffect(() => {
        dispatch(getCartItem())
    }, [])
    if (loading) {
        return <div>Loading</div>
    }else{
         error
    }
    return (
        <div className='container'>
            <div className='row gy-4' >
                {productData?.map((cur) => (
                    <div className='col-lg-3' key={cur.id}>
                        <ProductCard productData={cur} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AProductsList

export const ProductCard = ({ productData }) => {
    const {
        id,
        title,
        category,
        brand,
        color = [],
        price,
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
        <div className="card card-body" key={id} >
            <ImgCustom className='mb-3' src={image} alt={title} width={300} />
            <h3 className='fs-4 text-truncate'>{title}</h3>
            <p>Category: {category}</p>
            <p>Brand: {brand}</p>
            <p>Color: {Array.isArray(color) ? color.join(', ') : color}</p>
            <p className='fs-5'>Price: ₹ {discount ? finalPrice.toLocaleString() : price }  {discount && <span className='fs-6 text-decoration-line-through'> ₹{price.toLocaleString()}</span> }  </p>
            {discount ? (<p>discount : <span className='badge badge-info'>{discount}%</span></p>):null} 
            {rating && <p>Rating: ⭐{rating}</p>}
            <div className='d-flex'>
                <Link to={`/api-product/${id}`} className='btn btn-outline-info' aria-label={`View details for ${title}`}>More details</Link>
                <button className='btn btn-outline-primary' aria-label={`Add ${title} to cart`} onClick={handelAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};