import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ProductCard } from './apipages/AProductsList'
import { getCartItem } from '../slice/ApisliceCart/CartReducer'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
    const dispatch = useDispatch()
    const { ApiCart, loading, error } = useSelector((state) => state.apiCart)
    const {products = []} = ApiCart
    const popularData = products.filter((pro)=> pro.popular === true )
    useEffect(() => {
        dispatch(getCartItem())
    }, [])
    if (loading) {
        return <div>Loading</div>
    }
    
    return (
        <div>
            <p><Link to='/product'>product list</Link></p>
            <p><Link to="/api-product">api product list</Link></p>
            <div className='container'>
                popular
                <div className='row gy-4'>
                    {popularData?.map((cur) => (
                        <div className='col-lg-3' key={cur.id}>
                            <ProductCard productData={cur} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home