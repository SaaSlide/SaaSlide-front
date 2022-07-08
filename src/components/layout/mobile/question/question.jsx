import { useState, useContext } from 'react'
import { SocketContext } from '../../../../utils/socket'
import Input from '../../input/input'
import Button from '../../button/button'

import './question.scss'

const Question = ({ viewer, questions, setQuestions }) => {
  const { sio, pseudo } = useContext(SocketContext)
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setQuestions({ text: `${pseudo} : ${input}`, me: true })
    sio.sendQuestion(input)
    setInput('')
  }

  return (
    <div className="q-container">
      {viewer ? (
        <form className="q-form" onSubmit={handleSubmit}>
          <Input
            onChange={(e) => setInput(e.target.value)}
            label={'Votre question:'}
            value={input}
            required="required"
          />
          <Button type={'submit'} title="Envoyer" className="btn-secondary" />
        </form>
      ) : (
        <h4>QUESTIONS :</h4>
      )}
      <div className="q-questions">
        {questions.map((q, i) => {
          return (
            <p key={i} className={q.me ? 'me' : ''}>
              {q.text}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default Question
