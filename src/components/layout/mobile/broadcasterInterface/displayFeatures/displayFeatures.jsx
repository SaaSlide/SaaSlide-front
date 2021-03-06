import './displayFeatures.scss'
import { useEffect, useState } from 'react'
import { GetDiapoById } from '../../../../../services/apiService'
import { ManageFeature } from '../manageFeature/manageFeature'
import { IconQuizz } from '../../../icons/quizz/quizz'
import { IconSondage } from '../../../icons/sondage/sondage'

export const DisplayFeatures = ({
  slideIndex,
  diapoInfo,
  quizzId,
  quizzQuestion,
  quizzOptions,
  quizzResponse,
  surveyId,
  surveyQuestion,
  surveyOptions,
  surveyResponse,
  numberUser,
}) => {
  const quizz = {
    color: '#3F53D9',
    title: 'quizz',
    icon: <IconQuizz size={80} color={'white'} />,
  }

  const sondage = {
    color: '#F3A953',
    title: 'survey',
    icon: <IconSondage size={80} color={'white'} />,
  }

  console.log(diapoInfo)

  return (
    <div>
      {diapoInfo && (
        <div>
          {diapoInfo?.notes.length > 0 && (
            <div>
              <h3>Notes :</h3>
              <p>{diapoInfo.notes[0].description}</p>
            </div>
          )}
          {diapoInfo?.surveys.length > 0 && (
            <ManageFeature
              slideIndex={slideIndex}
              type={sondage}
              featureId={surveyId}
              question={surveyQuestion}
              options={surveyOptions}
              featureResponse={surveyResponse}
              numberUser={numberUser}
            />
          )}
          {diapoInfo?.quizzs.length > 0 && (
            <ManageFeature
              slideIndex={slideIndex}
              type={quizz}
              featureId={quizzId}
              question={quizzQuestion}
              options={quizzOptions}
              featureResponse={quizzResponse}
              numberUser={numberUser}
            />
          )}
        </div>
      )}
    </div>
  )
}
