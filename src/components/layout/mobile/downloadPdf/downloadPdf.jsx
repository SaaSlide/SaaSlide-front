import React from 'react'
import Smiley from '../smiley/smiley'
import './downloadPdf.scss'

export const DownloadPdf = ({ diapoPath, emoji }) => {
  return (
    <>
      <div className="dld-pdf">
        {emoji && <Smiley />}
        <div className={`dld-pdf-btn ${emoji ? 'mt' : ''}`}>
          <a
            className="btn-secondary-sm-outline"
            href={`${process.env.REACT_APP_API_BASE_URL}/${diapoPath}`}
            download="Présentation"
            target="_blank"
            rel="noreferrer"
          >
            Télécharger le PDF
          </a>
        </div>
      </div>
    </>
  )
}
