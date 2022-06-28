import { useState } from 'react'
import './links.scss'

export const Links = () => {
  const sondage = {
    key: 'SONDAGE',
    value: 'Sondage',
    tabIndex: 0,
    icon: '/assets/sondageicon.svg',
  }
  const quizz = {
    key: 'QUIZZ',
    value: 'Quizz',
    tabIndex: 1,
    icon: '/assets/quizzicon.svg',
  }
  const note = {
    key: 'NOTE',
    value: 'Note',
    tabIndex: 2,
    icon: '/assets/noteicon.svg',
  }
  const parametre = {
    key: 'PARAMETRE',
    value: 'Paramètres',
    tabIndex: 3,
    icon: '/assets/paramsicon.svg',
  }

  const routes = [sondage, quizz, note, parametre]

  const [link, setLink] = useState('')

  return (
    <div className="links">
      {routes.map((elem) => (
        <div className="item" key={elem.tabIndex}>
          <div></div>
          <div className="link">
            <div
              className="onclick"
              onClick={() => setLink(elem.key)}
              aria-hidden="true"
            >
              <div className="link-icon">
                <img src={elem.icon} alt="icon" />
              </div>
              <p className="navlink">{elem.value}</p>
            </div>
            <div className={link === elem.key && 'active'}></div>
          </div>
        </div>
      ))}
    </div>
  )
}
