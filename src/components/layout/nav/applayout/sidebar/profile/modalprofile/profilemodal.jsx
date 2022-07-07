import './profilemodal.scss'
import Button from '../../../../../button/button'
import Input from '../../../../../input/input'
import { useState, useContext } from 'react'
import {
  DeleteCookie,
  DeleteUserProfile,
  UpdateUserProfile,
} from '../../../../../../../services/apiUser'
import { useNavigate } from 'react-router-dom'
import { TokenContext } from '../../../../../../../App'
import { IconNote } from '../../../../../icons/note/iconnote'

export const ProfileModal = (props) => {
  const [name, setName] = useState(props.profile.name)
  const [email, setEmail] = useState(props.profile.mail)
  const [context, setContext] = useContext(TokenContext)
  const [errorOnImport, setErrorOnImport] = useState('')
  const [avatarName, setAvatarName] = useState('')
  const [toggleDeleteAccount, setToggleDeleteAccount] = useState(false)

  const navigate = useNavigate()

  const onChange = (file) => {
    if (file.size > 20000000) {
      setErrorOnImport('Fichier trop gros !')
      setAvatarName('')
      return false
    }
    setErrorOnImport('')
    setAvatarName(file.name)
    return true
  }

  const updateProfile = async (e) => {
    e.preventDefault()
    let newPassword = ''
    if (e.target[4].value === e.target[6].value) {
      newPassword = e.target[6].value
    }
    const updateResponse = await UpdateUserProfile(
      context,
      e.target[2].value,
      e.target[3].value,
      e.target[1].files[0],
      e.target[4].value,
    )
    if (updateResponse.status === 200) {
      console.log('Profile updated')
    } else {
      console.log('Error while trying to update profile')
    }
  }

  const LogOut = () => {
    DeleteCookie()
    console.log('cookie deleted')
    setContext('')
    navigate('/signin')
  }

  const deleteAccount = (token, idUser) => {
    console.log('idUser', idUser)
    console.log('token', token)
    DeleteUserProfile(token, idUser)
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
              <input
                form="editprofile"
                type="submit"
                className={`btn-secondary input-save ${
                  toggleDeleteAccount && 'disable-button'
                }`}
                value="Enregistrer"
                disabled={!toggleDeleteAccount}
              />
              <Button
                type="button"
                onClick={() => LogOut()}
                className={`btn-danger ${
                  toggleDeleteAccount && 'disable-button'
                }`}
                title="Déconnexion"
                disabled={!toggleDeleteAccount}
              />
              <Button
                onClick={() => setToggleDeleteAccount(!toggleDeleteAccount)}
                className={`btn-danger-outline ${
                  toggleDeleteAccount && 'disable-button'
                }`}
                title="Supprimer mon compte"
              />
              {toggleDeleteAccount && (
                <div className="delete-account-modal">
                  <p>Êtes vous sur de vouloir supprimer votre compte ?</p>
                  <div className="delete-account-button">
                    <Button
                      onClick={() =>
                        setToggleDeleteAccount(!toggleDeleteAccount)
                      }
                      className="btn-secondary-outline button-fix-height"
                      title="Annuler"
                    />
                    <Button
                      onClick={() => deleteAccount(context, props.profile._id)}
                      className="btn-danger button-fix-height"
                      title="Supprimer"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="modal-close-button">
              <img
                onClick={() => props.closeModal(false)}
                src="/assets/close.svg"
                alt="close"
                aria-hidden="true"
              />
            </div>
          </div>
          <div>
            <form
              onSubmit={updateProfile}
              id="editprofile"
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
                      onChange={(e) => onChange(e.target.files[0])}
                    />
                    <IconNote
                      onClick={() => props.closeModal(false)}
                      color={'white'}
                      size={20}
                    />
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
                    className="correct-input-color"
                  />
                  <Input
                    onChange={(e) => handleChangeMail(e)}
                    value={email}
                    label="Votre email"
                    className="correct-input-color"
                  />
                </div>
              </div>
              <div className="modal-form-section">
                <h1>Modifier votre mot de passe</h1>
                <div className="modify-profile-inputs">
                  <Input
                    password={true}
                    label="Nouveau mot de passe"
                    className="correct-input-color"
                  />
                  <Input
                    password={true}
                    label="Confirmer votre mot de passe"
                    className="correct-input-color"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
