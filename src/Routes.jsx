import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SignIn, SignUp, Home, DiapoCreation } from './views'
import { ManagePdf } from './views/ManagePdf'

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Home />} />
      <Route path="/managepdf" element={<ManagePdf />} />
      <Route path="/diapo/:id" element={<DiapoCreation />} />
    </Routes>
  )
}

export default RoutesApp
