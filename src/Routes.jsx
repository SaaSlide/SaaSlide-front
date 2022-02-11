import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SignIn, SignUp } from './views'

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  )
}

export default RoutesApp
