import './header.scss'
import { useContext } from 'react'
import { TokenContext } from '../../../../App'

export const HeaderHome = () => {
  let userToken = useContext(TokenContext)
  return (
    <header className="header">
      <nav>
        <img src="/assets/images/logo_blanc.png" alt="logo" />
        {!userToken ? (
          <div>
            <a href="/signup">S'inscrire</a>
            <a href="/signin">Se connecter</a>
          </div>
        ) : (
          <div className="user-space-button">
            <a href="/managepdf">Votre espace</a>
          </div>
        )}
      </nav>
      <div className="grid">
        <div className="bg bg1">
          <div className="filterBlack" />
          <div className="textContainer textContainer1">
            <p className="title">Pour les entreprises</p>
            <p className="text">
              Parfait pour le travail d’équipe en entreprise. SaaSlide permet
              une approche collaborative entre les collaborateurs d’une
              entreprise. Parfait pour créer des quizz et sondage pour fluidifié
              sa présentation, SaaSlide s’adapte également aux nombre de
              participants apportant de l’interactivité avec l’assemblée.
            </p>
          </div>
        </div>
        <div className="bg bg2">
          {' '}
          <div className="filterBlack" />
          <div className="textContainer textContainer2">
            <p className="title">Pour les étudiants</p>
            <p className="text">
              SaaSlide apporte aux étudiants un format de présentation
              intéractif avec le reste d’une classe. Pouvant également s’adapter
              à une présentation devant un jury. SaaSlide met en avant votre
              projet en ajoutant de l’interactivité avec un jury et une
              audience.
            </p>
          </div>
        </div>
        <div className="bg bg3">
          {' '}
          <div className="filterBlack" />
          <div className="textContainer textContainer3">
            <p className="title">Pour les enseignants</p>
            <p className="text">
              Apportant une approche innovante aux présentations diaporamas.
              SaaSlide est parfait pour les enseignants permettant de mettre en
              avant des informations avec une approche plus ludique pour les
              étudiants.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
