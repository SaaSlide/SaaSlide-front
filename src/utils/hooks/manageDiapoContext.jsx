import { createContext, useState, useContext, useEffect } from 'react'

export const ManageDiapoContext = createContext()

export function ProvideManageDiapo({ children }) {
  const data = useProvideManageDiapo()
  return (
    <ManageDiapoContext.Provider value={data}>
      {children}
    </ManageDiapoContext.Provider>
  )
}

export const useManageDiapo = () => {
  return useContext(ManageDiapoContext)
}

function useProvideManageDiapo() {
  const [diapo, setDiapo] = useState({})
  const [index, setIndex] = useState(0)
  const [category, setCategory] = useState('')
  const [parameters, setParameters] = useState({})
  const [sondage, setSondage] = useState([])
  const [quizz, setQuizz] = useState({})
  const [note, setNote] = useState('')

  useEffect(() => {
    console.log('fetch data')

    //vide le localstorage
    //fetch les data

    // setDiapo(data.infoDiapo)
    // setParameters({ sendAnswer: data.sendAnswer, sendEmoji: data.sendEmoji })
  }, [])

  useEffect(() => {
    console.log('index changing')
    //check if not in localstorage
    //fetch everything with the page id

    setSondage([Math.random(), Math.random(), Math.random()])
    // setQuizz()
    // setNote()
  }, [index])

  return {
    category,
    setCategory,
    index,
    setIndex,
    sondage,
  }
}
