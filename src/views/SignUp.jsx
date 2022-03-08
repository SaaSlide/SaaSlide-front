import Button from '../components/button'
import Input from '../components/input'
import '../styles/authentification/authentification.scss'

export const SignUp = () => {
  return (
    <div className="container_auth">
      <div className="auth-content">
        <h2>Créer un compte</h2>
        <Input type="text" password={false} placeholder="Nom d'utilisateur" />
        <Input type="email" password={false} placeholder="Email" />
        <Input type="password" password={true} placeholder="Mot de passe" />
        <Input
          type="password"
          password={true}
          placeholder="Vérification mot de passe"
        />
        <Button type="submit" className="btn-secondary" title="S'inscrire" />
        <div className="already-registered">
          <p>Déjà inscrit ?</p>
          <a>Connectez-vous</a>
        </div>
      </div>
    </div>
  )
}
