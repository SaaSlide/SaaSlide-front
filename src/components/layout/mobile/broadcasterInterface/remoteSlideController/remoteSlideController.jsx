import { useState } from 'react'
import './remoteSlideController.scss'

export const RemoteSlideController = ({ activeSlide, numberSlide }) => {
  const [slideIndex, setSlideIndex] = useState(1)

  if (activeSlide) {
    setSlideIndex(activeSlide)
  }

  const nextSlide = (slideIndex, numberSlide) => {
    if (slideIndex < numberSlide) {
      setSlideIndex(slideIndex + 1)
    }
  }

  const prevSlide = (slideIndex) => {
    if (slideIndex > 1) {
      setSlideIndex(slideIndex - 1)
    }
  }

  return (
    <div className="slider-controller-broadcaster">
      <div>
        <button onClick={() => prevSlide(slideIndex)}>
          <img src="/assets/icons/previous.svg" alt="" />
        </button>
      </div>
      <div className="actualslide-counter">
        <div>
          <h1>{slideIndex}</h1>
        </div>
        <div className="separator-slide-controller"></div>
        <div>
          <h1>{numberSlide}</h1>
        </div>
      </div>
      <div>
        <button onClick={() => nextSlide(slideIndex, numberSlide)}>
          <img src="/assets/icons/next.svg" alt="" />
        </button>
      </div>
    </div>
  )
}
