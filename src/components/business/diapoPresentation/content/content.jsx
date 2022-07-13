import './content.scss'
import { SocketContext } from '../../../../utils/socket'
import { useRef, useContext, useState, useEffect } from 'react'
import {
  QRCodePresentation,
  SliderPresentation,
  FloatSmiley,
  ResponsePercents,
} from '../'
import { TokenContext } from '../../../../App'
import axios from 'axios'

export const ContentPresentation = ({ id }) => {
  const { socket, sio } = useContext(SocketContext)
  const ref = useRef()
  const [fullscreen, setFullscreen] = useState(false)
  const [index, setIndex] = useState(0)
  const [diapo, setDiapo] = useState([])
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
    if (diapo.length > 0) {
      document.addEventListener('keyup', pressKey)

      return () => document.removeEventListener('keyup', pressKey)
    }
  }, [index, diapo.length])

  const pressKey = (e) => {
    let newIndex
    switch (e.key) {
      case 'Escape':
        changeFullscreen()
        break
      case 'ArrowRight':
        newIndex = index + 1
        if (newIndex < diapo.length + 1) {
          console.log('tes')
          setIndex(newIndex)
          sio.updateSlide('next', 1, newIndex)
        }
        break
      case 'ArrowLeft':
        newIndex = index - 1
        if (newIndex >= 0) {
          setIndex(newIndex)
          sio.updateSlide('previous', -1, newIndex)
        }
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
    diapo && (
      <div ref={ref} className="containerDiapoPres">
        <button className="iconFullScreen" onClick={changeFullscreen}>
          <img src="/assets/icons/fullscreen.svg" alt="fullscreen icon" />
        </button>
        <FloatSmiley />

        {index === 0 ? (
          <QRCodePresentation id={id} />
        ) : (
          <>
            {diapo[index - 1].quizzs.length > 0 && (
              <ResponsePercents
                index={index}
                resType="quizz"
                data={diapo[index - 1].quizzs[0]}
              />
            )}

            {/* {diapo[index - 1].surveys.length > 0 && (
              <ResponsePercents
                index={index}
                resType="survey"
                data={diapo[index - 1].surveys[0]}
              />
            )} */}
            <SliderPresentation diapo={diapo} index={index} />
          </>
        )}
      </div>
    )
  )
}
