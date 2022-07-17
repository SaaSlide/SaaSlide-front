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

  const [response, setResponse] = useState({
    type: null, // null || "quizz" ||  "survey"
    quizz: {
      data: null,
      open: true,
    },
    survey: {
      data: null,
      open: true,
    },
  })
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
    const refresh = ({ value, prevSlide }) => {
      const newIndex = value + prevSlide
      setIndex(newIndex)
      if (
        newIndex != 0 &&
        (diapo[newIndex - 1].quizzs || diapo[newIndex - 1].surveys)
      ) {
        setResponse({
          ...response,
          quizz: {
            ...response.quizz,
            data: diapo[newIndex - 1].quizzs[0] || null,
          },
          survey: {
            ...response.survey,
            data: diapo[newIndex - 1].surveys[0] || null,
          },
        })
      } else {
        setResponse({ ...response, type: null })
      }
    }

    socket.on('get_slide', refresh)

    return () => socket.off('get_slide', refresh)
  }, [socket, index, diapo, response])

  const pressKey = (e) => {
    let newIndex = index
    switch (e.key) {
      case 'Escape':
        changeFullscreen()
        break
      case 'ArrowRight':
        if (newIndex < diapo.length) {
          setIndex(newIndex + 1)
          if (diapo[newIndex].quizzs || diapo[newIndex].surveys) {
            setResponse({
              ...response,
              quizz: {
                ...response.quizz,
                data: diapo[newIndex].quizzs[0] || null,
              },
              survey: {
                ...response.survey,
                data: diapo[newIndex].surveys[0] || null,
              },
            })
          } else {
            setResponse({ ...response, type: null })
          }
          sio.updateSlide('next', 1, newIndex)
        }
        break
      case 'ArrowLeft':
        if (newIndex > 0) {
          setIndex(newIndex - 1)
          if (
            newIndex - 1 != 0 &&
            (diapo[newIndex - 2].quizzs || diapo[newIndex - 2].surveys)
          ) {
            setResponse({
              ...response,
              quizz: {
                ...response.quizz,
                data: diapo[newIndex - 2].quizzs[0] || null,
              },
              survey: {
                ...response.survey,
                data: diapo[newIndex - 2].surveys[0] || null,
              },
            })
          } else {
            setResponse({ ...response, type: null })
          }
          sio.updateSlide('previous', -1, newIndex)
        }
        break
      default:
        break
    }
  }

  useEffect(() => {
    if (diapo.length > 0) {
      document.addEventListener('keyup', pressKey)

      return () => document.removeEventListener('keyup', pressKey)
    }
  }, [index, diapo.length, response])

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

  const updateModal = ({ slide, type, choice }) => {
    if (index === slide) {
      let newDiapo = [...diapo]
      if (type === 'quizz') {
        newDiapo[slide - 1].quizzs[0].possibilities[choice - 1].count++
        setResponse({
          ...response,
          quizz: { ...response.quizz, data: newDiapo[slide - 1].quizzs[0] },
        })
      } else {
        newDiapo[slide - 1].surveys[0].survey[choice - 1].count++
        setResponse({
          ...response,
          survey: { ...response.survey, data: newDiapo[slide - 1].surveys[0] },
        })
      }
      setDiapo(newDiapo)
    }
  }

  const updateParams = ({ type, display, open }) => {
    if (type === 'quizz') {
      setResponse({
        ...response,
        type: display ? type : null,
        quizz: {
          ...response.quizz,
          open,
        },
      })
    } else if (type === 'survey') {
      setResponse({
        ...response,
        type: display ? type : null,
        quizz: {
          ...response.quizz,
          open,
        },
      })
    } else {
      setResponse({ ...response, type: null })
    }
  }

  useEffect(() => {
    socket.on('get_response', updateModal)
    socket.on('get_params', updateParams)
    return () => {
      socket.off('get_response', updateModal)
      socket.off('get_params', updateParams)
    }
  }, [diapo, index, socket, response])

  console.log(response.type)

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
            {response.type !== null && (
              <ResponsePercents
                type={response.type}
                data={
                  response.type === 'quizz'
                    ? response.quizz.data
                    : response.survey.data
                }
                open={
                  response.type === 'quizz'
                    ? response.quizz.open
                    : response.survey.open
                }
              />
            )}
            <SliderPresentation diapo={diapo} index={index} />
          </>
        )}
      </div>
    )
  )
}
