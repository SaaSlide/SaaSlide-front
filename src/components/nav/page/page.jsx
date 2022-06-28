import React, { useState } from 'react'
import './page.scss'
import { Content } from '../content/content'
import { SideBar } from '../sidebar/sidebar'

export const ToggleSideBarContext = React.createContext()

export const Page = () => {
  const [ToggleSidebar, setToggleSidebar] = useState(true)
  return (
    <ToggleSideBarContext.Provider value={[ToggleSidebar, setToggleSidebar]}>
      <div className="page">
        <SideBar />
        <Content />
      </div>
    </ToggleSideBarContext.Provider>
  )
}
