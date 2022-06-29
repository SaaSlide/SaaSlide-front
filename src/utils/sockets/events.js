import { socket } from './index'

export const socketEvents = ({ setValue }) => {
  socket.on('positionInLine', ({ positionInLine }) => {
    setValue((state) => {
      return { ...state, positionInLine }
    })
  })
}
