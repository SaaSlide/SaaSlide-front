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
            <span
              key={i}
              tabIndex={0}
              role="button"
              onClick={sio.sendSmiley(e)}
              onKeyDown={sio.sendSmiley(e)}
            >
              {e}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default Smiley
