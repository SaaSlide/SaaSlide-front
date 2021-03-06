import React, { useContext, useState, useEffect } from 'react'
import './pdfList.scss'
import { TokenContext } from '../../../App'
import {
  GetAllDiapoForUser,
  DeleteDiapoById,
} from '../../../services/apiService'
import { useIsMobile } from '../../../utils/hooks'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

export const PdfList = () => {
  const userToken = useContext(TokenContext)
  const [pdfs, setPdfs] = useState(undefined)
  const [isDiapoHovered, setIsDiapoHovered] = useState(false)
  const [onDeleteMessage, setOnDeleteMessage] = useState('')
  const isMobile = useIsMobile()

  const getAllDiapo = async (token) => {
    let response = await GetAllDiapoForUser(token)
    if (response) {
      setPdfs(response.reverse())
    } else {
      setPdfs(null)
    }
  }

  const deleteDiapo = async (diapoId) => {
    const deleteResponse = await DeleteDiapoById(userToken, diapoId)

    if (deleteResponse) {
      setOnDeleteMessage('Fichier supprimé !')
    } else {
      setOnDeleteMessage('Une erreur est survenu, veuillez réesseyer')
    }
    getAllDiapo(userToken)
  }

  useEffect(() => {
    userToken[0] && getAllDiapo(userToken)
  }, [userToken])

  return (
    <div
      className={
        isMobile ? 'diapo_list_container_mobile' : 'diapo_list_container'
      }
    >
      <div className="diapo_list_title">
        <h4>RÉCENT</h4>
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
      </div>
      {!isMobile ? (
        <SimpleBar autoHide={false} style={{ maxHeight: 300 }}>
          <div className="diapo-list">
            {pdfs &&
              pdfs.map((diapo) => {
                return (
                  <div
                    key={diapo._id}
                    className="diapoCover"
                    onMouseEnter={() => setIsDiapoHovered(diapo._id)}
                    onMouseLeave={() => setIsDiapoHovered(false)}
                  >
                    <a href={`/diapo/create/${diapo._id}`}>
                      <img
                        className="diapoCover-img"
                        src={
                          process.env.REACT_APP_API_BASE_URL +
                          '/' +
                          diapo.infoDiapo[0].path.substring(2)
                        }
                        alt="Première page diaporama"
                      />
                    </a>
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
                )
              })}
          </div>
        </SimpleBar>
      ) : (
        <div className="diapo-list">
          {pdfs &&
            pdfs.map((diapo) => {
              return (
                <div key={diapo._id} className="diapoCover">
                  <img
                    className="diapoCover-img"
                    src={
                      process.env.REACT_APP_API_BASE_URL +
                      '/' +
                      diapo.infoDiapo[0].path.substring(2)
                    }
                    alt="Première page diaporama"
                  />

                  <button
                    onClick={() => deleteDiapo(diapo._id)}
                    className="cross-delete-mobile"
                  >
                    <img
                      src="/assets/icons/cross-delete.svg"
                      alt="Croix de suppression"
                    />
                  </button>
                </div>
              )
            })}
        </div>
      )}
    </div>
  )
}
