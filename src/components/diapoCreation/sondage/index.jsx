import './index.scss'

export const Sondage = () => {
  const propositions = ['A', 'B', 'C']

  const addProposition = () => {
    propositions.push('Nouvelle proposition')
  }

  const save = () => {
    console.log('save')
  }

  return (
    <div className="container">
      <img src="/assets/close_big.png" alt="close" />
      <p>Ajouter un sondage</p>
      <div>
        {propositions.map((proposition, index) => {
          return <input key={index} type="text" value={proposition} />
        })}
      </div>
      <div>
        <button onClick={addProposition}>
          <img src="/assets/edit.png" alt="edit" />
          <p>Ajouter une proposition</p>
        </button>
        <button onClick={save}>Enregistrer</button>
      </div>
    </div>
  )
}
