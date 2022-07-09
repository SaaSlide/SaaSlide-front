import './manageFeature.scss'
import { FeatureModal } from './featureModal/featureModal'
import { useState } from 'react'

export const ManageFeature = ({ type, features }) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div>
      <div
        className="feature-card"
        style={{ backgroundColor: type.color }}
        onClick={() => setOpenModal(!openModal)}
        aria-hidden="true"
      >
        <h1>{type.title}</h1>
        <div className="feature-icon-broadcast">{type.icon}</div>
      </div>
      {openModal && <FeatureModal closeModal={setOpenModal} infos={features} />}
      {/* {features.map((info) => (
        <FeatureModal key={info} infos={info} />
      ))} */}
    </div>
  )
}
