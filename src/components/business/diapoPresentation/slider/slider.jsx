import './slider.scss'

export const SliderPresentation = ({ diapo }) => {
  return (
    <div className="sliderPresContainer">
      {diapo.map((slide) => {
        const path = slide.path.replace('./', '')
        return (
          <img
            key={slide._id}
            src={process.env.REACT_APP_API_BASE_URL + '/' + path}
            alt=""
          />
        )
      })}
    </div>
  )
}
