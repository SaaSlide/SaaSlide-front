import './layout.scss'
import { useIsMobile, useManageDiapo } from '../../../../utils/hooks'
import { AppLayout } from '../../../layout/nav/applayout/applayout'

export const LayoutCreation = ({ children }) => {
  const { diapo } = useManageDiapo()

  return (
    <AppLayout
      component={diapo ? <SecondLayout>{children}</SecondLayout> : <></>}
    />
  )
}
const SecondLayout = ({ children }) => {
  const { diapo, index, setIndex } = useManageDiapo()
  const isMobile = useIsMobile()
  const paginate = (nb) => {
    let newIndex = index + nb
    if (newIndex === -1 || newIndex === diapo?.infoDiapo?.length) return
    setIndex(newIndex)
  }
  return (
    <>
      <div
        className={isMobile ? 'contentContainerResponsive' : 'contentContainer'}
      >
        {!isMobile && (
          <div className="buttonsContainer">
            <a href="/managepdf" className="buttonLeave">
              Quitter le projet
            </a>
            <a href={`/diapo/presentation/${diapo._id}`}>
              <img src="/assets/images/play.png" alt="play" />
            </a>
          </div>
        )}
        <div className="containerSlider">
          <div>
            {children}
            <div
              className={
                isMobile
                  ? 'containerDiapoButtonResponsive'
                  : 'containerDiapoButton'
              }
            >
              {!isMobile && (
                <button onClick={() => paginate(-1)}>
                  <img
                    src="/assets/icons/arrow_left.svg"
                    alt="arrow left"
                    className="arrow arrowLeft"
                  />
                </button>
              )}
              <div
                className={
                  isMobile
                    ? 'sldierImgContainerResponsive'
                    : 'sliderImgContainer'
                }
              >
                {diapo?.infoDiapo?.map((slide, ind) => {
                  const path = slide.path.replace('./', '')
                  return (
                    <img
                      key={ind}
                      className="imgSlider"
                      src={`${process.env.REACT_APP_API_BASE_URL}/${path}`}
                      alt="slide"
                      style={{ transform: `translateX(-${100 * index}%)` }}
                    />
                  )
                })}
              </div>
              {!isMobile && (
                <button onClick={() => paginate(+1)}>
                  <img
                    src="/assets/icons/arrow_right.svg"
                    alt="arrow right"
                    className="arrow arrowRight"
                  />
                </button>
              )}
              {isMobile ? (
                <div className="sliderParamsContainer">
                  <p className="numberSlider">
                    Slide {index + 1} / {diapo?.infoDiapo?.length}
                  </p>
                  <button onClick={() => paginate(-1)}>
                    <img
                      src="/assets/icons/arrow_left.svg"
                      alt="arrow left"
                      className="arrowResponsive arrowLeft"
                    />
                  </button>
                  <button onClick={() => paginate(+1)}>
                    <img
                      src="/assets/icons/arrow_right.svg"
                      alt="arrow right"
                      className="arrowResponsive arrowRight"
                    />
                  </button>
                </div>
              ) : (
                <p className="numberSlider">
                  Slide {index + 1} / {diapo?.infoDiapo?.length}
                </p>
              )}
            </div>
            {isMobile && (
              <div className="buttonsContainerResponsive">
                <a href="/managepdf" className="buttonLeave">
                  Quitter le projet
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
