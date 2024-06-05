import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Tabs from './Component/CustomTabs/Tabs'
import CountDown from './Component/CountDownTimer/CountDown'
import LoginSignup from './Component/LoginSignUp/LoginSignup'
import OverlayModel from './Component/ModelOverlay/OverlayModel'
import Accordian from './Component/AccordianOrFAQ/Accordian'
import Pagination from './Component/Pagination/Pagination'
import Home from './Component/E-Comm/Home'
import Cart from './Component/E-Comm/Cart'
import ProductDetails from './Component/E-Comm/ProductDetails'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<h1>Home page</h1>} />
        <Route path='/tabs' element={<Tabs />} />
        <Route path='/countdown' element={<CountDown />} />
        <Route path='/loginsignup' element={<LoginSignup />} />
        <Route path='/model' element={<OverlayModel />} />
        <Route path='/accordian' element={<Accordian />} />
        <Route path='/pagination' element={<Pagination />} />
        <Route path='/ecomm' element={<Home />} />
        <Route path='/ecome-cart' element={<Cart />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />
      </Routes>

    </>
  )
}

export default App
