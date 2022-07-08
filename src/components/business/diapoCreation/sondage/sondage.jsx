import './sondage.scss'
import { LayoutWindow } from '../layoutWindow/layoutWindow'
import { useEffect, useState } from 'react'
import { useManageDiapo } from '../../../../utils/hooks'

export const Sondage = () => {
  const { sondage, saveSondage, removeSondage } = useManageDiapo()
  const [sondageTemp, setSondageTemp] = useState(sondage)

  useEffect(() => {
    setSondageTemp(sondage)
  }, [sondage])

  const addProposition = () => {
    const newSondage = { ...sondageTemp }
    newSondage.survey.push('')
    setSondageTemp(newSondage)
  }

  const deleteProposition = (index) => {
    const newSondage = { ...sondageTemp }
    newSondage.survey.splice(index, 1)
    setSondageTemp(newSondage)
  }

  const onChangeName = (value) => {
    const newSondage = { ...sondageTemp }
    newSondage.name = value
    setSondageTemp(newSondage)
  }
  const onChangeProposition = (index, value) => {
    const newSondage = { ...sondageTemp }
    newSondage.survey[index] = value
    setSondageTemp(newSondage)
  }

  return (
    <LayoutWindow
      title={'Ajouter un sondage à votre slide'}
      onSave={() => saveSondage(sondageTemp)}
      onDelete={() => removeSondage(sondageTemp._id)}
      btnDelete={sondageTemp._id ? true : false}
    >
      <div className="sondageContainer">
        <input
          type="text"
          placeholder="Votre question"
          className="inputQuestion"
          value={sondageTemp.name}
          onChange={(e) => onChangeName(e.target.value)}
        />
        <div className="propositionsContainer">
          {sondageTemp.survey.map((proposition, index) => {
            return (
              <div key={index} className="inputContainerProposition">
                <input
                  type="text"
                  value={proposition}
                  onChange={(e) => onChangeProposition(index, e.target.value)}
                />
                <button
                  onClick={() => deleteProposition(index)}
                  style={{
                    opacity: sondageTemp.survey.length === 2 ? 0 : 1,
                    pointerEvents:
                      sondageTemp.survey.length === 2 ? 'none' : 'auto',
                  }}
                >
                  <img src="/assets/images/close_big.png" alt="close" />
                </button>
              </div>
            )
          })}
        </div>
        <button
          disabled={sondageTemp.survey.length === 4}
          className={`addProposition ${
            sondageTemp.survey.length === 4 ? 'disabledProp' : ''
          }`}
          onClick={addProposition}
        >
          <img src="/assets/images/edit.png" alt="edit" />
          <p>Ajouter une proposition</p>
        </button>
      </div>
    </LayoutWindow>
  )
}
