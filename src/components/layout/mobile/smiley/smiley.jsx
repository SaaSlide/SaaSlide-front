import { useContext } from 'react'
import { SocketContext } from '../../../../utils/socket'
import './smiley.scss'

const Smiley = () => {
  const { sio } = useContext(SocketContext)
  const emoji = [
    '😀',
    '😵',
    '😂',
    '😍',
    '😎',
    '😏',
    '😑',
    '😪',
    '😖',
    '😨',
    '😮',
    '🤑',
    '🤡',
    '🤫',
  ]

  const send = (e) => {
    console.log('envoi')
    sio.sendSmiley(e.target.innerHTML)
  }

  return (
    <div className="smiley-container">
      <h5>
        Smiley{' '}
        <img
          className="dld-pdf-img"
          src="/assets/icons/chevron_big_right.svg"
          alt=""
        />
      </h5>
      <div className="smiley-list">
        {emoji.map((e, i) => {
          return (
            <button key={i} onClick={send}>
              {e}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Smiley
