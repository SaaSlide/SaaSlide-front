import './response.scss'

export const ResponsePercents = ({ type, data, open }) => {
  return (
    <div className="responsePercents" style={{ opacity: 1 }}>
      <p className="title">{data.name}</p>
      {data
        ? type === 'quizz'
          ? data.possibilities.map((possibilitie, i) => {
              return (
                <ProgressBar
                  key={i}
                  name={possibilitie.choice}
                  value={possibilitie.count}
                  max={data.possibilities.reduce(
                    (a, { count }) => a + count,
                    0,
                  )}
                  quizz
                  open={open}
                  answer={possibilitie.answer}
                />
              )
            })
          : data.survey.map((choice, i) => {
              return (
                <ProgressBar
                  key={i}
                  name={choice.proposition}
                  value={choice.count}
                  max={data.survey.reduce((a, { count }) => a + count, 0)}
                />
              )
            })
        : ''}
    </div>
  )
}

const ProgressBar = ({ name, value, max, quizz = false, answer, open }) => {
  let percentWidth
  let percentRounded

  if (max !== 0) {
    percentWidth = Math.round((value / max) * 100 * 100) / 100
    percentRounded = Math.round((value / max) * 100)
  }
  return (
    <div className="progressContainer">
      <p className="name">{name}</p>
      <div className="barContainer">
        <div
          style={{
            width: (percentWidth ? percentWidth : '0') + '%',
            backgroundColor:
              quizz && !open ? (answer ? '#58BF28' : '#B33030') : '',
          }}
        />
      </div>
      <p className="percent">{percentRounded ? percentRounded : 0}%</p>
    </div>
  )
}
