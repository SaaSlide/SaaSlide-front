import './layout.scss'
import { SideBar } from '../../../layout/nav/sidebar/sidebar'

export const LayoutCreation = ({ children, category, setCategory }) => {
  const startProject = () => {
    console.log('strating project')
    //redirect to start
  }

  return (
    <div className="container">
      <SideBar category={category} setCategory={setCategory} />
      <div className="contentContainer">
        <div className="buttonsContainer">
          <a href="/diapo-list" className="buttonLeave">
            Quitter le projet
          </a>
          <button onClick={startProject}>
            <img src="/assets/play.png" alt="play" />
          </button>
        </div>

        {children}

        <img
          className="imgSlider"
          src="https://picsum.photos/1600/900"
          alt=""
        />
        {/* img */}
      </div>
    </div>
  )
}
