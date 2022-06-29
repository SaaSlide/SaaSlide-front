import React, { useContext } from 'react'
import './sidebar.scss'
import { Profile } from '../profile/profile'
import Logo from '../../logo/logo'
import { Links } from '../links/links'

export const SideBar = ({ category, setCategory }) => {
  return (
    <div>
      <div className="sidebar">
        <Logo width="140px" />
        <Links category={category} setCategory={setCategory} />
        <Profile />
      </div>
    </div>
  )
}
