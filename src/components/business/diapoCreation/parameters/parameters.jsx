import './parameters.scss'
import { LayoutWindow } from '../layoutWindow/layoutWindow'
import { useState } from 'react'

export const Parameters = ({ setCategory }) => {
  const [isChecked, setIsChecked] = useState(false)
  const [isChecked2, setIsChecked2] = useState(false)

  return (
    <LayoutWindow
      setCategory={setCategory}
      title={'Paramètre de personnalisation'}
      btnDelete={false}
    >
      <div className="inputsContainer">
        <div className={'inputContainer'}>
          <label htmlFor="envoiQuestion">Envoi de questions</label>
          <label htmlFor="envoiQuestion" className={`inputApparence`}>
            <div
              className={`inputCircle ${
                isChecked ? 'inputActive' : 'inputInactive'
              }`}
            />
          </label>
          <input
            id="envoiQuestion"
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.currentTarget.checked)}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="envoiSmiley">Envoi de smiley</label>
          <label htmlFor="envoiSmiley" className={`inputApparence`}>
            <div
              className={`inputCircle ${
                isChecked2 ? 'inputActive' : 'inputInactive'
              }`}
            />
          </label>
          <input
            id="envoiSmiley"
            type="checkbox"
            checked={isChecked2}
            onChange={(e) => setIsChecked2(e.currentTarget.checked)}
          />
        </div>
      </div>
    </LayoutWindow>
  )
}
