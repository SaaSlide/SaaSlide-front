import React from 'react'
import Smiley from '../smiley/smiley'
import './downloadPdf.scss'

export const DownloadPdf = ({ diapoName, emoji = true }) => {
  // give info to emoji modal if they are available
  return (
    <>
      <div className="dld-pdf">
        <Smiley />
        <div className="dld-pdf-btn">
          <a
            className="btn-secondary-sm-outline"
            href={`http://localhost:4000/${diapoName}`}
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
