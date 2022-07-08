import { BroadcasterInterface } from '../../../components/layout/mobile/broadcasterInterface/broadcasterInterface'
import SocketProvider from '../../../utils/socket'
import './broadcasterPage.scss'

export const BroadcasterPage = () => {
  return (
    <>
      {/* <SocketProvider room={params.diapoId} pseudo={params.name}> */}
      <BroadcasterInterface />
      {/* </SocketProvider> */}
    </>
  )
}
