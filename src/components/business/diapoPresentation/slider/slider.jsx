import './slider.scss'

export const SliderPresentation = ({ diapo, index }) => {
  // console.log(diapo)
  return (
    <div className="sliderPresContainer">
      {diapo.map((slide) => {
        const path = slide.path.replace('./', '')
        // return <img key={slide._id} src={path} alt="" />
        return (
          <img
            key={slide._id}
            src={'https://picsum.photos/2000/3000'}
            alt=""
            style={{ transform: `translateX(-${100 * (index - 1)}%)` }}
          />
        )
      })}
    </div>
  )
}
