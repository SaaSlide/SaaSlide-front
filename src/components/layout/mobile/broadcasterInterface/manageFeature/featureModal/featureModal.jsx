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
  const { sio } = useContext(SocketContext)

  const showFeature = () => {
    setDisplayFeature(!displayFeature)
    sio.sendParams(slideIndex, type.title, featureId, true, false)
  }

  const hideFeature = () => {
    setDisplayFeature(!displayFeature)
    sio.sendParams(slideIndex, type.title, featureId, false, false)
  }

  const closeFeature = () => {
    sio.sendParams(slideIndex, type.title, featureId, false, false)
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
                numberSpec={numberUser}
              />
              <p>{option.choice ? option.choice : option.proposition}</p>
            </div>
          ))}
        <div>
          <p>
            Participation total : {numberResponse}/{numberUser}
          </p>
        </div>
      </div>
      <div>
        {displayFeature ? (
          <Button
            type="button"
            className="btn-secondary"
            onClick={() => showFeature()}
            title="Afficher le sondage"
          />
        ) : (
          <Button
            type="button"
            className="btn-primary"
            onClick={() => hideFeature()}
            title="Fermer le sondage"
          />
        )}
        <Button
          title="Arrêter le sondage"
          className="btn-danger-outline"
          onClick={() => closeFeature()}
        />
      </div>
    </div>
  )
}
