import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SignIn, SignUp, Home } from './views'
import { ImportPdf } from './components/ImportPdf'

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Home />} />
      <Route path="/diapo-list" element={<ImportPdf />}></Route>
    </Routes>
  )
}

export default RoutesApp
