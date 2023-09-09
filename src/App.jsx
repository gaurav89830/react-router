import React from 'react'
import Header from './components/Header/Headers'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
