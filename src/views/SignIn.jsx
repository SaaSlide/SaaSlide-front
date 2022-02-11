import Button from '../components/button'
import Input from '../components/input'

export const SignIn = () => {
  return (
    <div>
      <h2>Se Connecter</h2>
      <Input type="email" password={false} placeholder="Email" />
      <Input type="password" password={true} placeholder="Mot de passe" />
      <Button type="submit" className="btn-secondary" title="Connexion" />
    </div>
  )
}
