import React from 'react'
import './answerModal.scss'
import { ButtonAnswer } from '../buttonAnswer/buttonAnswer'

export const AnswerModal = ({
  type,
  pageNumber,
  interactId,
  question,
  options,
  setIsModalShown,
  isButtonSelected,
  setIsButtonSelected,
}) => {
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
                type={type}
                pageNumber={pageNumber}
                interactId={interactId}
                option={option}
                index={index + 1}
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
                  type={type}
                  pageNumber={pageNumber}
                  interactId={interactId}
                  option={option.choice}
                  answer={option.answer}
                  index={index + 1}
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
