import './topnav.scss'

export const TopNav = ({ specCount }) => {
  return (
    <div className="topnav-broadcaster">
      <div className="topbar-broadcaster">
        <button>
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
