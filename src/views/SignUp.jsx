import { useState } from 'react'
import Button from '../components/layout/button/button'
import Input from '../components/layout/input/input'
import '../assets/styles/authentification/authentification.scss'
import { useNavigate } from 'react-router-dom'
import { Register } from '../services/apiService'
import { useIsMobile } from '../utils/hooks/isMobile'

export const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [inputErrorPseudo, setInputErrorPseudo] = useState('')
  const [inputErrorEmail, setInputErrorEmail] = useState('')
  const [inputErrorPassword, setInputErrorPassword] = useState('')
  const [inputErrorPasswordCopy, setInputErrorPasswordCopy] = useState('')
  const [inputError, setInputError] = useState('')
  const [passwordVerify, setPasswordVerify] = useState('')
  const navigate = useNavigate()
  const isMobile = useIsMobile()

  const validatePseudo = (value) => {
    let error
    if (!value) error = 'Champ requis'
    else if (value.length > 12) error = '12 caractère maximum'
    else if (value.length < 3) error = '3 caractères minimum'
    else if (/[^a-zA-Z0-9]/.test(value)) error = 'Pas de caractère spéciaux'

    return error
  }
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
    else if (value.length < 8) error = '8 caractères minimum'
    else if (!/(?=.*[0-9])/.test(value)) error = 'Doit contenir un nombre'

    return error
  }
  const validateConfirmPassword = (pass, value) => {
    let error = ''
    if (!value) error = 'Champ requis'
    else if (pass && value && pass !== value)
      error = 'Les mots de passe de correspondent pas'

    return error
  }

  onchange = (e) => {
    const name = e.target.name
    const value = e.target.value

    const passwordInput = document.querySelector('input[name="password"]').value
    const confirmPasswordInput = document.querySelector(
      'input[name="confirmPassword"]',
    ).value

    if (name === 'name') {
      setInputErrorPseudo(validatePseudo(value))
    } else if (name === 'email') {
      setInputErrorEmail(validateEmail(value))
    } else if (name === 'password') {
      setInputErrorPassword(validatePassword(value))
    } else if (name === 'confirmPassword') {
      setInputErrorPasswordCopy(validateConfirmPassword(passwordInput, value))
    }
    if (passwordInput === confirmPasswordInput) {
      setPasswordVerify(passwordInput)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let registerResponse = await Register(
      e.target[0].value,
      e.target[1].value,
      passwordVerify,
    )
    if (registerResponse.status === 201) {
      navigate('/signin')
    } else {
      setInputError('Une erreur est survenue, veuillez réessayer')
    }
  }

  return (
    <div className="container_auth">
      {!isMobile ? (
        <>
          <div className="auth-content">
            <form onSubmit={handleSubmit} className="register-form">
              <h2 className="animation a1">Créer un compte</h2>
              <Input
                name="name"
                type="text"
                placeholder="Nom d'utilisateur"
                onChange={(e) => onchange(e)}
                animation="animation a2"
              />
              <p className="error">{inputErrorPseudo}</p>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                onChange={(e) => onchange(e)}
                animation="animation a3"
              />
              <p className="error">{inputErrorEmail}</p>
              <Input
                name="password"
                type="password"
                password={true}
                placeholder="Mot de passe"
                onChange={(e) => onchange(e)}
                animation="animation a4"
              />
              <p className="error">{inputErrorPassword}</p>
              <Input
                name="confirmPassword"
                type="password"
                password={true}
                placeholder="Vérification mot de passe"
                onChange={(e) => onchange(e)}
                animation="animation a5"
              />
              <p className="error">{inputErrorPasswordCopy}</p>
              <div className="submit animation a6">
                <Button
                  type="submit"
                  className="btn-secondary"
                  title="S'inscrire"
                />
                <div className="already-registered signup">
                  <p>Déjà inscrit ?</p>
                  <a href="signin">Connectez-vous</a>
                </div>
              </div>
              <p className="error">{inputError}</p>
            </form>
          </div>
          <div className="container_img_register"></div>
        </>
      ) : (
        <div className="container-auth-mobile register">
          <div className="auth-content-mobile">
            <form onSubmit={handleSubmit} className="register-form">
              <h2 className="animation a1">Créer un compte</h2>
              <Input
                name="name"
                type="text"
                placeholder="Nom d'utilisateur"
                onChange={(e) => onchange(e)}
                animation="animation a2"
              />
              <p className="error">{inputErrorPseudo}</p>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                onChange={(e) => onchange(e)}
                animation="animation a3"
              />
              <p className="error">{inputErrorEmail}</p>
              <Input
                name="password"
                type="password"
                password={true}
                placeholder="Mot de passe"
                onChange={(e) => onchange(e)}
                animation="animation a4"
              />
              <p className="error">{inputErrorPassword}</p>
              <Input
                name="confirmPassword"
                type="password"
                password={true}
                placeholder="Vérification mot de passe"
                onChange={(e) => onchange(e)}
                animation="animation a5"
              />
              <p className="error">{inputErrorPasswordCopy}</p>
              <div className="submit animation a6">
                <Button
                  type="submit"
                  className="btn-secondary"
                  title="S'inscrire"
                />
                <div className="already-registered signup">
                  <p>Déjà inscrit ?</p>
                  <a href="signin">Connectez-vous</a>
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
