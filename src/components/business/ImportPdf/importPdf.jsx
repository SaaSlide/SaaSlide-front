import React, { useContext, useState } from 'react'
import { TokenContext } from '../../../App'
import { AddNewPdf } from '../../../services/apiService'
import Button from '../../layout/button/button'
import './importPdf.scss'
import { useIsMobile } from '../../../utils/hooks'

export const ImportPdf = () => {
  let userToken = useContext(TokenContext)
  let [pdfName, setPdfName] = useState('')
  let [errorOnImport, setErrorOnImport] = useState('')
  const isMobile = useIsMobile()
  const onChange = (file) => {
    if (file.size > 20000000) {
      setErrorOnImport('Fichier trop gros !')
      setPdfName('')
      return false
    }
    setErrorOnImport('')
    setPdfName(file.name)
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setPdfName('Chargement...')
    const addNewPdfResponse = await AddNewPdf(
      userToken,
      e.target.children[0].firstChild.firstChild.files[0],
    )
    if (addNewPdfResponse.status === 200) {
      // TODO: reload pdf list
      console.log(addNewPdfResponse)
      setPdfName('Fichier importé !')
    } else {
      // TODO: state for display error
      console.log(addNewPdfResponse)
    }
  }

  return (
    <div className="importpdfContainer-background">
      <div
        className={isMobile ? 'importpdfContainerMobile' : 'importpdfContainer'}
      >
        <div className="importpdfContainer-title">
          {isMobile ? (
            <>
              <h5>Pour commencer,</h5>
              <h5>Importer votre présentation PDF</h5>
            </>
          ) : (
            <>
              <h3>POUR COMMENCER,</h3>
              <h3>IMPORTER VOTRE PRÉSENTATION PDF</h3>
            </>
          )}
        </div>
        <p className="importpdfContainer-subtitle">PDF de 20mo max</p>
        <form onSubmit={handleSubmit} className="importpdfContainer-form">
          <div>
            <label
              htmlFor="file"
              className={
                isMobile
                  ? 'button-sm-label btn-secondary-label'
                  : 'button-label btn-secondary-label'
              }
            >
              <input
                className="importpdfContainer-input"
                onChange={(e) => onChange(e.target.files[0])}
                type="file"
                name="file"
                accept=".pdf"
                id="file"
              />
              Choisir le PDF
            </label>
            <p
              className={
                pdfName
                  ? 'importpdfContainer-status'
                  : 'importpdfContainer-status-failed'
              }
            >
              {pdfName || errorOnImport}
            </p>
          </div>
          <div>
            <Button
              type="submit"
              className={
                isMobile ? 'btn-secondary-sm-outline' : 'btn-secondary-outline'
              }
              title="Importer le PDF"
            />
          </div>
        </form>
      </div>
    </div>
  )
}
