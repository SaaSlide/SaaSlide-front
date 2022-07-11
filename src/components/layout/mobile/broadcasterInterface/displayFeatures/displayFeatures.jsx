import './displayFeatures.scss'
import { useEffect, useState } from 'react'
import { GetDiapoById } from '../../../../../services/apiService'
import { ManageFeature } from '../manageFeature/manageFeature'
import { IconQuizz } from '../../../icons/quizz/quizz'
import { IconSondage } from '../../../icons/sondage/sondage'

export const DisplayFeatures = ({ diapoInfo }) => {
  const [actualPage, setActualPage] = useState()

  const quizz = {
    color: '#3F53D9',
    title: 'Quizz',
    icon: <IconQuizz size={80} color={'white'} />,
  }

  const sondage = {
    color: '#F3A953',
    title: 'Sondage',
    icon: <IconSondage size={80} color={'white'} />,
  }

  const getDiapoInfo = async () => {
    console.log('hello je suis ici')
    const response = await GetDiapoById(diapoInfo.id)
    console.log('res', response)
    setActualPage(response)
  }

  useEffect(() => {
    getDiapoInfo()
  }, [diapoInfo])

  return (
    <div>
      {actualPage && (
        <div>
          <h1>{diapoInfo?.page}</h1>
          {actualPage?.notes && (
            <div>
              <h3>Notes :</h3>
              <p>
                {diapoInfo?.notes.map((note) => (
                  <p key={note}>{note}</p>
                ))}
              </p>
            </div>
          )}
          {actualPage?.surveys.length > 0 && <ManageFeature type={sondage} />}
          {actualPage?.quizzs.length > 0 && <ManageFeature type={quizz} />}
        </div>
      )}
    </div>
  )
}
