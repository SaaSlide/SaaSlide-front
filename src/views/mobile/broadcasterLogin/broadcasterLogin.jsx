import './broadcasterLogin.scss'
import Input from '../../../components/layout/input/input'
import { useState } from 'react'
import Button from '../../../components/layout/button/button'
import { Login } from '../../../services/apiService'
import { useNavigate, useParams } from 'react-router-dom'

export const BroadcasterLogin = () => {
  const [emailValue, setEmailValue] = useState()
  const [passwordValue, setPasswordValue] = useState()
  const [inputError, setInputError] = useState()
  let navigate = useNavigate()
  const params = { ...useParams() }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const loginResponse = await Login(emailValue, passwordValue)
    if (loginResponse.status === 200) {
      console.log('connected as admin')
      navigate(`/mobile/broadcasterPage/interface/${params.diapoId}`, {
        replace: true,
      })
    } else {
      setInputError(
        'Mot de passe et/ou Email est incorrect, veuillez réessayer',
      )
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} action="">
        <Input
          onChange={(e) => setEmailValue(e.target.value)}
          label={'E-mail'}
        />
        <Input
          password={true}
          onChange={(e) => setPasswordValue(e.target.value)}
          label={'Password'}
        />
        <p className="error-input">{inputError}</p>
        <Button type="submit" className="btn-secondary" title="Se connecter" />
      </form>
    </div>
  )
}
