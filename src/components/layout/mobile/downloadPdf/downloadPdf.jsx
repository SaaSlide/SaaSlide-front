import React from 'react'
import './downloadPdf.scss'
import Button from '../../button/button'

export const DownloadPdf = () => {
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
          <Button
            type="button"
            title="Télécharger le PDF"
            className="btn-secondary-sm-outline"
          ></Button>
        </div>
      </div>
    </>
  )
}
