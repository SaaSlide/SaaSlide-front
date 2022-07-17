import './presentation.scss'
import { TokenContext } from '../../../../App'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

export const PresentationHome = () => {
  let userToken = useContext(TokenContext)
  const navigate = useNavigate()
  return (
    <section className="sectionPres">
      <div className="wrap">
        <iframe
          title="presentation"
          src="https://www.youtube.com/embed/ZyKoHIXpM_I"
        />
        <div className="btnTextContainer">
          <h5>Créer votre présentation rapidement </h5>
          <div className="btnContainer">
            <button>Création</button>
            <button className="btnPres">Présentation</button>
          </div>
        </div>
      </div>
      <div className="createPres">
        <h5>
          Des présentations captivante, efficace et innovante Commencer à créer
          votre présentation
        </h5>
        <button
          onClick={() => navigate(userToken[0] ? '/managepdf' : '/signup')}
        >
          Je veux créer ma présentation
        </button>
      </div>
    </section>
  )
}
