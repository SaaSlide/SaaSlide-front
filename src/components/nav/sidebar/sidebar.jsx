import React, { useContext } from 'react'
import './sidebar.scss'
import { Profile } from '../profile/profile'
import Logo from '../../logo/index'
import { Links } from '../links/links'
import { ToggleSideBarContext } from '../page/page'

export const SideBar = () => {
  const [sideBarContext, setSidebarContext] = useContext(ToggleSideBarContext)

  return (
    <div>
      {sideBarContext && (
        <div className="sidebar">
          <Logo width="140px" />
          <Links />
          <Profile />
        </div>
      )}
    </div>
  )
}
