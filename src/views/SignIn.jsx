import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/layout/button/button'
import Input from '../components/layout/input/input'
import { TokenContext } from '../App'
import { Login } from '../services/apiService'
import { useIsMobile } from '../utils/hooks/isMobile'

export const SignIn = () => {
  const navigate = useNavigate()
  const isMobile = useIsMobile()
  const [context, setContext] = useContext(TokenContext)

  const [inputErrorEmail, setInputErrorEmail] = useState('')
  const [inputErrorPassword, setInputErrorPassword] = useState('')
  const [inputError, setInputError] = useState('')

  const validateEmail = (value) => {
    let error
    if (!value) error = 'Champ requis'
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
      error = 'Format email invalide'
    return error
  }
  const validatePassword = (value) => {
    let error = ''
    if (!value) error = 'Champ requis'

    return error
  }

  onchange = (e) => {
    const name = e.target.name
    const value = e.target.value
    if (name === 'email') {
      setInputErrorEmail(validateEmail(value))
    } else if (name === 'password') {
      setInputErrorPassword(validatePassword(value))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const loginResponse = await Login(e.target[0].value, e.target[1].value)
    if (loginResponse.status === 200) {
      setContext(loginResponse.data.token)
      navigate('/managepdf')
    } else {
      setInputError(
        'Mot de passe et/ou Email est incorrect, veuillez réessayer',
      )
    }
  }

  return (
    <div className="container_auth">
      {!isMobile ? (
        <>
          <div className="auth-content login">
            <form onSubmit={handleSubmit} className="login-form">
              <h2 className="animation a1">Se Connecter</h2>
              <div className="input-content">
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  animation="animation a2"
                  onChange={(e) => onchange(e)}
                />
                <p className="error">{inputErrorEmail}</p>
                <Input
                  name="password"
                  type="password"
                  password={true}
                  placeholder="Mot de passe"
                  animation="animation a3"
                  onChange={(e) => onchange(e)}
                />
                <p className="error">{inputErrorPassword}</p>
              </div>
              <div className="submit animation a4">
                <Button
                  type="submit"
                  className="btn-secondary"
                  title="Connexion"
                />
                <div className="already-registered signin">
                  <p>Pas encore inscrit ?</p>
                  <a href="/signup">Créer un compte</a>
                </div>
              </div>
              <p className="error">{inputError}</p>
            </form>
          </div>
          <div className="container_img_login"></div>
        </>
      ) : (
        <div className="container-auth-mobile login">
          <div className="auth-content-mobile">
            <form onSubmit={handleSubmit} className="login-form">
              <h2 className="animation a1">Se Connecter</h2>
              <div className="input-content">
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  animation="animation a2"
                  onChange={(e) => onchange(e)}
                />
                <p className="error">{inputErrorEmail}</p>
                <Input
                  name="password"
                  type="password"
                  password={true}
                  placeholder="Mot de passe"
                  animation="animation a3"
                  onChange={(e) => onchange(e)}
                />
                <p className="error">{inputErrorPassword}</p>
              </div>
              <div className="submit animation a4">
                <Button
                  type="submit"
                  className="btn-secondary"
                  title="Connexion"
                />
                <div className="already-registered signin">
                  <p>Pas encore inscrit ?</p>
                  <a href="/signup">Créer un compte</a>
                </div>
              </div>
              {inputError ? (
                <p className="input-error">{inputError}</p>
              ) : (
                <p>{inputError}</p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
