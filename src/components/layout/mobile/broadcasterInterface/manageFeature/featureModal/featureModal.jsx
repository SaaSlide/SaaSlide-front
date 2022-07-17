import './featureModal.scss'
import React, { useState, useContext } from 'react'
import Button from '../../../../button/button'
import { ProgressBar } from '../../../progressBar/progressBar'
import { SocketContext } from '../../../../../../utils/socket'

export const FeatureModal = ({
  slideIndex,
  type,
  featureId,
  closeModal,
  question,
  options,
  numberResponse,
  numberUser,
}) => {
  const [displayFeature, setDisplayFeature] = useState(false)
  const [openFeature, setOpenFeature] = useState(true)
  const { sio } = useContext(SocketContext)

  const diplay = () => {
    sio.sendParams(
      slideIndex,
      type.title,
      featureId,
      !displayFeature,
      openFeature,
    )
    setDisplayFeature(!displayFeature)
  }

  const close = () => {
    sio.sendParams(slideIndex, type.title, featureId, displayFeature, false)
    setOpenFeature(false)
  }

  // prettier-ignore
  return (
    <div className="feature-modal-mobile">
      <button onClick={() => closeModal(false)}> 
        <img src="/assets/icons/close.svg" alt="" />
      </button>
      <h1>Réponses du sondage :</h1>
      <div>
        <p>{question}</p>
        {options &&
          options.map((option, index) => (
            <div key={index}>
              <p>{option.choice ? option.choice : option.proposition}</p>
              <ProgressBar
                width="70vw"
                height="5vh"
                color={
                  option.answer
                    ? '#58BF28'
                    : !option.answer && type.title === 'Quizz'
                    ? '#b33030'
                    : type.color
                }
                value={
                  numberResponse
                    ? numberResponse.filter((item) => item === index + 1).length
                    : 0
                }
                numberSpec={numberResponse.length}
              />
            </div>
          ))}
        {/* <div>
          <p>
            Participation total : {numberResponse}/{numberUser}
          </p>
        </div> */}
      </div>
      <div>
          <Button
            type="button"
            className="btn-secondary"
            onClick={() => diplay()}
            title={(displayFeature ? "Masquer le " : "Afficher le ") + `${type.title === "quizz" ? "quizz" : "sondage"}`}
          />
        <Button
          title={"Arrêter le "+`${type.title === "quizz" ? "quizz" : "sondage"}`}
          className={`btn-danger-outline ${!openFeature ? "disabled" : ""}`}
          onClick={() => close()}
        />
      </div>
    </div>
  )
}
