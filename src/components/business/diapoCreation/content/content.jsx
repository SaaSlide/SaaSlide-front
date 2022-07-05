import './content.scss'
import { Sondage } from '../sondage/sondage'
import { Parameters } from '../parameters/parameters'
import { Note } from '../note/note'
import { Quizz } from '../quizz/quizz'
import { useManageDiapo } from '../../../../utils/hooks'

export const ContentCreation = () => {
  const { category } = useManageDiapo()

  const renderCategory = () => {
    switch (category) {
      case 'SONDAGE':
        return <Sondage />
      case 'QUIZZ':
        return <Quizz />
      case 'NOTE':
        return <Note />
      case 'PARAMETRE':
        return <Parameters />
      default:
        return <></>
    }
  }

  return renderCategory()
}
