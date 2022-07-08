import { useEffect, useState, useContext } from 'react'
import { ProfileModal } from './modalprofile/profilemodal'
import { GetUserProfile } from '../../../../../../services/apiUser'
import './profile.scss'
import { TokenContext } from '../../../../../../App'
import { useIsMobile } from '../../../../../../utils/hooks'

export const Profile = () => {
  const userToken = useContext(TokenContext)
  const [toggleModal, setToggleModal] = useState(false)
  const [profile, setProfile] = useState()
  const isMobile = useIsMobile()

  const getUserInfo = async () => {
    let response = await GetUserProfile(userToken)
    setProfile(response)
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <div>
      <div>
        {profile !== undefined && (
          <div
            className={
              isMobile ? 'sidebar-edit-profile-mobile' : 'sidebar-edit-profile'
            }
            onClick={() => setToggleModal(!toggleModal)}
            aria-hidden="true"
          >
            <div
              className={
                isMobile
                  ? 'profile-picture-empty-mobile'
                  : 'profile-picture-empty'
              }
            ></div>
            {!isMobile && <p>{profile.name}</p>}
          </div>
        )}
      </div>
      {toggleModal && (
        <ProfileModal profile={profile} closeModal={() => setToggleModal()} />
      )}
    </div>
  )
}
