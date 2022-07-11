import './broadcasterInterface.scss'
import { TopNav } from './topnav/topNav'
import { RemoteSlideController } from './remoteSlideController/remoteSlideController'
import { Note } from './note/note'
import { ManageFeature } from './manageFeature/manageFeature'
import { IconSondage } from '../../icons/sondage/sondage'
import { IconQuizz } from '../../icons/quizz/quizz'
import { SocketContext } from '../../../../utils/socket'
import { useState, useContext, useEffect } from 'react'
import Question from '../question/question'
import { GetDiapoById } from '../../../../services/apiService'
import { DisplayFeatures } from './displayFeatures/displayFeatures'

const quizz = {
  color: '#3F53D9',
  title: 'Quizz',
  icon: <IconQuizz size={80} color={'white'} />,
}

const sondage = {
  color: '#F3A953',
  title: 'Sondage',
  icon: <IconSondage size={80} color={'white'} />,
}

export const BroadcasterInterface = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [questions, setQuestions] = useState([])
  const [numberUser, SetNumberUser] = useState()
  const [diapo, SetDiapo] = useState()
  const [diapoPath, setDiapoPath] = useState()
  const { socket, diapoId } = useContext(SocketContext)

  socket.on('get_slide', ({ action, value, prevSlide }) => {
    setActiveSlide(prevSlide + value)
    console.log('SetActiveSlide', prevSlide + value)
  })

  socket.on('get_response', ({ slide, type, id, choice }) => {
    console.log(slide, type, id, choice)
  })

  const fill = (element) => {
    setQuestions([element, ...questions])
  }

  socket.on('get_question', ({ pseudo, question }) => {
    fill({ text: `${pseudo} : ${question}`, me: false })
  })

  socket.on('update_number_user', (res) => SetNumberUser(res))

  const getDiapoInfo = async () => {
    const response = await GetDiapoById(diapoId)
    SetDiapo(response)
    setDiapoPath(response.infoDiapo[0].pathPdf.substring(2))
  }

  useEffect(() => {
    getDiapoInfo()
  }, [diapoId])

  return (
    <>
      <TopNav specCount={numberUser} />
      <RemoteSlideController
        activeSlide={activeSlide}
        numberSlide={diapo?.infoDiapo.length}
      />
      <div className="diapo-elements">
        <DisplayFeatures infoDiapo={diapo?.infoDiapo[activeSlide]} />
      </div>
      <div>
        <Note />
        <ManageFeature type={sondage} />
      </div>
      <Question viewer={false} questions={questions} setQuestions={fill} />
    </>
  )
}
