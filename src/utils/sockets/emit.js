import { socket } from './index'

export const addClientToQueue = () => {
  socket.emit('addClientIdToQueue')
}
