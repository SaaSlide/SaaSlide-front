import { useEffect, createContext } from 'react'
import { io } from 'socket.io-client'

export const SocketContext = createContext({})

const SocketProvider = ({ room, pseudo, children }) => {
  const socket = io('http://localhost:4001/')

  /**
  To get the number of clients connected to the room
  socket.on('update_number_user', (res) =>
    console.log(`${res} personne connecté à la session`),
  )
  */
  useEffect(() => {
    socket.emit('join_room', room, (res) => {
      console.log(res.value)
    })
  }, [])

  const sio = {
    /**
     * Sending to all clients in room except sender
     * For slide changes
     * Getter => socket.on("get_slide",({action, value, prevSlide})=>{})
     * @param {("next"|"previous")} action
     * @param {(1|-1)} value
     * @param {number} prevSlide - previous slide number
     */
    updateSlide: (action, value, prevSlide) => {
      socket.emit('update_slide', { action, value, prevSlide })
    },
    /**
     * Sending to all clients in room except sender
     * For question submissions
     * Getter => socket.on("get_question",({pseudo,question})=>{})
     * @param {string} question
     */
    sendQuestion: (question) => {
      socket.emit('send_question', { pseudo, question })
    },
    /**
     * Sending to all clients in room except sender
     * For updating quiz or survey settings (display, open)
     * Getter => socket.on("get_params",({slide, type, id, display, open})=>{})
     * @param {number} slide - slide number
     * @param {('quizz'|'survey')} type
     * @param {number} id - id of the quiz or survey
     * @param {boolean} display
     * @param {boolean} open
     */
    sendParams: (slide, type, id, display, open) => {
      socket.emit('send_params', { slide, type, id, display, open })
    },
    /**
     * Sending to all clients in room except sender
     * For sending answers to a quiz and a survey
     * Getter => socket.on("get_response",({slide, type, id, choice})=>{})
     * @param {number} slide - slide number
     * @param {('quizz'|'survey')} type
     * @param {number} id - id of the quiz or survey
     * @param {string|number} choice
     */
    sendResponse: (slide, type, id, choice) => {
      socket.emit('send_response', { slide, type, id, choice })
    },
    /**
     * Sending to all clients in room includes sender
     * For sending smiley
     * Getter => socket.on("get_smiley",(smiley)=>{})
     * @param {string} smiley
     */
    sendSmiley: (smiley) => {
      socket.emit('send_smiley', smiley)
    },
  }

  return (
    <SocketContext.Provider value={{ socket, sio }}>
      {children}
    </SocketContext.Provider>
  )
}

export default SocketProvider
