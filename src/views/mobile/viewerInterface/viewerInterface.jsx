import React from 'react'
import { useParams } from 'react-router-dom'
import './viewerInterface.scss'
import SocketProvider from '../../../utils/socket'

export const ViewerInterface = () => {
  const params = useParams()
  return (
    <SocketProvider room={params.diapoId} pseudo="toto">
      <h1>coucou</h1>
    </SocketProvider>
  )
}
