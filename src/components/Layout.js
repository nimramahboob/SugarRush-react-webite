import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet, useSearchParams } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout