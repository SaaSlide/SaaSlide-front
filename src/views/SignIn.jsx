import Button from '../components/button'
import Input from '../components/input'

export const SignIn = () => {
  return (
    <div className="container_auth">
      <div className="auth-content">
        <h2>Se Connecter</h2>
        <div className="input-content">
          <Input type="email" password={false} placeholder="Email" />
          <Input type="password" password={true} placeholder="Mot de passe" />
        </div>
        <Button type="submit" className="btn-secondary" title="Connexion" />
        <div className="already-registered">
          <p>Pas encore inscrit ?</p>
          <a href="/signup">Créer un compte</a>
        </div>
      </div>
    </div>
  )
}
