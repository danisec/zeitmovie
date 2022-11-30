import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from '../UI/organisms/navbar/Navbar'

import HomePage from '../pages/home'

import Footer from '../UI/organisms/footer/Footer'

function Templates() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default Templates
