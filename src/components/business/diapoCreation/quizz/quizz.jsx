import './quizz.scss'
import { LayoutWindow } from '../layoutWindow/layoutWindow'
import { useState } from 'react'

export const Quizz = ({ setCategory }) => {
  const [propositions, setPropositions] = useState(['Vrai', 'faux', 'jsp'])

  const addProposition = () => {
    const newPropositions = [...propositions]
    newPropositions.push('')
    setPropositions(newPropositions)
  }

  const deleteProposition = (index) => {
    console.log(index)
    const newPropositions = [...propositions]
    newPropositions.splice(index, 1)
    setPropositions(newPropositions)
  }
  return (
    <LayoutWindow setCategory={setCategory} title={'Ajouter un quizz'}>
      <div className="quizzContainer">
        <input
          type="text"
          placeholder="Votre question"
          className="inputQuestion"
        />
        <p className="subtitle">Cocher le/les réponse(s) vrai</p>
        <div className="propositionsContainer">
          {propositions.map((proposition, index) => {
            return (
              <div key={index} className="inputContainerProposition">
                <input type="checkbox" className="checkboxInput" />
                <input
                  type="text"
                  value={proposition}
                  // onChange={(e) =>
                  //   setPropositions()
                  // }
                />
                <button onClick={() => deleteProposition(index)}>
                  <img src="/assets/images/close_big.png" alt="close" />
                </button>
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
      </div>
    </LayoutWindow>
  )
}
