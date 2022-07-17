import { useContext, useState, useEffect } from 'react'
import { SocketContext } from '../../../../../utils/socket'
import './remoteSlideController.scss'

export const RemoteSlideController = ({
  slideIndex,
  setSlideIndex,
  numberSlide,
}) => {
  const { socket, sio } = useContext(SocketContext)

  useEffect(() => {
    socket.on('get_slide', ({ value, prevSlide }) => {
      let newSlideIndex = prevSlide + value
      setSlideIndex(newSlideIndex)
    })

    return () => socket.off('get_slide')
  }, [])

  const nextSlide = (slideIndex, numberSlide) => {
    if (slideIndex < numberSlide) {
      sio.updateSlide('next', 1, slideIndex)
      setSlideIndex(slideIndex + 1)
    }
  }

  const prevSlide = (slideIndex) => {
    if (slideIndex > 0) {
      sio.updateSlide('previous', -1, slideIndex)
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
