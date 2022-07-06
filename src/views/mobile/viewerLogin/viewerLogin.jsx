import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../../components/layout/input/input'
import './viewerLogin.scss'

export const ViewerLogin = () => {
  const [userName, setUserName] = useState('')
  let diapoId = '62c4a467d5e918f74b996dbe'

  return (
    <>
      <section className="viewer-login-container">
        <h1>BIENVENUE</h1>
        <Input onChange={(e) => setUserName(e.target.value)} label={'Nom'} />
        <button className={userName ? '' : 'disabled'}>
          <Link
            to={`/mobile/presentation/${diapoId}`}
            state={{ userName: userName }}
          >
            Commencer
          </Link>
        </button>
        <div className="viewer-login-container-redirect">
          <Link to={''}>Connexion</Link>
        </div>
      </section>
    </>
  )
}
