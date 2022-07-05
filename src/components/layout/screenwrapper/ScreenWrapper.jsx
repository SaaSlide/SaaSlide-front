import React from 'react'
import './screenwrapper.scss'

const ScreenWrapper = (props) => {
  return <div className="containerScreen"> {props.children}</div>
}

export default ScreenWrapper
