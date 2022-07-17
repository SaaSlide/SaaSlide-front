import React, { useContext } from 'react'
import './sidebar.scss'
import { Profile } from './profile/profile'
import Logo from '../../../logo/logo'
import { Links } from './links/links'
import { useIsMobile } from '../../../../../utils/hooks/isMobile'
import { useLocation } from 'react-router-dom'

export const SideBar = () => {
  const isMobile = useIsMobile()
  const location = useLocation()

  return (
    <div>
      {!isMobile ? (
        <div className="sidebar">
          <Logo width="140px" />
          {location.pathname.includes('/diapo/create/') && <Links />}
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
