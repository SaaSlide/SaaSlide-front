import './response.scss'
import { useContext, useState, useEffect } from 'react'

export const ResponsePercents = ({ type, data }) => {
  // const [isVisible, setIsVisible] = useState(true)
  // const [nbAnswers, setNbAnswers] = useState(0)
  // const [tempData, setTempData] = useState(data)

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
