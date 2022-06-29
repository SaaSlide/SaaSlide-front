import { Content } from './content/content'
import { SideBar } from './sidebar/sidebar'
import './applayout.scss'
import { useState } from 'react'

export const AppLayout = ({ component }) => {
  const [category, setCategory] = useState('')

  return (
    <div className="app-layout">
      <SideBar category={category} setCategory={setCategory} />
      <Content components={component} category={category} />
    </div>
  )
}
