import { Content } from './content/content'
import { SideBar } from './sidebar/sidebar'
import './applayout.scss'
import { useState } from 'react'
import { useIsMobile } from '../../../../utils/hooks/isMobile'
import { SidebarMobile } from './sidebarMobile/sidebarMobile'

export const AppLayout = ({ component }) => {
  const isMobile = useIsMobile()
  return (
    <>
      {!isMobile ? (
        <div className={!isMobile && 'app-layout'}>
          <SideBar />
          <Content components={component} />
        </div>
      ) : (
        <div className={!isMobile && 'app-layout'}>
          <SideBar />
          <Content components={component} />
          <SidebarMobile />
        </div>
      )}
    </>
  )
}
