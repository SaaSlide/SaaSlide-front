import './note.scss'
import { LayoutWindow } from '../layoutWindow/layoutWindow'
import { useEffect, useState } from 'react'
import { useManageDiapo } from '../../../../utils/hooks'

export const Note = () => {
  const { note, removeNote, saveNote } = useManageDiapo()

  const [tempNote, setTempNote] = useState(note)

  useEffect(() => {
    setTempNote(note)
  }, [note])

  return (
    <LayoutWindow
      title={'Ajouter des notes'}
      onSave={() => saveNote(tempNote)}
      onDelete={() => removeNote(tempNote._id)}
      btnDelete={tempNote._id ? true : false}
    >
      <textarea
        placeholder="Ajouter des notes à votre slide"
        value={tempNote.description}
        onChange={(e) =>
          setTempNote({ ...tempNote, description: e.target.value })
        }
      />
    </LayoutWindow>
  )
}
