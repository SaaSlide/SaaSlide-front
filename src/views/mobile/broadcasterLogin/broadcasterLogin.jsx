import './broadcasterLogin.scss'
import Input from '../../../components/layout/input/input'
import { useState } from 'react'
import Button from '../../../components/layout/button/button'

export const BroadcasterLogin = () => {
  const [emailValue, setEmailValue] = useState()
  const [passwordValue, setPasswordValue] = useState()
  let diapoId = '62c6cb88d6bbbcb67b887b12'

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('bonjour')
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
          onChange={(e) => setPasswordValue(e.target.value)}
          label={'Password'}
        />
        <Button type="submit" className="btn-secondary" title="Se connecter" />
      </form>
    </div>
  )
}
