import './index.scss'

export const LayoutCreation = ({ children }) => {
  const startProject = () => {
    console.log('strating project')
    //redirect to start
  }

  return (
    <div className="container">
      {/* navbar */}
      <div
        style={{ backgroundColor: 'red', width: '300px', height: '100vh' }}
      ></div>
      <div className="secondContainer">
        <div className="buttonsContainer">
          <a href="/diapo-list">Quitter le projet</a>
          <button onClick={startProject}>
            <img src="/assets/play.png" alt="play" />
          </button>
        </div>

        {children}
      </div>
    </div>
  )
}
