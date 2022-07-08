import './layout.scss'
import { SideBar } from '../../../layout/nav/sidebar/sidebar'
import { useManageDiapo } from '../../../../utils/hooks'

export const LayoutCreation = ({ children }) => {
  const { diapo, index, setIndex } = useManageDiapo()
  const paginate = (nb) => {
    let newIndex = index + nb
    if (newIndex === -1 || newIndex === diapo?.infoDiapo?.length) return
    setIndex(newIndex)
  }

  if (diapo)
    return (
      <div className="container">
        <SideBar />
        <div className="contentContainer">
          <div className="buttonsContainer">
            <a href="/diapo-list" className="buttonLeave">
              Quitter le projet
            </a>
            <a href={`/diapo/presentation/${diapo._id}`}>
              <img src="/assets/images/play.png" alt="play" />
            </a>
          </div>

          <div className="containerSlider">
            <div>
              {children}
              <div className="containerDiapoButton">
                <button onClick={() => paginate(-1)}>
                  <img
                    src="/assets/icons/arrow_left.svg"
                    alt="arrow left"
                    className="arrow arrowLeft"
                  />
                </button>
                <div className="sliderImgContainer">
                  {diapo?.infoDiapo?.map((slide, ind) => {
                    const path = slide.path.replace('./', '')
                    return (
                      <img
                        key={ind}
                        className="imgSlider"
                        src={`${'http://localhost:4000'}/${path}`}
                        alt="slide"
                        style={{ transform: `translateX(-${100 * index}%)` }}
                      />
                    )
                  })}
                </div>
                <button onClick={() => paginate(+1)}>
                  <img
                    src="/assets/icons/arrow_right.svg"
                    alt="arrow right"
                    className="arrow arrowRight"
                  />
                </button>
                <p className="numberSlider">
                  Slide {index + 1} / {diapo?.infoDiapo?.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  else return <></>
}
