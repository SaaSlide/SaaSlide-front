import './profilemodal.scss'
import Button from '../../../../../button/button'
import Input from '../../../../../input/input'
import { useState, useContext } from 'react'
import {
  DeleteCookie,
  UpdateUserProfile,
} from '../../../../../../../services/apiUser'
import { useNavigate } from 'react-router-dom'
import { TokenContext } from '../../../../../../../App'

export const ProfileModal = (props) => {
  const [name, setName] = useState(props.profile.name)
  const [email, setEmail] = useState(props.profile.mail)
  const [context, setContext] = useContext(TokenContext)
  const navigate = useNavigate()

  const updateProfile = (event) => {
    UpdateUserProfile()
  }

  const LogOut = () => {
    DeleteCookie()
    setContext('')
    navigate('/signin')
  }

  const deleteAccount = () => {
    DeleteCookie()
    setContext('')
    navigate('/')
  }

  const handleChangeName = (event) => {
    event.preventDefault()
    setName(event.target.value)
  }

  const handleChangeMail = (event) => {
    event.preventDefault()
    setEmail(event.target.value)
  }

  return (
    <div className="modal-profile">
      <div className="modal-container">
        <div className="modal">
          <div className="modal-buttons">
            <div className="modal-buttons">
              <Button
                form="edit-profile"
                type="submit"
                className="btn-secondary"
                title="Enregistrer"
              />
              <Button
                type="button"
                onClick={() => LogOut()}
                className="btn-danger"
                title="Déconnexion"
              />
              <Button
                className="btn-danger-outline"
                title="Supprimer mon compte"
              />
            </div>
            <img
              onClick={() => props.closeModal(false)}
              src="/assets/close.svg"
              alt="close"
              aria-hidden="true"
            />
          </div>
          <div>
            <form
              onSubmit={updateProfile}
              id="edit-profile"
              className="modal-form"
            >
              <div className="edit-profile-pic">
                <div className="icon-profile-edit">
                  <label className="icon-profile-edit" htmlFor="avatar">
                    <input
                      type="file"
                      id="avatar"
                      name="avatar"
                      accept="image/png, image/jpeg"
                    />
                    <img src="/assets/icons/noteicon.svg" alt="test" />
                  </label>
                </div>
              </div>
              <div className="modal-form-section">
                <h1>Information Générale</h1>
                <div className="modify-profile-inputs">
                  <Input
                    onChange={(e) => handleChangeName(e)}
                    value={name}
                    label="Nom d’utilisateur"
                  />
                  <Input
                    onChange={(e) => handleChangeMail(e)}
                    value={email}
                    label="Votre email"
                  />
                </div>
              </div>
              <div className="modal-form-section">
                <h1>Modifier votre mot de passe</h1>
                <div className="modify-profile-inputs">
                  <Input password={true} label="Nouveau mot de passe" />
                  <Input password={true} label="Confirmer votre mot de passe" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
