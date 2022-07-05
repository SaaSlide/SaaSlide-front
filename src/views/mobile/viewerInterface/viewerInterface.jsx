import React from 'react'
import { useParams } from 'react-router-dom'
import './viewerInterface.scss'
import SocketProvider from '../../../utils/socket'
import Test from './test'
import Question from '../../../components/layout/mobile/question/question'

export const ViewerInterface = () => {
  const params = useParams()

  return (
    <SocketProvider room={params.diapoId} pseudo="toto">
      <div className="viewerInterface-container">
        <Test></Test>
        <Question viewer={true} />
      </div>
    </SocketProvider>
  )
}
