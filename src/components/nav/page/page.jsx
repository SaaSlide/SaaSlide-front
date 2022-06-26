import React from 'react'
import './page.scss'
import { Content } from '../content/content'
import { SideBar } from '../sidebar/sidebar'

export const Page = (props) => {
  return (
    <div className="page">
      <SideBar routes={props.routes} />
      <Content />
    </div>
  )
}
