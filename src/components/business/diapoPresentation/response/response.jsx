import './response.scss'
import { useContext, useState, useEffect } from 'react'

export const ResponsePercents = ({ type, data }) => {
  console.log(data)
  // const [isVisible, setIsVisible] = useState(true)
  // const [nbAnswers, setNbAnswers] = useState(0)
  // const [tempData, setTempData] = useState(data)

  // useEffect(() => {
  //   // setIsVisible(false)
  //   setNbAnswers(0)
  //   if (resType === 'quizz') resetQuizz()
  //   else resetSurvey()
  //   setTempData(data)
  // }, [index])

  // useEffect(() => {
  //   if (socket) {
  //     socket.on('get_params', ({ display, type }) => {
  //       if (resType === type) setIsVisible(display)
  //     })
  //     socket.on('get_response', ({ slide, type, id, choice }) => {
  //       if (resType === type) {
  //         console.log('test')
  //         if (type === 'quizz') {
  //           const newQuizz = { ...tempData }
  //           const indexToUpdate = newQuizz.possibilities.findIndex(
  //             (possibilitie) => possibilitie.choice === choice,
  //           )
  //           newQuizz.possibilities[indexToUpdate].count++
  //           setNbAnswers(nbAnswers + 1)
  //           setTempData(newQuizz)
  //         }
  //         if (type === 'survey') {
  //           const newSurvey = { ...tempData }
  //           const indexToUpdate = newSurvey.survey.findIndex(
  //             (possi) => possi.possibilitie === choice,
  //           )
  //           newSurvey.survey[indexToUpdate].count++
  //           setNbAnswers(nbAnswers + 1)
  //           setTempData(newSurvey)
  //         }
  //       }
  //     })
  //   }
  // }, [socket])

  // const resetQuizz = () => {
  //   const newQuizz = { ...tempData }
  //   newQuizz.possibilities.forEach((possibilitie) => {
  //     possibilitie.count = 0
  //   })
  //   setTempData(newQuizz)
  // }

  // const resetSurvey = () => {
  //   const newSurvey = { ...tempData }
  //   newSurvey.survey.forEach((possibilitie) => {
  //     possibilitie.count = 0
  //   })
  //   setTempData(newSurvey)
  // }

  console.log('render')

  return (
    <div className="responsePercents" style={{ opacity: 1 }}>
      {data
        ? type === 'quizz'
          ? data.possibilities.map((possibilitie, i) => {
              return (
                <ProgressBar
                  key={i}
                  name={possibilitie.choice}
                  value={possibilitie.count}
                  max={data.possibilities.reduce(
                    (a, { count }) => a + count,
                    0,
                  )}
                  quizz
                  answer={possibilitie.answer}
                />
              )
            })
          : data.possibilities.survey.map((possibilitie, i) => {
              return (
                <ProgressBar
                  key={i}
                  name={possibilitie.proposition}
                  value={possibilitie.count}
                  max={data.possibilities.reduce(
                    (a, { count }) => a + count,
                    0,
                  )}
                />
              )
            })
        : ''}
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
