import { useNavigate } from 'react-router-dom'
import { DeleteCookie } from '../../../../../services/apiUser'
import './topnav.scss'

export const TopNav = ({ specCount }) => {
  const navigation = useNavigate()
  const Logout = () => {
    DeleteCookie()
    navigation('/mobile/broadcastLogin')
  }

  return (
    <div className="topnav-broadcaster">
      <div className="topbar-broadcaster">
        <button onClick={() => Logout()}>
          <img src="/assets/icons/disconnect.svg" alt="" />
        </button>
        <div className="number-spec">
          <img src="/assets/icons/user.svg" alt="" />
          <p className="spectatorCount">{specCount}</p>
        </div>
      </div>
    </div>
  )
}
