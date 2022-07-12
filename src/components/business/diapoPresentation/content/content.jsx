import './content.scss'
import { SocketContext } from '../../../../utils/socket'
import { useRef, useContext, useState, useEffect } from 'react'
import { QRCodePresentation, SliderPresentation, FloatSmiley } from '../'
import { TokenContext } from '../../../../App'
import axios from 'axios'

export const ContentPresentation = ({ id }) => {
  const ref = useRef()
  const [fullscreen, setFullscreen] = useState(false)
  const [index, setIndex] = useState(0)
  const [diapo, setDiapo] = useState([])
  const { socket, sio } = useContext(SocketContext)
  const [userToken] = useContext(TokenContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // prettier-ignore
        const headers = {
          'Authorization': `Bearer ${userToken}`
        }
        const res = await axios.get(`/diapo/${id}`, {
          headers,
        })
        setDiapo(res.data.infoDiapo)
      } catch (error) {
        console.log(error)
      }
    }
    if (userToken) fetchData()
  }, [userToken])

  useEffect(() => {
    if (socket)
      socket.on('get_slide', ({ value, prevSlide }) => {
        setIndex(value + prevSlide)
      })
  }, [socket, index])

  useEffect(() => {
    document.addEventListener('keyup', pressKey)

    return () => document.removeEventListener('keyup', pressKey)
  }, [])

  const pressKey = (e) => {
    switch (e.key) {
      case 'Escape':
        changeFullscreen()
        break
      case 'ArrowRight':
        sio.updateSlide('next', 1, index)
        break
      case 'ArrowLeft':
        sio.updateSlide('previous', -1, index)
        break
      default:
        break
    }
  }

  const changeFullscreen = () => {
    const { current } = ref
    if (!fullscreen) {
      current.requestFullscreen()
      setFullscreen(true)
    } else {
      document.exitFullscreen()
      setFullscreen(false)
    }
  }

  return (
    <div ref={ref} className="containerDiapoPres">
      <button className="iconFullScreen" onClick={changeFullscreen}>
        <img src="/assets/icons/fullscreen.svg" alt="fullscreen icon" />
      </button>
      <FloatSmiley />

      {index === 0 ? (
        <QRCodePresentation id={id} />
      ) : (
        <SliderPresentation diapo={diapo} index={index} />
      )}
    </div>
  )
}
