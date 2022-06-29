import './layout.scss'
import { SideBar } from '../../../layout/nav/sidebar/sidebar'
import { useState } from 'react'

export const LayoutCreation = ({ children, category, setCategory }) => {
  const [index, setIndex] = useState(0)

  //img to iterate
  const data = {
    slider: [
      'https://picsum.photos/1600/900',
      'https://picsum.photos/1600/980',
      'https://picsum.photos/1600/1020',
      'https://picsum.photos/1600/910',
    ],
  }

  const paginate = (nb) => {
    let newIndex = index + nb
    if (newIndex === -1 || newIndex === data.slider.length) return
    setIndex(newIndex)
  }

  const startProject = () => {
    console.log('strating project')
    //redirect to start
  }

  return (
    <div className="container">
      <SideBar category={category} setCategory={setCategory} />
      <div className="contentContainer">
        <div className="buttonsContainer">
          <a href="/diapo-list" className="buttonLeave">
            Quitter le projet
          </a>
          <button onClick={startProject}>
            <img src="/assets/images/play.png" alt="play" />
          </button>
        </div>

        <div className="containerSlider">
          <button onClick={() => paginate(-1)}>
            <img src="/assets/icons/arrow_left.svg" alt="arrow left" />
          </button>
          <div>
            {children}
            <div className="sliderImgContainer">
              {data.slider.map((slide, ind) => {
                return (
                  <img
                    key={ind}
                    className="imgSlider"
                    src={slide}
                    alt=""
                    style={{ transform: `translateX(-${100 * index}%)` }}
                  />
                )
              })}
            </div>
          </div>

          <button onClick={() => paginate(+1)}>
            <img src="/assets/icons/arrow_right.svg" alt="arrow right" />
          </button>

          <p className="numberSlider">
            Slide {index + 1} / {data.slider.length}
          </p>
        </div>
      </div>
    </div>
  )
}
