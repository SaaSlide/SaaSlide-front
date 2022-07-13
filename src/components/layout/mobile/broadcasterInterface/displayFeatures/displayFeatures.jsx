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
  const [actualPage, setActualPage] = useState()

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

  return (
    <div>
      {diapoInfo && (
        <div>
          <h1>{diapoInfo?.page}</h1>
          {diapoInfo?.notes && (
            <div>
              <h3>Notes :</h3>
              <p>
                {diapoInfo?.notes.map((note) => (
                  <p key={note}>{note}</p>
                ))}
              </p>
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
