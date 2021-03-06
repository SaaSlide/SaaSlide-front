import SocketProvider from '../utils/socket'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { ContentPresentation } from '../components/business/diapoPresentation'

export const DiapoPresentation = () => {
  const location = useLocation()

  const id = location.pathname.replace('/diapo/presentation/', '')

  return (
    <SocketProvider room={id} pseudo={'Présentateur'}>
      <ContentPresentation id={id} />
    </SocketProvider>
  )
}
