import { Hexa } from '../..'
import './index.scss'
import { useViewportScroll, motion, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useIsMobile } from '../../../hooks/isMobile'

export const SolutionHome = () => {
  const { scrollY } = useViewportScroll()
  const [desktopHeight, setDesktopHeight] = useState()
  const [phoneHeight, setPhoneHeight] = useState()
  const isMobile = useIsMobile()

  const y1 = useTransform(
    scrollY,
    [desktopHeight - window.innerHeight, desktopHeight],
    [100, -50],
  )
  const y2 = useTransform(
    scrollY,
    [phoneHeight - window.innerHeight, phoneHeight],
    [300, 0],
  )
  const desktop = useRef()
  const phone = useRef()

  useEffect(() => {
    setDesktopHeight(
      desktop.current.getBoundingClientRect().top + window.scrollY,
    )
  }, [desktop])

  useEffect(() => {
    setPhoneHeight(phone.current.getBoundingClientRect().top + window.scrollY)
  }, [phone])

  return (
    <section className="sectionSolution">
      <div className="imgContainer">
        <div className="hexa">
          <Hexa />
        </div>
        <div className="imgContainerPhoneDesktop">
          <motion.img
            ref={phone}
            src="/assets/phone.png"
            alt="phone_support"
            className="phoneImg"
            style={{ y: isMobile ? 150 : y2 }}
          />
          <motion.img
            ref={desktop}
            src="/assets/desktop.png"
            alt="desktop_support"
            className="desktopImg"
            style={{ y: isMobile ? 50 : y1 }}
          />
        </div>
      </div>
      <div className="textContainer">
        <h5 className="title">Une solution multisupport</h5>
        <p>
          Novitates autem si spem adferunt, ut tamquam in herbis non fallacibus
          fructus appareat, non sunt illae quidem repudiandae, vetustas tamen
          suo loco conservanda; maxima est enim vis vetustatis et consuetudinis.
          Quin in ipso equo, cuius modo feci mentionem, si nulla res impediat,
          nemo est, quin eo, quo consuevit, libentius utatur quam intractato et
          novo. Nec vero in hoc quod est animal, sed in iis etiam quae sunt
          inanima, consuetudo valet, cum locis ipsis delectemur, montuosis etiam
          et silvestribus, in quibus diutius commorati sumus.
        </p>
      </div>
    </section>
  )
}
