import { useEffect, useState, useContext } from 'react'
import { ProfileModal } from './modalprofile/profilemodal'
import { GetUserProfile } from '../../../../../../services/apiUser'
import './profile.scss'
import { TokenContext } from '../../../../../../App'

export const Profile = () => {
  const userToken = useContext(TokenContext)
  const [toggleModal, setToggleModal] = useState(false)
  const [profile, setProfile] = useState()

  const getUserInfo = async () => {
    let response = await GetUserProfile(userToken)
    console.log(response)
    setProfile(response)
  }

  console.log('current profile :', profile)

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <div>
      <div>
        {profile !== undefined && (
          <div
            className="sidebar-edit-profile"
            onClick={() => setToggleModal(!toggleModal)}
            aria-hidden="true"
          >
            <div className="profile-picture-empty"></div>
            <p>{profile.name}</p>
          </div>
        )}
      </div>
      {toggleModal && (
        <ProfileModal profile={profile} closeModal={() => setToggleModal()} />
      )}
    </div>
  )
}
