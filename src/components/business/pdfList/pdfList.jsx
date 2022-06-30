import React, { useContext, useState, useEffect } from 'react'
import './pdfList.scss'
import { TokenContext } from '../../../App'
import {
  GetAllDiapoForUser,
  DeleteDiapoById,
} from '../../../services/apiService'

export const PdfList = () => {
  const userToken = useContext(TokenContext)
  const [pdfs, setPdfs] = useState(null)
  const [isDiapoHovered, setIsDiapoHovered] = useState(false)
  const [onDeleteMessage, setOnDeleteMessage] = useState('')

  const getAllDiapo = async () => {
    let response = await GetAllDiapoForUser(userToken)
    setPdfs(response.reverse())
  }

  const deleteDiapo = async (diapoId) => {
    console.log(diapoId)
    const deleteResponse = await DeleteDiapoById(userToken, diapoId)
    // TODO: never go in if even status is 200
    // if (deleteResponse.status === 200) {
    //   setOnDeleteMessage('Fichier supprimé')
    // } else {
    //   setOnDeleteMessage('Une erreur est survenu, veuillez réesseyer')
    // }
    getAllDiapo()
  }

  useEffect(() => {
    getAllDiapo()
  }, [])

  return (
    <div>
      <h4>RECENT</h4>
      {onDeleteMessage && (
        <span
          className={
            onDeleteMessage
              ? 'importpdfContainer-status-failed'
              : 'importpdfContainer-status'
          }
        >
          {onDeleteMessage}
        </span>
      )}
      <div className="diapo-list">
        {pdfs &&
          pdfs.map((diapo) => (
            <div
              key={diapo._id}
              className="diapoCover"
              onMouseEnter={() => setIsDiapoHovered(diapo._id)}
              onMouseLeave={() => setIsDiapoHovered(false)}
            >
              <img
                className="diapoCover-img"
                src={
                  'http://localhost:4000/' +
                  diapo.infoDiapo[0].path.substring(2)
                }
                alt="Première page diaporama"
              />
              {isDiapoHovered === diapo._id && (
                <button
                  onClick={() => deleteDiapo(diapo._id)}
                  className="cross-delete"
                >
                  <img
                    src="/assets/icons/cross-delete.svg"
                    alt="Croix de suppression"
                  />
                </button>
              )}
            </div>
          ))}
      </div>
    </div>
  )
}
