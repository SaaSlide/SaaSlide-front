import React, { useContext, useState } from 'react'
import './sidebarMobile.scss'
import { Links } from '../sidebar/links/links'
import { useIsMobile } from '../../../../../utils/hooks/isMobile'
import { LinksResponsive } from '../sidebar/links/linksResponsive'

export const SidebarMobile = () => {
  const isMobile = useIsMobile()
  const [openLinks, setOpenLinks] = useState(false)

  const handleOpenLinks = () => {
    setOpenLinks(true)
  }

  const handleCloseLinks = () => {
    setOpenLinks(false)
    console.log('okkkkkk')
  }

  return (
    <div>
      <div className="sidebarMobile">
        {!openLinks ? (
          <button className="button_plus" onClick={handleOpenLinks}>
            <img className="plus" src="/assets/icons/plus.svg" alt="plus" />
          </button>
        ) : (
          <>
            <div className="open_links">
              <button className="button_plus" onClick={handleCloseLinks}>
                <img
                  className="plus"
                  src="/assets/icons/minus.svg"
                  alt="moins"
                />
              </button>
              <Links />
            </div>
          </>
        )}
        <ul className="links_sidebar_responsive">
          <li className={openLinks && 'li_open_links'}>
            <img src="/assets/icons/home_alt_outline.svg" alt="logo home" />
            <p>Home</p>
          </li>
          <li className={openLinks && 'li_open_links'}>
            <LinksResponsive />
          </li>
        </ul>
      </div>
    </div>
  )
}
