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

export const BroadcasterInterface = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [questions, setQuestions] = useState([])
  const [numberUser, SetNumberUser] = useState()
  const [diapo, setDiapo] = useState()
  const { socket, diapoId } = useContext(SocketContext)
  const [quizzQuestion, setQuizzQuestion] = useState()
  const [quizzOptions, setQuizzOptions] = useState()
  const [quizzResponse, setQuizzResponse] = useState([])
  const [quizzId, setQuizzId] = useState()
  const [surveyQuestion, setSurveyQuestion] = useState()
  const [surveyOptions, setSurveyOptions] = useState()
  const [surveyResponse, setSurveyResponse] = useState([])
  const [surveyId, setSurveyId] = useState()

  const fill = (element) => {
    setQuestions([element, ...questions])
  }

  const getDiapoInfo = async () => {
    const response = await GetDiapoById(diapoId)
    setDiapo(response)
  }

  const onNewSlide = () => {
    setSurveyId((surveyId) => (surveyId = ''))
    setQuizzId((quizzId) => (quizzId = ''))
    if (diapo && slideIndex >= 1 && diapo?.infoDiapo.length) {
      let currentSlide = diapo.infoDiapo[slideIndex - 1]
      if (currentSlide.surveys.length > 0) {
        setSurveyId(currentSlide.surveys[0]._id)
        setSurveyQuestion(currentSlide.surveys[0].name)
        setSurveyOptions(currentSlide.surveys[0].survey)
      }
      if (currentSlide.quizzs.length > 0) {
        setQuizzId(currentSlide.quizzs[0]._id)
        setQuizzQuestion(currentSlide.quizzs[0].question)
        setQuizzOptions(currentSlide.quizzs[0].possibilities)
      }
    }
  }

  useEffect(() => {
    getDiapoInfo()

    socket.on('get_question', ({ pseudo, question }) => {
      fill({ text: `${pseudo} : ${question}`, me: false })
    })

    socket.on('update_number_user', (res) => SetNumberUser(res))

    socket.on('get_response', ({ slide, type, id, choice }) => {
      if (type === 'survey') {
        setSurveyResponse([...surveyResponse, choice])
      } else if (type === 'quizz') {
        setQuizzResponse([...quizzResponse, choice])
      }
      console.log(surveyResponse, quizzResponse)
    })

    return () => socket.disconnect()
  }, [diapoId])

  useEffect(() => {
    onNewSlide()
    setSurveyResponse()
    setQuizzResponse()
  }, [slideIndex])

  return (
    <>
      <TopNav specCount={numberUser} diapoId={diapoId} />
      <RemoteSlideController
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
        numberSlide={diapo?.infoDiapo.length}
      />
      <div className="diapo-elements">
        <DisplayFeatures
          slideIndex={slideIndex}
          diapoInfo={diapo?.infoDiapo[slideIndex - 1]}
          quizzId={quizzId}
          quizzQuestion={quizzQuestion}
          quizzOptions={quizzOptions}
          quizzResponse={quizzResponse}
          surveyId={surveyId}
          surveyQuestion={surveyQuestion}
          surveyOptions={surveyOptions}
          surveyResponse={surveyResponse}
          numberUser={numberUser}
        />
      </div>
      <Question viewer={false} questions={questions} setQuestions={fill} />
    </>
  )
}
