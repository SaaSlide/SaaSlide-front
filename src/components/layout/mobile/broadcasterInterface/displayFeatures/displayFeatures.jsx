import './displayFeatures.scss'

export const DisplayFeatures = ({ diapoInfo }) => {
  return (
    <div>
      {diapoInfo && (
        <div>
          <h1>{diapoInfo?.page}</h1>
          <h3>Notes :</h3>
          <p>{diapoInfo?.notes}</p>
        </div>
      )}
    </div>
  )
}
