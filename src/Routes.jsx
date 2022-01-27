import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Connexion } from './views'

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/connexion" element={<Connexion />} />
    </Routes>
  )
}

export default RoutesApp
