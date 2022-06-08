import React from 'react'

export const ImportPdf = () => {
  const onChange = (file) => {
    if (file.size > 20000000) {
      return false
    }
    return true
  }

  return (
    <div>
      <div>
        <p>POUR COMMENCER,</p>
        <p>IMPORTER VOTRE PRÉSENTATION PDF</p>
      </div>
      <form>
        <input
          onChange={(e) => onChange(e.target.files[0])}
          type="file"
          name="file"
          accept=".pdf"
        />
        <button type="submit">IMPORTER</button>
      </form>
    </div>
  )
}
