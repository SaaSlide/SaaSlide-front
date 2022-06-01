import { useState } from 'react'
import Button from '../components/button'
import Hexagon from '../components/hexagon'
import Input from '../components/input'
import Logo from '../components/logo'
import '../styles/authentification/authentification.scss'

export const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false)

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

  return (
    <div className="container_auth">
      <Logo width="180" />
      <div className="auth-content">
        <h2>Créer un compte</h2>
        <form className="register-form">
          <Input type="text" password={false} placeholder="Nom d'utilisateur" />
          <Input type="email" password={false} placeholder="Email" />
          <Input type="password" password={true} placeholder="Mot de passe" />
          <Input
            type="password"
            password={true}
            placeholder="Vérification mot de passe"
          />
          <Button type="submit" className="btn-secondary" title="S'inscrire" />
        </form>
        <div className="already-registered">
          <p>Déjà inscrit ?</p>
          <a href="signin">Connectez-vous</a>
        </div>
      </div>
      <Hexagon className="vector" width="345" backgroundColor="#F3A953" />
    </div>
  )
}
