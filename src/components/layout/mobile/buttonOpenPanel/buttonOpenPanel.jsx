import React, { useState, useEffect, useContext } from 'react'
import './buttonOpenPanel.scss'
import { AnswerModal } from '../answerModal/answerModal'
import { SocketContext } from '../../../../utils/socket'

export const ButtonOpenPanel = ({
  type,
  interactId,
  question,
  options,
  pageNumber,
}) => {
  const [isAnswerModalShown, setIsAnswerModalShown] = useState(false)
  const [isButtonSelected, setIsButtonSelected] = useState()

  const [isFeatureOpen, setIsFeatureOpen] = useState()
  const { socket, diapoId } = useContext(SocketContext)

  useEffect(() => {
    console.log('setIsButtonSelected reset called')
    setIsButtonSelected()
  }, [pageNumber])

  useEffect(() => {
    socket.on('get_params', ({ display, open }) => {
      console.log(display, open)
      setIsFeatureOpen(open)
    })

    return () => {
      socket.off('get_params')
    }
  }, [diapoId])

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
