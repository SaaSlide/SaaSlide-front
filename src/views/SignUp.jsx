import { useState } from 'react'
import Button from '../components/button'
import Input from '../components/input'
import Logo from '../components/logo'
import '../styles/authentification/authentification.scss'
import { useNavigate } from 'react-router-dom'
import { Register } from '../services/apiService'

export const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [inputErrorPseudo, setInputErrorPseudo] = useState('')
  const [inputErrorEmail, setInputErrorEmail] = useState('')
  const [inputErrorPassword, setInputErrorPassword] = useState('')
  const [inputErrorPasswordCopy, setInputErrorPasswordCopy] = useState('')
  const [inputError, setInputError] = useState('')
  const navigate = useNavigate()

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
    if (name === 'name') {
      setInputErrorPseudo(validatePseudo(value))
    } else if (name === 'email') {
      setInputErrorEmail(validateEmail(value))
    } else if (name === 'password') {
      setInputErrorPassword(validatePassword(value))
    } else if (name === 'confirmPassword') {
      const passwordInput = document.querySelector(
        'input[name="password"]',
      ).value
      setInputErrorPasswordCopy(validateConfirmPassword(passwordInput, value))
    }
  }

  const handleSubmit = async (e) => {
    console.log('submit')
    e.preventDefault()
    let registerResponse = await Register(
      e.target[0].value,
      e.target[1].value,
      e.target[2].value,
    )
    if (registerResponse.status === 201) {
      navigate('/signin')
    } else {
      setInputError('Une erreur est survenue, veuillez réessayer')
    }
  }

  return (
    <div className="container_auth">
      <Logo width="180" />
      <div className="auth-content">
        <h2>Créer un compte</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <Input
            name="name"
            type="text"
            password={false}
            placeholder="Nom d'utilisateur"
            onChange={(e) => onchange(e)}
          />
          <p>{inputErrorPseudo}</p>
          <Input
            name="email"
            type="email"
            password={false}
            placeholder="Email"
            onChange={(e) => onchange(e)}
          />
          <p>{inputErrorEmail}</p>
          <Input
            name="password"
            type="password"
            password={true}
            placeholder="Mot de passe"
            onChange={(e) => onchange(e)}
          />
          <p>{inputErrorPassword}</p>
          <Input
            name="confirmPassword"
            type="password"
            password={true}
            placeholder="Vérification mot de passe"
            onChange={(e) => onchange(e)}
          />
          <p>{inputErrorPasswordCopy}</p>
          <Button type="submit" className="btn-secondary" title="S'inscrire" />
          {inputError}
        </form>
        <div className="already-registered signup">
          <p>Déjà inscrit ?</p>
          <a href="signin">Connectez-vous</a>
        </div>
      </div>
    </div>
  )
}
