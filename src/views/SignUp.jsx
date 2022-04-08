import Button from '../components/button'
import Hexagon from '../components/hexagon'
import Input from '../components/input'
import Logo from '../components/logo'
import '../styles/authentification/authentification.scss'

export const SignUp = () => {
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
