import './parameters.scss'

export const Parameters = () => {
  return (
    <>
      <p>Paramètre de personnalisation</p>

      <div>
        <label htmlFor="envoiQuestion">Envoi de questions</label>
        <input id="envoiQuestion" type="checkbox" />
      </div>
      <div>
        <label htmlFor="envoiSmiley">Envoi de smiley</label>
        <input id="envoiSmiley" type="checkbox" />
      </div>
    </>
  )
}
