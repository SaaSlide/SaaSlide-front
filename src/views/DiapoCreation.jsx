import { LayoutCreation, ContentCreation } from '../components'
import { useState } from 'react'

export const DiapoCreation = () => {
  const [category, setCategory] = useState('')

  //   {
  //     "_id": "62b9c10442d4ae9b5863d051",
  //     "infoDiapo": [
  //         {
  //             "_id": "62b9c10442d4ae9b5863d04d",
  //             "path": "./public/pdfToPng/1656340739454.1.png",
  //             "page": 1
  //         },
  //         {
  //             "_id": "62b9c10442d4ae9b5863d04f",
  //             "path": "./public/pdfToPng/1656340739454.2.png",
  //             "page": 2
  //         }
  //     ],
  //     "sendAnswer": false,
  //     "sendEmoji": false
  // },
  return (
    <LayoutCreation category={category} setCategory={setCategory}>
      <ContentCreation category={category} setCategory={setCategory} />
    </LayoutCreation>
  )
}
