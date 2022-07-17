import './qrcode.scss'
import QRCode from 'react-qr-code'

export const QRCodePresentation = ({ id }) => {
  return (
    <div className="QRCodeContainer">
      <div className="QRCode">
        <QRCode
          value={`${process.env.REACT_APP_BASE_URL}/mobile/presentation/${id}`}
        />
      </div>
      <p>Scanner le QR code pour suivre la présentation</p>
    </div>
  )
}
