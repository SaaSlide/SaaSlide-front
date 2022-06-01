import Button from '../components/button'
import Input from '../components/input'
import Logo from '../components/logo'

export const SignIn = () => {
  return (
    <div className="container_auth">
      <Logo width="180" />
      <div className="auth-content login">
        <h2>Se Connecter</h2>
        <form className="login-form">
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
