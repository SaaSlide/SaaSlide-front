import React, { useContext } from 'react'
import './sidebar.scss'
import { Profile } from '../profile/profile'
import Logo from '../../logo/index'
import { ToggleSideBarContext } from '../page/page'

export const SideBar = () => {
  const [sideBarContext, setSidebarContext] = useContext(ToggleSideBarContext)

  return (
    <div>
      {sideBarContext && (
    <div className="sidebar">
      <Logo width="100px" />
      <div>NavLinks</div>
      <Profile />
        </div>
      )}
    </div>
  )
}
