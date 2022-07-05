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
  const [errorOnImport, setErrorOnImport] = useState('')
  const [avatarName, setAvatarName] = useState('')

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
    console.log('path', e.target[1].value)
    console.log('pseudo', avatarName)
    console.log('mail', e.target[3].value)
    let newPassword = ''
    if (e.target[4].value === e.target[6].value) {
      newPassword = e.target[6].value
    }
    console.log('NewPass', newPassword)
    console.log('token', context)
    const updateResponse = await UpdateUserProfile(
      context,
      e.target[2].value,
      e.target[3].value,
      e.target[1].value,
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
              <input
                form="editprofile"
                type="submit"
                className="btn-secondary"
                value="Enregistrer"
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
