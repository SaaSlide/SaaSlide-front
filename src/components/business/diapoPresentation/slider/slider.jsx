import './slider.scss'

export const SliderPresentation = ({ diapo }) => {
  return (
    <div className="sliderPresContainer">
      {diapo.map((slide) => {
        const path = slide.path.replace('./', '')
        return (
          <img key={slide._id} src={'http://localhost:4000/' + path} alt="" />
        )
      })}
    </div>
  )
}
