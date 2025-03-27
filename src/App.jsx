import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
const Cart = lazy(() => import('./pages/Cart'))
const Navbar = lazy(() => import('./components/Navbar'))
const ProductsList = lazy(() => import('./pages/ProductsList'))
const ProductDetails = lazy(() => import('./pages/ProductDetails'))
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/product' element={<ProductsList />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
