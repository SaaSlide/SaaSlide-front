import { Content } from './content/content'
import { SideBar } from './sidebar/sidebar'
import './applayout.scss'
import { useState } from 'react'
import { useIsMobile } from '../../../../utils/hooks/isMobile'
import { SidebarMobile } from './sidebarMobile/sidebarMobile'

export const AppLayout = ({ component }) => {
  const [category, setCategory] = useState('')
  const isMobile = useIsMobile()
  return (
    <>
      {!isMobile ? (
        <div className={!isMobile && 'app-layout'}>
          <SideBar category={category} setCategory={setCategory} />
          <Content components={component} category={category} />
        </div>
      ) : (
        <div className={!isMobile && 'app-layout'}>
          <SideBar category={category} setCategory={setCategory} />
          <Content components={component} category={category} />
          <SidebarMobile category={category} setCategory={setCategory} />
        </div>
      )}
    </>
  )
}
