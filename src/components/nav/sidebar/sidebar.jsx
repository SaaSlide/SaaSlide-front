import React from 'react'
import './sidebar.scss'
import { Profile } from '../profile/profile'
import Logo from '../../logo/index'

export const SideBar = () => {
  return (
    <div className="sidebar">
      <Logo width="100px" />
      <div>NavLinks</div>
      <Profile />
    </div>
  )
}
