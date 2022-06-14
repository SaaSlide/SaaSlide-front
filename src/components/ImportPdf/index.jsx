import React, { useContext } from 'react'
import { TokenContext } from '../../App'
import { AddNewPdf } from '../../services/apiService'
import Button from '../button'

export const ImportPdf = () => {
  let userToken = useContext(TokenContext)
  const onChange = (file) => {
    if (file.size > 20000000) {
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const addNewPdfResponse = await AddNewPdf(
      userToken,
      e.target.firstChild.files[0],
    )
    if (addNewPdfResponse.status === 200) {
      // TODO: reload pdf list
      console.log(addNewPdfResponse)
    } else {
      // TODO: state for display error
      console.log(addNewPdfResponse)
    }
  }

  return (
    <div>
      <div>
        <p>POUR COMMENCER,</p>
        <p>IMPORTER VOTRE PRÉSENTATION PDF</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => onChange(e.target.files[0])}
          type="file"
          name="file"
          accept=".pdf"
        />
        <Button
          type="submit"
          className="btn-secondary"
          title="Importer le PDF"
        />
      </form>
    </div>
  )
}
