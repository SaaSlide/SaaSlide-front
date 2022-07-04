import React from 'react'
import './buttonOpenPanel.scss'

export const ButtonOpenPanel = ({ type }) => {
  return (
    <>
      {(type === 'survey' && (
        <div className="bop bop-survey">
          <img
            className="bop-img"
            src="/assets/icons/chart-circle.svg"
            alt=""
          />
          <p className="bop-title">Sondage</p>
        </div>
      )) ||
        (type === 'quizz' && (
          <div className="bop bop-quizz">
            <img
              className="bop-img bop-img-quizz"
              src="/assets/icons/chart-vertical.svg"
              alt=""
            />
            <p className="bop-title">Quizz</p>
          </div>
        ))}
    </>
  )
}
