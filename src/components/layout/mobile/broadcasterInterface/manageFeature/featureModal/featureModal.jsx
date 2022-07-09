import './featureModal.scss'
import { useState } from 'react'
import Button from '../../../../button/button'

export const FeatureModal = ({ closeModal, numberSpec, numberResp }) => {
  const [displayFeature, setDisplayFeature] = useState(false)

  const displayFeatureOperations = () => {
    setDisplayFeature(!displayFeature)
  }

  const closeFeature = () => {
    console.log('closing feature')
  }

  return (
    <div className="feature-modal-mobile">
      <button onClick={() => closeModal(false)}>
        <img src="/assets/icons/close.svg" alt="" />
      </button>
      <h1>Réponses du sondage :</h1>
      <div>
        <p>titleQuestion</p>
        <div>les progress bar</div>
        <div>
          <p>
            Participation total : {numberResp}/{numberSpec}
          </p>
        </div>
      </div>
      <div>
        {displayFeature ? (
          <Button
            type="button"
            className="btn-secondary"
            onClick={() => displayFeatureOperations()}
            title="Afficher le sondage"
          />
        ) : (
          <Button
            type="button"
            className="btn-primary"
            onClick={() => displayFeatureOperations()}
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
