import { useState } from 'react'
import './index.scss'
import { Hexa } from '../..'

export const SondageHome = () => {
  const [page, setPage] = useState(0)

  const tabs = [
    {
      title: 'Sondage intéractif',
      description:
        'Novitates autem si spem adferunt, ut tamquam in herbis non fallacibus fructus appareat, non sunt illae quidem repudiandae, vetustas tamen suo loco conservanda; maxima est enim vis vetustatis et consuetudinis. Quin in ipso equo, cuius modo feci mentionem, si nulla res impediat, nemo est, quin eo, quo consuevit, libentius utatur quam intractato et novo. Nec vero in hoc quod est animal, sed in iis etiam quae sunt inanima, consuetudo valet, cum locis ipsis delectemur, montuosis etiam et silvestribus, in quibus diutius commorati sumus.',

      assetSrc: '/assets/iphone1.png',
    },
    {
      title: 'Quizz intéractif',
      description:
        'Novitates autem si spem adferunt, ut tamquam in herbis non fallacibus fructus appareat, non sunt illae quidem repudiandae, vetustas tamen suo loco conservanda; maxima est enim vis vetustatis et consuetudinis. Quin in ipso equo, cuius modo feci mentionem, si nulla res impediat, nemo est, quin eo, quo consuevit, libentius utatur quam intractato et novo. Nec vero in hoc quod est animal, sed in iis etiam quae sunt inanima, consuetudo valet, cum locis ipsis delectemur, montuosis etiam et silvestribus, in quibus diutius commorati sumus.',

      assetSrc: '/assets/iphone2.png',
    },
    {
      title: 'Quizz intéractif',
      description:
        'Novitates autem si spem adferunt, ut tamquam in herbis non fallacibus fructus appareat, non sunt illae quidem repudiandae, vetustas tamen suo loco conservanda; maxima est enim vis vetustatis et consuetudinis. Quin in ipso equo, cuius modo feci mentionem, si nulla res impediat, nemo est, quin eo, quo consuevit, libentius utatur quam intractato et novo. Nec vero in hoc quod est animal, sed in iis etiam quae sunt inanima, consuetudo valet, cum locis ipsis delectemur, montuosis etiam et silvestribus, in quibus diutius commorati sumus.',

      assetSrc: '/assets/iphone2.png',
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
            <img src="/assets/arrow_left.svg" alt="arrow left" />
          </button>
          <button onClick={() => paginate(1)}>
            <img src="/assets/arrow_right.svg" alt="arrow right" />
          </button>
        </div>
      </div>

      <div className="containerImgHexa">
        <Hexa color="#f2f3f3" />
        <div className="containerImg">
          {tabs.map((info, index) => {
            return (
              <img
                key={info}
                src={info.assetSrc}
                alt={info.title}
                style={{
                  transform: `translateX(-${page * 350}px)`,
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
