import { useState, useContext } from 'react'
import { SocketContext } from '../../../utils/socket'

const Test = () => {
  const { socket, sio } = useContext(SocketContext)
  const [nUser, setNUser] = useState(0)

  socket.on('update_number_user', (res) => setNUser(res))

  return <p>Nombre d'utilisateur {nUser}</p>
}

export default Test
