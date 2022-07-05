import './note.scss'
import { LayoutWindow } from '../layoutWindow/layoutWindow'
import { useEffect, useState } from 'react'
import { useManageDiapo } from '../../../../utils/hooks'

export const Note = () => {
  const { note, saveNote, index } = useManageDiapo()

  const [tempNote, setTempNote] = useState(note)

  // useEffect(async () => {
  //   const newNote = await getNote()
  //   setNote(newNote)
  // }, [index])

  useEffect(() => {
    setTempNote(note)
  }, [index])

  return (
    <LayoutWindow
      title={'Ajouter des notes'}
      onSave={() => saveNote(tempNote)}
      btnDelete={false}
    >
      <textarea
        placeholder="Ajouter des notes à votre slide"
        value={tempNote}
        onChange={(e) => setTempNote(e.target.value)}
      />
    </LayoutWindow>
  )
}
