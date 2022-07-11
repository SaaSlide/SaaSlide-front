import './slider.scss'

export const SliderPresentation = ({ diapo }) => {
  // console.log(diapo)
  return (
    <div>
      {diapo.map((slide) => {
        const path = slide.path.replace('./', '')
        return <img key={slide._id} src={path} alt="" />
      })}
    </div>
  )
}
