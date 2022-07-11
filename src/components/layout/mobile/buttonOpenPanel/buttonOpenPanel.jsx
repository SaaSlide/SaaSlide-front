import React, { useState, useEffect } from 'react'
import './buttonOpenPanel.scss'
import { AnswerModal } from '../answerModal/answerModal'

export const ButtonOpenPanel = ({
  type,
  interactId,
  question,
  options,
  pageNumber,
}) => {
  const [isAnswerModalShown, setIsAnswerModalShown] = useState(false)
  const [isButtonSelected, setIsButtonSelected] = useState()

  useEffect(() => {
    console.log('setIsButtonSelected reset called')
    setIsButtonSelected()
  }, [pageNumber])

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
          <div
            onClick={() => setIsAnswerModalShown(true)}
            aria-hidden="true"
            className="bop bop-quizz"
          >
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
          pageNumber={pageNumber}
          interactId={interactId}
          question={question}
          options={options}
          setIsModalShown={setIsAnswerModalShown}
          isButtonSelected={isButtonSelected}
          setIsButtonSelected={setIsButtonSelected}
        />
      )}
    </>
  )
}
