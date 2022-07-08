import React, { useContext } from 'react'
import './sidebar.scss'
import { Profile } from './profile/profile'
import Logo from '../../../logo/logo'
import { Links } from './links/links'
import { useIsMobile } from '../../../../../utils/hooks/isMobile'

export const SideBar = () => {
  const isMobile = useIsMobile()
  return (
    <div>
      {!isMobile ? (
        <div className="sidebar">
          <Logo width="140px" />
          <Links />
          <Profile />
        </div>
      ) : (
        <div className="sidebar_responsive">
          <Logo width="120px" />
          <Profile />
        </div>
      )}
    </div>
  )
}
