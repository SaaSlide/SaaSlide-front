import './quizz.scss'
import { LayoutWindow } from '../layoutWindow/layoutWindow'

export const Quizz = ({ setCategory }) => {
  return (
    <LayoutWindow
      setCategory={setCategory}
      title={'Ajouter un quizz'}
    ></LayoutWindow>
  )
}
