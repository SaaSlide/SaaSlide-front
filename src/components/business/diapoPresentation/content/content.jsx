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
  const [quizz, setQuizz] = useState(null)
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
      if (diapo[newIndex - 1].quizzs[0]) setQuizz(diapo[newIndex - 1].quizzs[0])
    }

    socket.on('get_slide', refresh)

    return () => socket.off('get_slide', refresh)
  }, [socket, index, diapo])

  const pressKey = (e) => {
    let newIndex = index
    switch (e.key) {
      case 'Escape':
        changeFullscreen()
        break
      case 'ArrowRight':
        if (newIndex < diapo.length) {
          setIndex(newIndex + 1)
          if (diapo[newIndex].quizzs[0]) setQuizz(diapo[newIndex].quizzs[0])
          sio.updateSlide('next', 1, newIndex)
        }
        break
      case 'ArrowLeft':
        if (newIndex > 0) {
          setIndex(newIndex - 1)
          if (diapo[newIndex - 2].quizzs[0])
            setQuizz(diapo[newIndex - 2].quizzs[0])
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
  }, [index, diapo.length])

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
    console.group('In Update Modal')
    console.log('Verif Slide', index, '?=', slide)
    if (index === slide) {
      console.log('Good Slide')
      if (type === 'quizz') {
        console.group('Quizz')
        console.log('Choice Received', choice)
        let newDiapo = [...diapo]
        newDiapo[slide - 1].quizzs[0].possibilities[choice - 1].count++
        console.log('Quizz After Update', newDiapo[slide - 1].quizzs[0])
        setQuizz(newDiapo[slide - 1].quizzs[0])
        setDiapo(newDiapo)
      } else {
        // const newSurvey = { ...tempData }
        // const indexToUpdate = newSurvey.survey.findIndex(
        //   (possi) => possi.possibilitie === choice,
        // )
        // newSurvey.survey[indexToUpdate].count++
        // setNbAnswers(nbAnswers + 1)
        // setTempData(newSurvey)
      }
    }
    console.groupEnd()
    console.groupEnd()
  }

  useEffect(() => {
    socket.on('get_response', updateModal)
    return () => {
      socket.off('get_response', updateModal)
    }
  }, [diapo, index, socket])

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
            {quizz && <ResponsePercents type="quizz" data={quizz} />}

            {/* {diapo[index - 1].surveys.length > 0 && (
              <ResponsePercents
                index={index}
                resType="survey"
                data={diapo[index - 1].surveys[0]}
              />
            )} */}
            <SliderPresentation diapo={diapo} />
          </>
        )}
      </div>
    )
  )
}
