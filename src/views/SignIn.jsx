import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/layout/button/button'
import Input from '../components/layout/input/input'
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
      navigate('/managepdf')
    } else {
      console.log('Connexion failed')
    }
  }

  return (
    <div className="container_auth">
      <div className="auth-content login">
        <form onSubmit={handleSubmit} className="login-form">
          <h2 className="animation a1">Se Connecter</h2>
          <div className="input-content">
            <Input type="email" placeholder="Email" animation="animation a2" />
            <Input
              type="password"
              password={true}
              placeholder="Mot de passe"
              animation="animation a3"
            />
          </div>
          <div className="submit animation a4">
            <Button type="submit" className="btn-secondary" title="Connexion" />
            <div className="already-registered signin">
              <p>Pas encore inscrit ?</p>
              <a href="/signup">Créer un compte</a>
            </div>
          </div>
        </form>
      </div>
      <div className="container_img_login"></div>
    </div>
  )
}
