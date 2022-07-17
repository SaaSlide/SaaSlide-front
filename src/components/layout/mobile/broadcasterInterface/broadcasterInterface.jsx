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
  const [numberUser, setNumberUser] = useState()
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

  const fill = (element) => {
    setQuestions([element, ...questions])
  }

  const getQuestion = ({ pseudo, question }) => {
    setQuestions([{ text: `${pseudo} : ${question}`, me: false }, ...questions])
  }

  useEffect(() => {
    getDiapoInfo()

    socket.on('get_question', getQuestion)

    const setNumUser = (data) => {
      setNumberUser(data)
    }

    socket.on('update_number_user', setNumUser)

    return () => {
      socket.off('get_question', getQuestion)
      socket.off('update_number_user', setNumUser)
    }
  }, [diapoId, socket, questions])

  useEffect(() => {
    socket.on('get_response', ({ slide, type, id, choice }) => {
      if (type === 'survey') {
        let surveyDataset = [...surveyResponse]
        surveyDataset.push(choice)
        setSurveyResponse(surveyDataset)
      } else if (type === 'quizz') {
        let quizzDataset = [...quizzResponse]
        quizzDataset.push(choice)
        setQuizzResponse(quizzDataset)
      }
    })
  }, [surveyResponse, quizzResponse])

  useEffect(() => {
    onNewSlide()

    return () => {
      setSurveyResponse([])
      setQuizzResponse([])
    }
  }, [slideIndex])

  console.log(diapo)

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
      {diapo?.sendAnswer && (
        <Question viewer={false} questions={questions} setQuestions={fill} />
      )}
    </>
  )
}
