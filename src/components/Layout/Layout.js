import React from 'react'

import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'
import Router from '../../routers/Router'

const Layout = () => {
  return <div className=' text-white'>
    <Navbar />
    <div>
      <Router />
    </div>
    <Footer />
  </div>
}

export default Layout