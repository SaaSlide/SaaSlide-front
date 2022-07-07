import React from 'react'
import './answerModal.scss'
import { ButtonAnswer } from '../buttonAnswer/buttonAnswer'

export const AnswerModal = ({ type, question, options, setIsModalShown }) => {
  console.log(type, question, options)
  return (
    <>
      <button onClick={() => setIsModalShown(false)}>close modal</button>
      <p>{question}</p>
      <div>
        {type === 'survey' &&
          question &&
          options &&
          options.map((option, index) => (
            <ButtonAnswer key={index} option={option} index={index + 1} />
          ))}
      </div>
    </>
  )
}
