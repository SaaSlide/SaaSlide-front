import React, { useContext } from 'react'
import { ToggleSideBarContext } from '../page/page'
import './content.scss'

export const Content = () => {
  const [sideBarContext, setSidebarContext] = useContext(ToggleSideBarContext)
  return (
    <div className="content">
      <h1>Bonjour</h1>
      <button
        className="test"
        onClick={() => setSidebarContext(!sideBarContext)}
      >
        Sidebar OFF
      </button>
    </div>
  )
}
