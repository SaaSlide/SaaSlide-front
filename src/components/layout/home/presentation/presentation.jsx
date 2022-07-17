import './presentation.scss'

export const PresentationHome = () => {
  return (
    <section className="sectionPres">
      <div className="wrap">
        <iframe
          title="presentation"
          src="https://www.youtube.com/embed/ZyKoHIXpM_I"
        />
        <div className="btnTextContainer">
          <h5>Créer votre présentation rapidement </h5>
          <div className="btnContainer">
            <a href="/managepdf">Création</a>
            <a className="btnPres">Présentation</a>
          </div>
        </div>
      </div>
      <div className="createPres">
        <h5>
          Des présentations captivante, efficace et innovante Commencer à créer
          votre présentation
        </h5>
        <a href="/managepdf">Je créer ma présentation</a>
      </div>
    </section>
  )
}
