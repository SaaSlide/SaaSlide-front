import './note.scss'
import { LayoutWindow } from '../layoutWindow/layoutWindow'

export const Note = ({ setCategory }) => {
  return (
    <LayoutWindow
      setCategory={setCategory}
      title={'Ajouter des notes'}
      btnDelete={false}
    >
      <textarea placeholder="Ajouter des notes" />
    </LayoutWindow>
  )
}
