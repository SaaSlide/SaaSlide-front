import { useParams, useLocation } from 'react-router-dom'
import SocketProvider from '../../../utils/socket'
import Interface from '../../../components/layout/mobile/interface/interface'

import './viewerInterface.scss'

export const ViewerInterface = () => {
  const params = { ...useParams(), name: useLocation().state }

  return (
    <SocketProvider room={params.diapoId} pseudo={params.name}>
      <Interface />
    </SocketProvider>
  )
}
