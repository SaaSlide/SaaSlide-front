import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/button'
import Input from '../components/input'
import Logo from '../components/logo'
import { TokenContext } from '../App'
import { Login } from '../services/apiService'

export const SignIn = () => {
  const navigate = useNavigate()
  const [context, setContext] = useContext(TokenContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const loginResponse = await Login(e.target[0].value, e.target[1].value)
    if (loginResponse.status === 200) {
      setContext(loginResponse.data.token)
      navigate('/diapo-list')
    } else {
      console.log('Connexion failed')
    }
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
