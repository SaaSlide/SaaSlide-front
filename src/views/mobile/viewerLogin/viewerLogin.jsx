import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/layout/button/button'
import Input from '../../../components/layout/input/input'
import './viewerLogin.scss'

export const ViewerLogin = () => {
  const [name, setName] = useState('')
  let diapoId = 1234567890
  return (
    <>
      <h1>BIENVENUE</h1>
      <Input onChange={(e) => setName(e.target.value)} label={'Nom'} />
      <button>
        <Link to={`/mobile/presentation/${diapoId}`} state={name}>
          Commencer
        </Link>
      </button>
    </>
  )
}
