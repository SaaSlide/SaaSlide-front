import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/button'
import Input from '../components/input'
import Logo from '../components/logo'
import axios from 'axios'

export const SignIn = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('/auth/login', {
        mail: e.target[0].value,
        password: e.target[1].value,
      })
      .then((res) => {
        console.log(res)
        const date = new Date(Date.now() + 86400000)
        document.cookie = `tokensaaslide=${
          res.data.token
        }; expires=${date.toUTCString()}; sameSite=strict`
        const TokenContext = React.createContext(res.data.token)
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="container_auth">
      <Logo width="180" />
      <div className="auth-content login">
        <h2>Se Connecter</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-content">
            <Input type="email" password={false} placeholder="Email" />
            <Input type="password" password={true} placeholder="Mot de passe" />
          </div>
          <div className="submit">
            <Button type="submit" className="btn-secondary" title="Connexion" />
            <div className="already-registered signin">
              <p>Pas encore inscrit ?</p>
              <a href="/signup">Créer un compte</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
