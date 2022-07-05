import React, { useContext } from 'react'
import './sidebarMobile.scss'
import { Links } from '../sidebar/links/links'
import { useIsMobile } from '../../../../../utils/hooks/isMobile'

export const SidebarMobile = ({ category, setCategory }) => {
  const isMobile = useIsMobile()
  return (
    <div>
      <div className="sidebarMobile">
        <img className="plus" src="/assets/icons/plus.svg" alt="plus" />
        <ul className="links">
          <li>
            <img src="/assets/icons/home_alt_outline.svg" alt="logo home" />
            <p>Home</p>
          </li>
          <li className="settings">
            <img src="/assets/icons/settings.svg" alt="logo settings" />
            <p>Paramètre</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
