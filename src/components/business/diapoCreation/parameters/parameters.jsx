import './parameters.scss'
import { LayoutWindow } from '../layoutWindow/layoutWindow'
import { useState } from 'react'
import { useManageDiapo } from '../../../../utils/hooks'

export const Parameters = () => {
  const { saveParams, parameters } = useManageDiapo()

  const [parametersTemp, setParametersTemp] = useState(parameters)

  return (
    <LayoutWindow
      title={'Paramètrage de la présentation'}
      onSave={() => saveParams(parametersTemp)}
      btnDelete={false}
      parameters
    >
      <div className="inputsContainer">
        <div className={'inputContainer'}>
          <label htmlFor="envoiQuestion">Envoi de questions</label>
          <label htmlFor="envoiQuestion" className={`inputApparence`}>
            <div
              className={`inputCircle ${
                !parametersTemp.sendAnswer ? 'inputActive' : 'inputInactive'
              }`}
            />
          </label>
          <input
            id="envoiQuestion"
            type="checkbox"
            checked={parametersTemp.sendAnswer}
            onChange={(e) =>
              setParametersTemp({
                ...parametersTemp,
                sendAnswer: e.currentTarget.checked,
              })
            }
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="envoiSmiley">Envoi de smiley</label>
          <label htmlFor="envoiSmiley" className={`inputApparence`}>
            <div
              className={`inputCircle ${
                !parametersTemp.sendEmoji ? 'inputActive' : 'inputInactive'
              }`}
            />
          </label>
          <input
            id="envoiSmiley"
            type="checkbox"
            checked={parametersTemp.sendEmoji}
            onChange={(e) =>
              setParametersTemp({
                ...parametersTemp,
                sendEmoji: e.currentTarget.checked,
              })
            }
          />
        </div>
      </div>
    </LayoutWindow>
  )
}
