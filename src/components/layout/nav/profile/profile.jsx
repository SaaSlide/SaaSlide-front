import { useState } from 'react'
import { ProfileModal } from './modalprofile/profilemodal'
import './profile.scss'

export const Profile = () => {
  const [toggleModal, setToggleModal] = useState(false)

  return (
    <div>
      <div>
        <div onClick={() => setToggleModal(!toggleModal)} aria-hidden="true">
          <h1>image</h1>
        </div>
        <div>
          <h2>Name</h2>
        </div>
      </div>
      {toggleModal && <ProfileModal closeModal={() => setToggleModal()} />}
    </div>
  )
}
