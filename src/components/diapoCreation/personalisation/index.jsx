import './index.scss'

export const Personalisation = () => {
  return (
    <div className="container">
      <img src="/assets/close_big.png" alt="close" />
      <p>Paramètre de personnalisation</p>

      <div>
        <label htmlFor="envoiQuestion">Envoi de questions</label>
        <input id="envoiQuestion" type="checkbox" />
      </div>
      <div>
        <label htmlFor="envoiSmiley">Envoi de smiley</label>
        <input id="envoiSmiley" type="checkbox" />
      </div>
    </div>
  )
}
