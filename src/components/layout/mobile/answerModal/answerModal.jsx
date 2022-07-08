import React, { useEffect, useState } from 'react'
import './answerModal.scss'
import { ButtonAnswer } from '../buttonAnswer/buttonAnswer'

export const AnswerModal = ({ type, question, options, setIsModalShown }) => {
  const [showAnswer, setShownAnswer] = useState(false)
  let [isButtonSelected, setIsButtonSelected] = useState(false)
  useEffect(() => {
    console.log(isButtonSelected)
  }, [isButtonSelected])
  console.log(type, question, options)
  return (
    <>
      <button onClick={() => setIsModalShown(false)}>close modal</button>
      <p>{question}</p>
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
              />
            )))}
      </div>
    </>
  )
}
