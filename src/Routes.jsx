import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SignIn, SignUp, Home } from './views'

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default RoutesApp
