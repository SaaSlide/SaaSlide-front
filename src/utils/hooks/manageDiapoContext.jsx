import { createContext, useState, useContext, useEffect } from 'react'
import { TokenContext } from '../../App'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

axios.defaults.baseURL = 'http://localhost:4000'

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
  const [diapo, setDiapo] = useState()
  const [index, setIndex] = useState(0)
  const [category, setCategory] = useState('')
  const [parameters, setParameters] = useState({})
  const [sondage, setSondage] = useState([])
  const [quizz, setQuizz] = useState({})
  const [note, setNote] = useState('')

  const [userToken] = useContext(TokenContext)
  const location = useLocation()

  const id = location.pathname.replace('/diapo/', '')

  useEffect(() => {
    const fetchData = async () => {
      try {
        //vide le localstorage

        // prettier-ignore
        const headers = {
          'Authorization': `Bearer ${userToken}`
        }
        const res = await axios.get(`/diapo/${id}`, {
          headers,
        })
        setDiapo(res.data)
        setParameters({
          sendAnswer: res.data.sendAnswer,
          sendEmoji: res.data.sendEmoji,
        })
        setSondage(res.data.infoDiapo[index].surveys)
        setQuizz(res.data.infoDiapo[index].quizzs)
        setNote(res.data.infoDiapo[index].notes)
      } catch (error) {
        console.log(error)
      }
    }
    if (userToken) fetchData()
  }, [userToken])

  useEffect(() => {
    //check if not in localstorage
    if (diapo) {
      setSondage(diapo.infoDiapo[index].surveys)
      setQuizz(diapo.infoDiapo[index].quizzs)
      setNote(diapo.infoDiapo[index].notes)
    }
  }, [index, diapo])

  const saveSondage = async (body, remove = false) => {
    if (body.length < 2 && !remove) {
      toast.warn('Veuillez au moins ajoutez 2 propositions', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      return
    }
    try {
      // prettier-ignore
      const headers = {
      'Authorization': `Bearer ${userToken}`
    }
      const res = await axios.put(
        `/api/survey/${diapo.infoDiapo[index]._id}`,
        body,
        {
          headers,
        },
      )
      setSondage(body)
      toast.success('Sondage mis à jour !', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } catch (error) {
      toast.error('Une erreur est survenu...', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      console.log(error)
    }
  }
  const saveNote = async (body) => {
    try {
      // prettier-ignore
      const headers = {
      'Authorization': `Bearer ${userToken}`
    }
      const res = await axios.put(
        `/api/note/${diapo.infoDiapo[index]._id}`,
        body,
        {
          headers,
        },
      )
      setNote(body)
      toast.success('Note mis à jour !', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } catch (error) {
      toast.error('Une erreur est survenu...', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      console.log(error)
    }
  }
  const saveParams = async (body) => {
    try {
      // prettier-ignore
      const headers = {
        'Authorization': `Bearer ${userToken}`
      }
      const res = await axios.put(
        `/api/diapo/params/${diapo._id}?emoji=${body.sendEmoji}&answer=${body.sendAnswer}`,
        {
          headers,
        },
      )
      setParameters(body)
      toast.success('Paramètres mis à jour !', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } catch (error) {
      toast.error('Une erreur est survenu...', {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      console.log(error)
    }
  }

  return {
    diapo,
    category,
    setCategory,
    index,
    setIndex,
    sondage,
    saveSondage,
    quizz,
    note,
    saveNote,
    parameters,
    saveParams,
  }
}
