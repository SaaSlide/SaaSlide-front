import './sondage.scss'
import { LayoutWindow } from '../layoutWindow/layoutWindow'
import { useEffect, useState } from 'react'
import { useManageDiapo } from '../../../../utils/hooks'

export const Sondage = () => {
  const { sondage, saveSondage, index } = useManageDiapo()
  const [propositions, setPropositions] = useState(sondage)

  useEffect(() => {
    setPropositions(sondage)
  }, [index])

  const addProposition = () => {
    const newPropositions = [...propositions]
    newPropositions.push('')
    setPropositions(newPropositions)
  }

  const deleteProposition = (index) => {
    const newPropositions = [...propositions]
    newPropositions.splice(index, 1)
    setPropositions(newPropositions)
  }

  const onChangeProposition = (index, value) => {
    const newPropositions = [...propositions]
    newPropositions[index] = value
    setPropositions(newPropositions)
  }

  const removeFromSlide = () => {
    let newPropositions = [...propositions]
    newPropositions = []
    setPropositions(newPropositions)
    saveSondage(newPropositions, true)
  }

  return (
    <LayoutWindow
      title={'Ajouter un sondage à votre slide'}
      onSave={() => saveSondage(propositions)}
      onDelete={removeFromSlide}
    >
      <div className="propositionsContainer">
        {propositions.map((proposition, index) => {
          return (
            <div key={index} className="inputContainerProposition">
              <button onClick={() => deleteProposition(index)}>
                <img src="/assets/images/close_big.png" alt="close" />
              </button>{' '}
              <input
                type="text"
                value={proposition}
                onChange={(e) => onChangeProposition(index, e.target.value)}
              />
            </div>
          )
        })}
      </div>
      <button
        disabled={propositions.length === 4}
        className={`addProposition ${
          propositions.length === 4 ? 'disabledProp' : ''
        }`}
        onClick={addProposition}
      >
        <img src="/assets/images/edit.png" alt="edit" />
        <p>Ajouter une proposition</p>
      </button>
    </LayoutWindow>
  )
}
