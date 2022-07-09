import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SignIn, SignUp, Home, DiapoCreation } from './views'
import { useCookie } from './utils/cookie/cookie'
import { ViewerLogin } from './views/mobile/viewerLogin/viewerLogin'
import { ViewerInterface } from './views/mobile/viewerInterface/viewerInterface'
import { ManagePdf } from './views/ManagePdf'
import { ImportPdf } from './components/business/ImportPdf/importPdf'
import { PdfList } from './components/business/pdfList/pdfList'
import { BroadcasterPage } from './views/mobile/broadcasterPage/broadcasterPage'
import { BroadcasterLogin } from './views/mobile/broadcasterLogin/broadcasterLogin'

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
          <>
            <ImportPdf />
            <PdfList />
          </>
        }
      ></Route>
      <Route path="/diapo/:id" element={<DiapoCreation />}></Route>
      <Route path="/mobile/presentation" element={<ViewerLogin />} />
      <Route
        path="/mobile/presentation/:diapoId"
        element={<ViewerInterface />}
      />
      <Route path="/mobile/broadcasterPage" element={<BroadcasterPage />} />
      <Route path="/mobile/broadcasterLogin" element={<BroadcasterLogin />} />
      <Route path="/managepdf" element={<ManagePdf />} />
    </Routes>
  )
}

export default RoutesApp
