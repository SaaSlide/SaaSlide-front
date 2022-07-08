import './qrcode.scss'
import QRCode from 'react-qr-code'
import { useLocation } from 'react-router-dom'

export const QRCodePresentation = () => {
  const location = useLocation()

  const id = location.pathname.replace('/diapo/presentation/', '')
  return (
    <div className="QRCodeContainer">
      <div className="QRCode">
        <QRCode value={`http://localhost:3000/mobile/presentation/${id}`} />
      </div>
      <p>Scanner le QR code pour suivre la présentation</p>
    </div>
  )
}
