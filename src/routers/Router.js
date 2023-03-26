import React from 'react'

import { Route, Routes, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Service from '../pages/Service'
import Contact from '../pages/Contact'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={<Home />} />} />
      <Route path='/home' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/service' element={<Service />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default Router