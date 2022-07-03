import RoutesApp from './Routes'
import React, { useContext, useState } from 'react'
import { SocketContext } from './utils/socket'

export const TokenContext = React.createContext()
const App = () => {
  const [context, setContext] = useState('')
  const { socket, sio } = useContext(SocketContext)

  sio.updateSlide('next', '1', 2)
  sio.sendQuestion("Envoie d'une question")

  /**
   * Get clients
   */
  socket.on('update_number_user', (res) =>
    console.log(`${res} personne connecté à la session`),
  )

  return (
    <div>
      <TokenContext.Provider value={[context, setContext]}>
        <RoutesApp />
      </TokenContext.Provider>
    </div>
  )
}
export default App
