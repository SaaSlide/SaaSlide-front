import './content.scss'
import { Sondage } from '../sondage/sondage'
import { Parameters } from '../parameters/parameters'
import { Note } from '../note/note'
import { Quizz } from '../quizz/quizz'

export const ContentCreation = ({ category, setCategory }) => {
  const renderCategory = () => {
    switch (category) {
      case 'SONDAGE':
        return <Sondage setCategory={setCategory} />
      case 'QUIZZ':
        return <Quizz setCategory={setCategory} />
      case 'NOTE':
        return <Note setCategory={setCategory} />
      case 'PARAMETRE':
        return <Parameters setCategory={setCategory} />
      default:
        return <></>
    }
  }

  return renderCategory()
}
