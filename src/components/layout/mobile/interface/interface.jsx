import { useState, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SocketContext } from '../../../../utils/socket'
import Question from '../question/question'
import { GetDiapoById } from '../../../../services/apiService'
import { DownloadPdf } from '../../../layout/mobile/downloadPdf/downloadPdf'
import { ButtonOpenPanel } from '../buttonOpenPanel/buttonOpenPanel'

import './interface.scss'

const Interface = () => {
  const { socket, pseudo, diapoId } = useContext(SocketContext)
  const [questions, setQuestions] = useState([])
  const [home, setHome] = useState(true)

  const [diapo, setDiapo] = useState()
  const [diapoPath, setDiapoPath] = useState()
  const [surveyName, setSurveyName] = useState()
  const [surveyOptions, setSurveyOptions] = useState()
  const [quizzQuestion, setQuizzQuestion] = useState()
  const [quizzOptions, setQuizzOptions] = useState()
  const [pageNumber, setPageNumber] = useState(0)

  const fill = (element) => {
    setQuestions([element, ...questions])
  }

  socket.on('get_question', ({ pseudo, question }) => {
    fill({ text: `${pseudo} : ${question}`, me: false })
  })

  const getDiapoInfo = async () => {
    const response = await GetDiapoById(diapoId)
    setDiapo(response)
    setDiapoPath(response.infoDiapo[0].pathPdf.substring(2))
  }

  // when socket emit changing slide event
  const onNewSlide = () => {
    if (pageNumber >= 1 && diapo) {
      if (pageNumber <= diapo.infoDiapo.length) {
        console.log(pageNumber)
        let currentSlide = diapo.infoDiapo[pageNumber - 1]
        if (currentSlide.surveys.length) {
          setSurveyName(currentSlide.surveys[0].name)
          setSurveyOptions(currentSlide.surveys[0].survey)
        } else {
          setSurveyName()
          setSurveyOptions()
        }
        if (currentSlide.quizzs.length) {
          setQuizzQuestion(currentSlide.quizzs[0].question)
          setQuizzOptions(currentSlide.quizzs[0].possibilities)
        } else {
          setQuizzQuestion()
          setQuizzOptions()
        }
      }
    }
  }

  useEffect(() => {
    getDiapoInfo()
  }, [diapoId])

  useEffect(() => {
    onNewSlide()
  }, [pageNumber])

  /* eslint-disable */
  return (
    <>
      <div className="interface-container">
        {home ? (
          <div>
            <h1>Bienvenue {pseudo}</h1>
            {surveyName && surveyOptions && (
              <ButtonOpenPanel
                type="survey"
                question={surveyName}
                options={surveyOptions}
              />
            )}
            {quizzQuestion && quizzOptions && (
              <ButtonOpenPanel
                type="quizz"
                question={quizzQuestion}
                options={quizzOptions}
              />
            )}
            {diapo && (
              <DownloadPdf diapoPath={diapoPath} emoji={diapo.sendEmoji} />
            )}
            {/* FIXME: for testing only ! */}
            <button onClick={() => setPageNumber(1)}>11111111111111</button>
            <button onClick={() => setPageNumber(2)}>22222222222222</button>
            <button onClick={() => setPageNumber(3)}>33333333333333</button>
            <button onClick={() => setPageNumber(4)}>44444444444444</button>
            <button onClick={() => setPageNumber(5)}>55555555555555</button>
            <button onClick={() => setPageNumber(6)}>66666666666666</button>
          </div>
        ) : (
          <Question viewer={true} questions={questions} setQuestions={fill} />
        )}
      </div>
      <nav className="navMobile">
        <ul>
          <li
            onClick={() => {
              setHome(!home)
            }}
            className={`${home ? 'n-active' : ''}`}
          >
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.7 20H3.3C2.69249 20 2.2 19.5182 2.2 18.9239V10.3154H0L10.2212 0.315595C10.4275 0.113535 10.7075 0 10.9995 0C11.2914 0 11.5714 0.113535 11.7777 0.315595L22 10.3154H19.8V18.9239C19.8 19.5182 19.3075 20 18.7 20ZM8.8 12.4676H13.2V17.8479H17.6V9.0543L11 2.59792L4.4 9.0543V17.8479H8.8V12.4676Z"
                fill="white"
              />
            </svg>
            <span>Home</span>
          </li>
          <li
            onClick={() => {
              setHome(!home)
            }}
            className={`${home ? '' : 'n-active'}`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 20V2.22222C0 0.994923 0.994923 0 2.22222 0H17.7778C19.0051 0 20 0.994923 20 2.22222V13.3333C20 14.5606 19.0051 15.5556 17.7778 15.5556H6.66667C6.1857 15.5547 5.71757 15.7107 5.33333 16L0 20ZM2.22222 2.22222V15.5556L4.59333 13.7778C4.97738 13.4881 5.44564 13.332 5.92667 13.3333H17.7778V2.22222H2.22222Z"
                fill="white"
              />
            </svg>
            <span>Questions</span>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Interface
