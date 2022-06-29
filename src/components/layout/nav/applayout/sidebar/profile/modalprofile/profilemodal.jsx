import './profilemodal.scss'
import Button from '../../../../../button/button'

export const ProfileModal = (props) => {
  return (
    <div className="modal-profile">
      <div className="modal-container">
        <div className="modal">
          <div>
            <div className="modal-buttons">
              <Button className="btn-secondary" title="Enregistrer" />
              <Button className="btn-danger" title="Déconnexion" />
              <Button
                className="btn-danger-outline"
                title="Supprimer mon compte"
              />
            </div>
            <button onClick={() => props.closeModal(false)}>
              <img src="/assets/close.svg" alt="close" />
            </button>
          </div>
          <div>
            <img src="" alt="" />
            <form action="">
              <h1>Information Générale</h1>
              <h1>Modifier votre mot de passe</h1>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
