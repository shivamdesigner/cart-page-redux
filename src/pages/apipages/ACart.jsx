import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ACart = () => {
  const { ApiCart, loading, error } = useSelector(state => state.apiCart)
  const dispatch = useDispatch()


  // const getProductTotal = cart.reduce((total, items) => total + (items.price * items.quantity), 0)
  // const getTotalDiscount = cart.reduce((total, item) =>
    // total + ((item.price * (item.discount / 100)) * item.quantity), 0);

  // const subTotal = getProductTotal - getTotalDiscount
  return (
    <div className='container'>Cart
      {ApiCart.length === 0 ? (<>
        <div className='card card-body text-center'>
          <h4>Your cart is empty</h4>
        </div></>) :  
        (<>
          <div className='row gy-4'>
            <div className='col-lg-8'>
              {ApiCart.map((item) => {
                return (
                  <div key={item.id} className='card card-body'>
                    <div className='row'>
                      <div className='col-auto'>
                        <ImgCustom src={item.images[0]} alt={item.name} width='100' />
                      </div>
                      <div className='col'>
                        <h3>{item.name}</h3>
                        <p className='fs-4'>₹{Math.round(item.price - (item.price * (item.discount / 100)))} <span className='lead text-decoration-line-through'>₹{item.price}</span> <span className='fs-6 badge '>{item.discount}%</span> </p>
                      </div>
                      <div className='col-auto'>
                        <button className='btn btn-outline-secondary' onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                        <input className='w-25' type="number" value={item.quantity} readOnly />
                        <button className='btn btn-outline-secondary' onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                      </div>
                      <div className='col-auto'>
                        <button className='btn btn-outline-danger' onClick={() => dispatch(removeFromCart(item.id))}>delete</button>
                      </div>
                    </div>
                  </div>
                )
              })}
              {ApiCart.length > 0 && (
                <button
                  className='btn btn-outline-danger mt-2'
                  onClick={() => dispatch(clearCart())}
                >
                  Clear Cart
                </button>
              )}
            </div>
            {/* <div className='col-lg-4'>
              <div className='card card-body'>
                <p className='d-flex align-items-center justify-content-between'><span>Total:</span> ₹{getProductTotal.toLocaleString()}</p>
                <p className='d-flex align-items-center justify-content-between text-danger'><span>Discount:</span> -₹{getTotalDiscount.toLocaleString()}</p>
                <p className='text-info d-flex align-items-center justify-content-between'><span>Subtotal:</span> ₹{subTotal.toLocaleString()} </p>
                {getTotalDiscount > 0 && (
                  <div className='text-success small'>
                    You saved ₹{getTotalDiscount.toLocaleString()} ({Math.round((getTotalDiscount / getProductTotal) * 100)}%)
                  </div>
                )}
              </div>
            </div> */}
          </div>

        </>)}
    </div>
  )
}

export default ACart