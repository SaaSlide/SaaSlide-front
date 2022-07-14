import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Input from '../../../components/layout/input/input'
import './viewerLogin.scss'
import Logo from '../../../components/layout/logo/logo'

export const ViewerLogin = () => {
  const [userName, setUserName] = useState('')
  const params = { ...useParams() }

  return (
    <>
      <section className="viewer-login-container">
        <h1>BIENVENUE</h1>
        <Input onChange={(e) => setUserName(e.target.value)} label={'Nom'} />
        <button className={userName ? '' : 'disabled'}>
          <Link
            to={`/mobile/presentation/interface/${params.diapoId}`}
            state={{ userName: userName }}
          >
            Commencer
          </Link>
        </button>
        <div className="viewer-login-container-redirect">
          <Link to={`/mobile/broadcasterLogin/${params.diapoId}`}>
            Connexion
          </Link>
        </div>
      </section>
      <div className="viewer-login-container-logo">
        <Logo width="120px" />
      </div>
    </>
  )
}
