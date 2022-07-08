import { useState } from 'react'
import './sondage.scss'
import { Hexa } from '../../general/hexagone/hexagone'
import { useIsMobile } from '../../../../utils/hooks/isMobile'

export const SondageHome = () => {
  const isMobile = useIsMobile()

  const [page, setPage] = useState(0)

  const tabs = [
    {
      title: 'Sondage',
      description:
        'Le présentateur pourra créer des sondages auxquels son audience pourra répondre depuis leur smarthone en temps réel. C’est une manière ludique de faire participer votre audience pour connaitre un point de vue, réaliser des statistiques. Dans les prochaines version de SasSlide il sera possible de modifier le contenu de votre dipositive en fonction des réponses aux sondages !',

      assetSrc: '/assets/images/iphone1.png',
    },
    {
      title: 'Quizz',
      description:
        'Parmis les différents moyens d’intéractions, il est possible de créer des quizz auxquels le public pourra répondre depuis son smartphone. Le quizz sera afficher sur la présentation et le public recevra les réponses sur leur smartphone une fois le quizz terminé. C’est un bon moyen de faire participer votre audience ce qui peut amener à débat, peut servir d’accroche ou de transition à votre présentation.',

      assetSrc: '/assets/images/iphone2.png',
    },
    {
      title: 'Discussion en direct',
      description:
        'L’audience dispose d’un chat qui lui permets d’intéragir en direct avec le présentateur et le reste de l’audience de manière anonyme. Le chat est une option désactivable par le présentateur durant la création de sa présentation.',

      assetSrc: '/assets/images/iphone2.png',
    },
    {
      title: 'Emojis',
      description:
        'Le public pourra, si il le souhaite, envoyer des émojis qui seront visible par tous durant une présentation. Cette fonction est un moyen ludique et simple pour communiquer avec l’audience et le présentateur. C’est une fonction optionnel qui pourra être désactiver par le présentateur si il le souhaite.',

      assetSrc: '/assets/images/iphone2.png',
    },
  ]

  const paginate = (nb) => {
    let newPage = page + nb
    if (newPage === -1) newPage = tabs.length - 1
    else if (newPage === tabs.length) newPage = 0
    setPage(newPage)
  }

  return (
    <section className="sectionSondage">
      <div className="containerTextArrow">
        <div>
          <h5>{tabs[page].title}</h5>
          <p>{tabs[page].description}</p>
        </div>
        <div className="containerArrow">
          <button onClick={() => paginate(-1)}>
            <img src="/assets/icons/arrow_left.svg" alt="arrow left" />
          </button>
          <button onClick={() => paginate(1)}>
            <img src="/assets/icons/arrow_right.svg" alt="arrow right" />
          </button>
        </div>
      </div>

      <div className="containerImgHexa">
        <Hexa color="#f2f3f3" />
        <div className="containerImg">
          {tabs.map((info, index) => {
            return (
              <img
                key={index}
                src={info.assetSrc}
                alt={info.title}
                style={{
                  transform: `translateX(${
                    page * (isMobile ? -400 : -350) + (isMobile ? 400 : 0)
                  }px)`,
                  opacity: index >= page ? 1 : 0,
                }}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
