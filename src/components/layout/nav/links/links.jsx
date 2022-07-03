import './links.scss'
import { useManageDiapo } from '../../../../utils/hooks'

export const Links = () => {
  const { category, setCategory } = useManageDiapo()

  const sondage = {
    key: 'SONDAGE',
    value: 'Sondage',
    tabIndex: 0,
    icon: '/assets/icons/sondageicon.svg',
  }
  const quizz = {
    key: 'QUIZZ',
    value: 'Quizz',
    tabIndex: 1,
    icon: '/assets/icons/quizzicon.svg',
  }
  const note = {
    key: 'NOTE',
    value: 'Note',
    tabIndex: 2,
    icon: '/assets/icons/noteicon.svg',
  }
  const parametre = {
    key: 'PARAMETRE',
    value: 'Paramètres',
    tabIndex: 3,
    icon: '/assets/icons/paramsicon.svg',
  }

  const routes = [sondage, quizz, note, parametre]

  return (
    <div className="links">
      {routes.map((elem) => (
        <div className="item" key={elem.tabIndex}>
          <div></div>
          <div className="link">
            <div
              className="onclick"
              onClick={() => setCategory(elem.key)}
              aria-hidden="true"
            >
              <div className="link-icon">
                <img src={elem.icon} alt="icon" />
              </div>
              <p className="navlink">{elem.value}</p>
            </div>
            <div className={category === elem.key && 'active'}></div>
          </div>
        </div>
      ))}
    </div>
  )
}
