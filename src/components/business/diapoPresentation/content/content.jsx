import './content.scss'
import { SocketContext } from '../../../../utils/socket'
import { useRef, useContext, useState, useEffect } from 'react'
import { QRCodePresentation, SliderPresentation } from '../'
import { TokenContext } from '../../../../App'
import axios from 'axios'

export const ContentPresentation = ({ id }) => {
  const ref = useRef()
  const [fullscreen, setFullscreen] = useState(false)
  const [index, setIndex] = useState(0)
  const [diapo, setDiapo] = useState([])
  const { socket } = useContext(SocketContext)
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

  socket.on('get_slide', ({ action, value, prevSlide }) => {
    console.log(action, value, prevSlide)
  })

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

      {index === 0 ? (
        <QRCodePresentation id={id} />
      ) : (
        <SliderPresentation diapo={diapo} />
      )}
    </div>
  )
}
