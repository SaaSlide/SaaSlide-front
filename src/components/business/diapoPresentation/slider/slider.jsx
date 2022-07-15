import './slider.scss'

export const SliderPresentation = ({ diapo, index }) => {
  return (
    <div className="sliderPresContainer">
      {diapo.map((slide) => {
        const path = slide.path.replace('./', '')
        return <img key={slide._id} src={path} alt="" />
      })}
    </div>
  )
}
