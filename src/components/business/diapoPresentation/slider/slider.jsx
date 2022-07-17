import './slider.scss'

export const SliderPresentation = ({ diapo, index }) => {
  return (
    <div className="sliderPresContainer">
      {diapo.map((slide) => {
        const path = slide.path.replace('./', '')
        return (
          <img
            key={slide._id}
            src={process.env.REACT_APP_API_BASE_URL + '/' + path}
            alt=""
            style={{ transform: `translateX(-${100 * (index - 1)}%)` }}
          />
        )
      })}
    </div>
  )
}
