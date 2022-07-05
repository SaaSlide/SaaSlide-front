import React, { useContext, useState } from 'react'
import './sidebarMobile.scss'
import { Links } from '../sidebar/links/links'
import { useIsMobile } from '../../../../../utils/hooks/isMobile'

export const SidebarMobile = ({ category, setCategory }) => {
  const isMobile = useIsMobile()
  const [openLinks, setOpenLinks] = useState(false)
  console.log(openLinks)

  const handleOpenLinks = () => {
    console.log(openLinks)
    setOpenLinks(true)
  }

  const handleCloseLinks = () => {
    console.log(openLinks)
    setOpenLinks(false)
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
            </div>
          </>
        )}
        <ul className="links">
          <li className={openLinks && 'li_open_links'}>
            <img src="/assets/icons/home_alt_outline.svg" alt="logo home" />
            <p>Home</p>
          </li>
          <li className={openLinks && 'li_open_links'}>
            <img src="/assets/icons/settings.svg" alt="logo settings" />
            <p>Paramètre</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
