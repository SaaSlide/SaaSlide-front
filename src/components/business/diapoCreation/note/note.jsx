import './note.scss'
import { LayoutWindow } from '../layoutWindow/layoutWindow'
import { useState } from 'react'

export const Note = ({ setCategory }) => {
  const [note, setNote] = useState('')
  return (
    <LayoutWindow
      setCategory={setCategory}
      title={'Ajouter des notes'}
      btnDelete={false}
    >
      <textarea
        placeholder="Ajouter des notes"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
    </LayoutWindow>
  )
}
