import React, { useEffect } from 'react'
import './answerModal.scss'
import { ButtonAnswer } from '../buttonAnswer/buttonAnswer'

export const AnswerModal = ({
  type,
  question,
  options,
  setIsModalShown,
  isButtonSelected,
  setIsButtonSelected,
}) => {
  useEffect(() => {
    console.log(isButtonSelected)
  }, [question])
  console.log('question', question)
  return (
    <>
      <section className="answer-modal">
        <button className="modal-closer" onClick={() => setIsModalShown(false)}>
          <img src="/assets/icons/close.svg" alt="" />
        </button>
        <p className="question-title">{question}</p>
        <div>
          {(type === 'survey' &&
            question &&
            options &&
            options.map((option, index) => (
              <ButtonAnswer
                key={index}
                option={option}
                index={index + 1}
                type={type}
                isButtonSelected={isButtonSelected}
                setIsButtonSelected={setIsButtonSelected}
                isClickable={isButtonSelected}
              />
            ))) ||
            (type === 'quizz' &&
              question &&
              options &&
              options.map((option, index) => (
                <ButtonAnswer
                  key={index}
                  option={option.choice}
                  index={index + 1}
                  type={type}
                  isButtonSelected={isButtonSelected}
                  setIsButtonSelected={setIsButtonSelected}
                  isClickable={isButtonSelected}
                />
              )))}
        </div>
      </section>
    </>
  )
}
