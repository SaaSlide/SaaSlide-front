import { Hexa } from '../../general/hexagone/hexagone'
import './solution.scss'
import { useViewportScroll, motion, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useIsMobile } from '../../../../utils/hooks/isMobile'

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
            src="/assets/images/phone.png"
            alt="phone_support"
            className="phoneImg"
            style={{ y: isMobile ? 150 : y2 }}
          />
          <motion.img
            ref={desktop}
            src="/assets/images/desktop.png"
            alt="desktop_support"
            className="desktopImg"
            style={{ y: isMobile ? 50 : y1 }}
          />
        </div>
      </div>
      <div className="textContainer">
        <h5 className="title">Une solution multisupport</h5>
        <p>
          Notre solution permets d’intéragir avec la présentation depuis un
          smartphone. C’est une méthode simple et pratique permettant à une
          présentation en milieu scolaire ou en entreprise de faire passer des
          informations à son public tout en ayant un retour direct. Ce qui
          rajoute de la fluidité en faisant participer votre public, souvent mis
          à part durant une présentation classique.
        </p>
      </div>
    </section>
  )
}
