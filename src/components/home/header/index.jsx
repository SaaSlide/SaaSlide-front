import './index.scss'

export const HeaderHome = () => {
  return (
    <header className="header">
      <nav>
        <img src="/assets/logo_blanc.png" alt="logo" />
        <div>
          <a href="/signup">S'inscrire</a>
          <a href="/signin">Se connecter</a>
        </div>
      </nav>
      <div className="grid">
        <div className="bg bg1">
          <div className="filterBlack" />
          <div className="textContainer textContainer1">
            <p className="title">Pour les étudiants</p>
            <p>
              Novitates autem si spem adferunt, ut tamquam in herbis non
              fallacibus fructus appareat, non sunt illae quidem repudiandae,
              vetustas tamen suo loco conservanda; maxima est enim vis
              vetustatis et consuetudinis.{' '}
            </p>
          </div>
        </div>
        <div className="bg bg2">
          {' '}
          <div className="filterBlack" />
          <div className="textContainer textContainer2">
            <p className="title">Pour les étudiants</p>
            <p>
              Novitates autem si spem adferunt, ut tamquam in herbis non
              fallacibus fructus appareat, non sunt illae quidem repudiandae,
              vetustas tamen suo loco conservanda; maxima est enim vis
              vetustatis et consuetudinis.{' '}
            </p>
          </div>
        </div>
        <div className="bg bg3">
          {' '}
          <div className="filterBlack" />
          <div className="textContainer textContainer3">
            <p className="title">Pour les étudiants</p>
            <p>
              Novitates autem si spem adferunt, ut tamquam in herbis non
              fallacibus fructus appareat, non sunt illae quidem repudiandae,
              vetustas tamen suo loco conservanda; maxima est enim vis
              vetustatis et consuetudinis.{' '}
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
