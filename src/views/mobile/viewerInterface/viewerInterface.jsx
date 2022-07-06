import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import SocketProvider from '../../../utils/socket'
import './viewerInterface.scss'
import { DownloadPdf } from '../../../components/layout/mobile/downloadPdf/downloadPdf'
import Test from './test'
import { GetDiapoById } from '../../../services/apiService'
import { ButtonOpenPanel } from '../../../components/layout/mobile/buttonOpenPanel/buttonOpenPanel'

export const ViewerInterface = () => {
  const [diapo, setDiapo] = useState()
  const [diapoName, setDiapoName] = useState()
  const [surveyName, setSurveyName] = useState()
  const [surveyOptions, setSurveyOptions] = useState()
  const [pageNumber, setPageNumber] = useState(1)
  const params = useParams()
  const location = useLocation()
  const { userName } = location.state

  const getDiapoInfo = async () => {
    const response = await GetDiapoById(params.diapoId)
    setDiapo(response)
    setDiapoName(response.infoDiapo[0].pathPdf.substring(2))
  }

  // when socket emit changing slide event
  const onNewSlide = () => {
    setPageNumber(pageNumber + 1)
    console.log(diapo.infoDiapo.length)
    if (pageNumber < diapo.infoDiapo.length) {
      console.log(pageNumber)
      let currentSlide = diapo.infoDiapo[pageNumber - 1]
      if (currentSlide.surveys.length) {
        setSurveyName(currentSlide.surveys[0].name)
        setSurveyOptions(currentSlide.surveys[0].survey)
      } else {
        setSurveyName()
        setSurveyOptions()
      }
    }
  }

  useEffect(() => {
    getDiapoInfo()
  }, [params.diapoId])

  return (
    <SocketProvider room={params.diapoId} pseudo={userName}>
      <h1>Bienvenue {userName}</h1>
      {surveyName && surveyOptions && (
        <ButtonOpenPanel
          type="survey"
          question={surveyName}
          options={surveyOptions}
        />
      )}
      {diapo && <DownloadPdf diapoName={diapoName} emoji={diapo.sendEmoji} />}
      <Test></Test>
      <button onClick={() => onNewSlide()}>console.log</button>
    </SocketProvider>
  )
}
