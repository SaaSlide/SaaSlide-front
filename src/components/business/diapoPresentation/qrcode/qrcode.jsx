import './qrcode.scss'
import QRCode from 'react-qr-code'

export const QRCodePresentation = ({ id }) => {
  return (
    <div className="QRCodeContainer">
      <div className="QRCode">
        <QRCode value={`http://localhost:3000/mobile/presentation/${id}`} />
      </div>
      <p>Scanner le QR code pour suivre la présentation</p>
    </div>
  )
}
