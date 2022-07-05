import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { SignIn, SignUp, Home, DiapoCreation } from './views'
import { ImportPdf } from './components/business/ImportPdf/importPdf'
import { PdfList } from './components'
import { useCookie } from './utils/cookie/cookie'
import { SideBar } from './components/layout/nav/sidebar/sidebar'
import ScreenWrapper from './components/layout/screenwrapper/ScreenWrapper'

const RoutesApp = () => {
  useCookie()

  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Home />} />
      <Route
        path="/diapo-list"
        element={
          <ScreenWrapper>
            <ImportPdf />
            <PdfList />
          </ScreenWrapper>
        }
      ></Route>
      <Route path="/diapo/:id" element={<DiapoCreation />}></Route>
    </Routes>
  )
}

export default RoutesApp
