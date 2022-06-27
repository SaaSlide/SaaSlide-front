import './index.scss'

export const Sondage = ({}) => {
  const propositions = ['A', 'B', 'C']

  const addProposition = () => {
    propositions.push('Nouvelle proposition')
  }

  return (
    <div className="container">
      <img
        onClick={() => console.log('set la catégorie a null')}
        src="/assets/close_big.png"
        alt="close"
      />
      <p>Ajouter un sondage</p>
      <div>
        {propositions.map((proposition) => {
          return <input type="text" value={proposition} />
        })}
      </div>
      <div>
        <div onClick={addProposition}>
          <img src="/assets/edit.png" alt="edit" />
          <p>Ajouter une proposition</p>
        </div>
        <button>Enregistrer</button>
      </div>
    </div>
  )
}
