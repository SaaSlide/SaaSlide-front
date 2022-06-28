import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SignIn, SignUp, Home, DiapoCreation } from './views'
import { ImportPdf } from './components/ImportPdf'
import { Page } from './components/nav/page/page'

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Page />}></Route>
      <Route path="/diapo-list" element={<ImportPdf />}></Route>
      <Route path="/diapo/:id" element={<DiapoCreation />}></Route>
    </Routes>
  )
}

export default RoutesApp
