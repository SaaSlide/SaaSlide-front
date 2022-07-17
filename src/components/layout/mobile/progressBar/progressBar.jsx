import './progressbar.scss'

export const ProgressBar = ({ width, height, color, value, numberSpec }) => {
  const pourcentage = numberSpec < 1 ? 0 : (value / numberSpec) * 100
  const stringPourcent = pourcentage + '%'
  return (
    <div className="progressBar-container" height={height} width={width}>
      <div
        style={{ backgroundColor: color, width: stringPourcent }}
        className="progressBar"
      >
        {pourcentage}%
      </div>
    </div>
  )
}
