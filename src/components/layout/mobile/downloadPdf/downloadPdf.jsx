import React from 'react'
import './downloadPdf.scss'

export const DownloadPdf = ({ diapoPath, emoji }) => {
  // give info to emoji modal if they are available
  console.log(emoji)
  return (
    <>
      <div className="dld-pdf">
        <div>
          <a className="dld-pdf-smiley" href="">
            Smiley
          </a>
          <img
            className="dld-pdf-img"
            src="/assets/icons/chevron_big_right.svg"
            alt=""
          />
        </div>
        <div className="dld-pdf-btn">
          <a
            className="btn-secondary-sm-outline"
            href={`http://localhost:4000/${diapoPath}`}
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
