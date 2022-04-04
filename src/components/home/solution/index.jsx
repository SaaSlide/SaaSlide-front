import { Hexa } from '../..'
import './index.scss'

export const SolutionHome = () => {
  return (
    <section className="sectionSolution">
      <div className="imgContainer">
        {' '}
        <Hexa />
        <img src="/assets/support.png" alt="support" />
      </div>
      <div>
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
