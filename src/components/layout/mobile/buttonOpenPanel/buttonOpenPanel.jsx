import React, { useState } from 'react'
import './buttonOpenPanel.scss'
import { AnswerModal } from '../answerModal/answerModal'

export const ButtonOpenPanel = ({ type, question, options }) => {
  const [isAnswerModalShown, setIsAnswerModalShown] = useState(false)

  return (
    <>
      {(type === 'survey' && (
        <div
          onClick={() => setIsAnswerModalShown(true)}
          aria-hidden="true"
          className="bop bop-survey"
        >
          <p className="bop-title">Sondage</p>
          <img
            className="bop-img"
            src="/assets/icons/chart-circle.svg"
            alt=""
          />
        </div>
      )) ||
        (type === 'quizz' && (
          <div className="bop bop-quizz">
            <p className="bop-title">Quizz</p>
            <img
              className="bop-img bop-img-quizz"
              src="/assets/icons/chart-vertical.svg"
              alt=""
            />
          </div>
        ))}
      {isAnswerModalShown && (
        <AnswerModal
          type={type}
          question={question}
          options={options}
          setIsModalShown={setIsAnswerModalShown}
        />
      )}
    </>
  )
}
