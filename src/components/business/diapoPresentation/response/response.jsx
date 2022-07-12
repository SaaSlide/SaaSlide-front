import './response.scss'
import { SocketContext } from '../../../../utils/socket'
import { useContext, useState, useEffect } from 'react'

export const ResponsePercents = ({ index, resType, data }) => {
  const { socket } = useContext(SocketContext)
  const [isVisible, setIsVisible] = useState(true)
  const [nbAnswers, setNbAnswers] = useState(0)
  const [tempData, setTempData] = useState(data)

  useEffect(() => {
    // setIsVisible(false)
    setNbAnswers(0)
    if (resType === 'quizz') resetQuizz()
    else resetSurvey()
    setTempData(data)
  }, [index])

  useEffect(() => {
    if (socket) {
      socket.on('get_params', ({ display, type }) => {
        if (resType === type) setIsVisible(display)
      })
      socket.on('get_response', ({ slide, type, id, choice }) => {
        if (resType === type) {
          console.log('test')
          if (type === 'quizz') {
            const newQuizz = { ...tempData }
            const indexToUpdate = newQuizz.possibilities.findIndex(
              (possibilitie) => possibilitie.choice === choice,
            )
            newQuizz.possibilities[indexToUpdate].count++
            setNbAnswers(nbAnswers + 1)
            setTempData(newQuizz)
          }
        }
      })
    }
  }, [socket])

  const resetQuizz = () => {
    const newQuizz = { ...tempData }
    newQuizz.possibilities.forEach((possibilitie) => {
      possibilitie.count = 0
    })
    setTempData(newQuizz)
  }

  const resetSurvey = () => {
    const newSurvey = { ...tempData }
    // newSurvey.possibilities.forEach((possibilitie) => {
    //   possibilitie.count = 0
    // })
    setTempData(newSurvey)
  }

  return (
    <div className="responsePercents" style={{ opacity: isVisible ? 1 : 0 }}>
      {resType === 'quizz'
        ? tempData.possibilities.map((possibilitie, i) => {
            return (
              <ProgressBar
                key={i}
                name={possibilitie.choice}
                value={possibilitie.count}
                max={nbAnswers}
                quizz
                answer={possibilitie.answer}
              />
            )
          })
        : tempData.survey.map((value, i) => {
            return (
              <ProgressBar
                key={i}
                name={value}
                // value={possibilitie.count}
                value={3}
                max={nbAnswers}
              />
            )
          })}
    </div>
  )
}

const ProgressBar = ({ name, value, max, quizz = false, answer }) => {
  let percentWidth
  let percentRounded

  if (max !== 0) {
    percentWidth = Math.round((value / max) * 100 * 100) / 100
    percentRounded = Math.round((value / max) * 100)
  }
  console.log(percentRounded)
  return (
    <div className="progressContainer">
      <p className="name">{name}</p>
      <div className="barContainer">
        <div
          style={{
            width: (percentWidth ? percentWidth : '0') + '%',
            backgroundColor: quizz ? (answer ? '#58BF28' : '#B33030') : '',
          }}
        />
      </div>
      <p className="percent">{percentRounded ? percentRounded : 0}%</p>
    </div>
  )
}
