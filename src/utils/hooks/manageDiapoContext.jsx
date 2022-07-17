import { createContext, useState, useContext, useEffect, useMemo } from 'react'
import { TokenContext } from '../../App'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL

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
  const surveyModel = useMemo(() => {
    return {
      name: '',
      survey: [
        { proposition: 'Proposition 1' },
        { proposition: 'Proposition 2' },
      ],
    }
  })

  const quizzModel = useMemo(() => {
    return {
      question: '',
      possibilities: [
        { choice: 'Choix 1', answer: true },
        { choice: 'Choix 2', answer: false },
      ],
    }
  })

  const noteModel = useMemo(() => {
    return { description: '' }
  })

  const [diapo, setDiapo] = useState()
  const [index, setIndex] = useState(0)
  const [category, setCategory] = useState('')
  const [parameters, setParameters] = useState({})
  const [sondage, setSondage] = useState(surveyModel)
  const [quizz, setQuizz] = useState(quizzModel)
  const [note, setNote] = useState(noteModel)

  const [userToken] = useContext(TokenContext)
  const location = useLocation()

  const id = location.pathname.replace('/diapo/create/', '')

  useEffect(() => {
    const fetchData = async () => {
      try {
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
        checkExistence(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    if (userToken) fetchData()
  }, [userToken])

  useEffect(() => {
    checkExistence(diapo)
  }, [index, category, diapo])

  const updateDiapo = (type, newValue) => {
    let newDiapo = { ...diapo }
    newDiapo.infoDiapo[index][type][0] = newValue
    setDiapo(newDiapo)
  }
  const checkExistence = (diapo) => {
    if (diapo) {
      if (diapo.infoDiapo[index].surveys.length > 0) {
        setSondage(diapo.infoDiapo[index].surveys[0])
      } else {
        setSondage(surveyModel)
      }
      if (diapo.infoDiapo[index].quizzs.length > 0) {
        setQuizz(diapo.infoDiapo[index].quizzs[0])
      } else {
        setQuizz(quizzModel)
      }
      if (diapo.infoDiapo[index].notes.length > 0) {
        setNote(diapo.infoDiapo[index].notes[0])
      } else {
        setNote(noteModel)
      }
    }
  }

  const saveSondage = async (body) => {
    if (body.length < 2) {
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
      let res
      if (body._id) {
        res = await axios.put(`/api/survey/${body._id}`, body, {
          headers,
        })
      } else {
        res = await axios.post(
          `/api/survey/${diapo.infoDiapo[index]._id}`,
          body,
          {
            headers,
          },
        )
      }

      updateDiapo('surveys', res.data)

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
  const removeSondage = async (id) => {
    try {
      // prettier-ignore
      const headers = {
      'Authorization': `Bearer ${userToken}`
    }
      const res = await axios.delete(`/api/survey/${id}`, {
        headers,
      })
      setCategory('')
      setSondage(surveyModel)
      updateDiapo('surveys', surveyModel)
      toast.success('Sondage supprimé', {
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

  const saveQuizz = async (body) => {
    console.log(body)
    if (body.length < 2) {
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
      let res
      if (body._id) {
        res = await axios.put(`/api/quizz/${body._id}`, body, {
          headers,
        })
      } else {
        res = await axios.post(
          `/api/quizz/${diapo.infoDiapo[index]._id}`,
          body,
          {
            headers,
          },
        )
      }
      console.log(res.data)

      updateDiapo('quizzs', res.data)

      toast.success('Quizz mis à jour !', {
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
  const removeQuizz = async (id) => {
    try {
      // prettier-ignore
      const headers = {
      'Authorization': `Bearer ${userToken}`
    }
      const res = await axios.delete(`/api/quizz/${id}`, {
        headers,
      })
      setCategory('')
      setQuizz(quizzModel)
      updateDiapo('quizzs', quizzModel)
      toast.success('Quizz supprimé', {
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
  const removeNote = async (id) => {
    try {
      // prettier-ignore
      const headers = {
      'Authorization': `Bearer ${userToken}`
    }
      const res = await axios.delete(`/api/note/${id}`, {
        headers,
      })
      setCategory('')
      setNote(noteModel)
      updateDiapo('notes', noteModel)
      toast.success('Note supprimé', {
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
      let res
      if (body._id) {
        res = await axios.put(`/api/note/${body._id}`, body, {
          headers,
        })
      } else {
        res = await axios.post(
          `/api/note/${diapo.infoDiapo[index]._id}`,
          body,
          {
            headers,
          },
        )
      }

      updateDiapo('notes', res.data)

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
        '',
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
    removeSondage,
    quizz,
    saveQuizz,
    removeQuizz,
    note,
    saveNote,
    removeNote,
    parameters,
    saveParams,
  }
}
