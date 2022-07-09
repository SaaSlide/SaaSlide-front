import { BroadcasterInterface } from '../../../components/layout/mobile/broadcasterInterface/broadcasterInterface'
import SocketProvider from '../../../utils/socket'
import './broadcasterPage.scss'
import { useParams, useLocation } from 'react-router-dom'

export const BroadcasterPage = () => {
  const params = { ...useParams(), name: 'Bastian' }
  return (
    <>
      <SocketProvider room={params.diapoId} pseudo={params.name}>
        <BroadcasterInterface />
      </SocketProvider>
    </>
  )
}
