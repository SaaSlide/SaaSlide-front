import './sondage.scss'

export const Sondage = () => {
  const propositions = ['A', 'B', 'C']

  const addProposition = () => {
    propositions.push('Nouvelle proposition')
  }

  const save = () => {
    console.log('save')
  }

  return (
    <>
      <div>
        {propositions.map((proposition, index) => {
          return <input key={index} type="text" value={proposition} />
        })}
      </div>
      <div>
        <button onClick={addProposition}>
          <img src="/assets/images/edit.png" alt="edit" />
          <p>Ajouter une proposition</p>
        </button>
        <button onClick={save}>Enregistrer</button>
      </div>
    </>
  )
}
