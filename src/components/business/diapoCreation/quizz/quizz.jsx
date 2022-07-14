import './quizz.scss'
import { LayoutWindow } from '../layoutWindow/layoutWindow'
import { useState, useEffect } from 'react'
import { useIsMobile, useManageDiapo } from '../../../../utils/hooks'

export const Quizz = () => {
  const { quizz, saveQuizz, removeQuizz } = useManageDiapo()
  const [quizzTemp, setQuizzTemp] = useState(quizz)
  const isMobile = useIsMobile()

  useEffect(() => {
    setQuizzTemp(quizz)
  }, [quizz])

  console.log(quizzTemp)

  const addProposition = () => {
    const newQuizz = { ...quizzTemp }
    newQuizz.possibilities.push({ choice: 'Nouveau choix', answer: false })
    setQuizzTemp(newQuizz)
  }

  const deleteProposition = (index) => {
    const newQuizz = { ...quizzTemp }
    newQuizz.possibilities.splice(index, 1)
    setQuizzTemp(newQuizz)
  }

  const onChangeQuestion = (value) => {
    const newQuizz = { ...quizzTemp }
    newQuizz.question = value
    setQuizzTemp(newQuizz)
  }
  const onChangeChoice = (index, value) => {
    const newQuizz = { ...quizzTemp }
    newQuizz.possibilities[index].choice = value
    setQuizzTemp(newQuizz)
  }
  const onChangeAnswer = (index, value) => {
    const newQuizz = { ...quizzTemp }
    newQuizz.possibilities[index].answer = value
    setQuizzTemp(newQuizz)
  }

  return (
    <LayoutWindow
      title={'Ajouter un quizz à votre slide'}
      onSave={() => saveQuizz(quizzTemp)}
      onDelete={() => removeQuizz(quizzTemp._id)}
      btnDelete={quizzTemp._id ? true : false}
    >
      <div className="quizzContainer">
        <input
          type="text"
          placeholder="Votre question"
          value={quizzTemp.question}
          onChange={(e) => onChangeQuestion(e.target.value)}
          className={isMobile ? 'inputQuestionResponsive' : 'inputQuestion'}
        />
        <p className="subtitle">Cocher le/les réponse(s) vrai</p>
        <div
          className={
            isMobile
              ? 'propositionsContainerResponsive'
              : 'propositionsContainer'
          }
        >
          {quizzTemp.possibilities?.map((proposition, index) => {
            return (
              <div key={index} className="inputContainerProposition">
                <input
                  type="checkbox"
                  className="checkboxInput"
                  checked={proposition.answer}
                  onChange={(e) =>
                    onChangeAnswer(index, e.currentTarget.checked)
                  }
                />
                <input
                  type="text"
                  value={proposition.choice}
                  onChange={(e) => onChangeChoice(index, e.target.value)}
                />
                <button
                  onClick={() => deleteProposition(index)}
                  style={{
                    opacity: quizzTemp.possibilities.length === 2 ? 0 : 1,
                    pointerEvents:
                      quizzTemp.possibilities.length === 2 ? 'none' : 'auto',
                  }}
                >
                  <img src="/assets/images/close_big.png" alt="close" />
                </button>
              </div>
            )
          })}
        </div>
        <button
          disabled={quizzTemp.possibilities.length === 4}
          className={`addProposition ${
            quizzTemp.possibilities.length === 4 ? 'disabledProp' : ''
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
