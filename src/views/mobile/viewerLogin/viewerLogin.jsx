import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../../components/layout/input/input'
import './viewerLogin.scss'
import Logo from '../../../components/layout/logo/logo'

export const ViewerLogin = () => {
  const [userName, setUserName] = useState('')
  // let diapoId = '62c9b703a11c9881a7922083'
  let diapoId = '62c55ac9e28375493a033b11'

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
      <div className="viewer-login-container-logo">
        <Logo width="120px" />
      </div>
    </>
  )
}
