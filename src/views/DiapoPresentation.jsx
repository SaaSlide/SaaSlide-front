import '../assets/styles/diapoPresentation.scss'
import SocketProvider from '../utils/socket'
import { useLocation } from 'react-router-dom'
import { ContentPresentation } from '../components/business/diapoPresentation'

export const DiapoPresentation = () => {
  const location = useLocation()

  const id = location.pathname.replace('/diapo/presentation/', '')

  // /mobile/broadcasterLogin

  return (
    <SocketProvider room={id} pseudo={'Bastian'}>
      <ContentPresentation id={id} />
    </SocketProvider>
  )
}
