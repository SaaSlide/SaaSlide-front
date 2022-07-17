import React from 'react'
import Smiley from '../smiley/smiley'
import './downloadPdf.scss'

export const DownloadPdf = ({ diapoPath, emoji = true }) => {
  return (
    <>
      <div className="dld-pdf">
        <Smiley />
        <div className="dld-pdf-btn">
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
