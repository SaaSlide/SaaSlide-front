import './manageFeature.scss'
import { FeatureModal } from './featureModal/featureModal'
import { useState, useContext } from 'react'
import { SocketContext } from '../../../../../utils/socket'

export const ManageFeature = ({
  slideIndex,
  type,
  featureId,
  question,
  options,
  featureResponse,
  numberUser,
}) => {
  const [openModal, setOpenModal] = useState(false)
  const { sio } = useContext(SocketContext)

  const startFeature = () => {
    sio.sendParams(slideIndex, type.title, featureId, true, true)
    setOpenModal(!openModal)
  }

  return (
    <div>
      <div
        className="feature-card"
        style={{ backgroundColor: type.color }}
        onClick={() => startFeature()}
        aria-hidden="true"
      >
        <h1>{type.title}</h1>
        <div className="feature-icon-broadcast">{type.icon}</div>
      </div>
      {openModal && (
        <FeatureModal
          slideIndex={slideIndex}
          type={type}
          featureId={featureId}
          closeModal={setOpenModal}
          question={question}
          options={options}
          numberResponse={featureResponse}
          numberUser={numberUser}
        />
      )}
    </div>
  )
}
