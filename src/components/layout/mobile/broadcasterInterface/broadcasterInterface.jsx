import './broadcasterInterface.scss'
import { TopNav } from './topnav/topNav'
import { RemoteSlideController } from './remoteSlideController/remoteSlideController'
import { Note } from './note/note'
import { ManageFeature } from './manageFeature/manageFeature'
import { IconSondage } from '../../icons/sondage/sondage'
import { IconQuizz } from '../../icons/quizz/quizz'
import { SocketContext } from '../../../../utils/socket'
import { useState, useContext } from 'react'
import Question from '../question/question'

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
  const [activeSlide, SetActiveSlide] = useState()
  const [questions, setQuestions] = useState([])
  const { socket } = useContext(SocketContext)

  socket.on('get_slide', ({ action, value, prevSlide }) => {
    SetActiveSlide(prevSlide + value)
  })

  const fill = (element) => {
    setQuestions([element, ...questions])
  }

  socket.on('get_question', ({ pseudo, question }) => {
    fill({ text: `${pseudo} : ${question}`, me: false })
  })

  return (
    <>
      <TopNav specCount={20} />
      <RemoteSlideController activeSlide={activeSlide} numberSlide={40} />
      <div>
        <Note />
        <ManageFeature type={sondage} />
      </div>
      <Question viewer={false} questions={questions} setQuestions={fill} />
    </>
  )
}
