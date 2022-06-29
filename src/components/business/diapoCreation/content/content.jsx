import './content.scss'
import { Sondage } from '../sondage/sondage'
import { Parameters } from '../parameters/parameters'
import { LayoutWindow } from '../layoutWindow/layoutWindow'

export const ContentCreation = ({ category, setCategory }) => {
  const renderCategory = () => {
    switch (category) {
      case 'SONDAGE':
        return (
          <LayoutWindow setCategory={setCategory} title={'Ajouter un sondage'}>
            <Sondage />
          </LayoutWindow>
        )
      case 'PARAMETRE':
        return (
          <LayoutWindow
            setCategory={setCategory}
            title={'Paramètre de personnalisation'}
          >
            <Parameters />
          </LayoutWindow>
        )
      default:
        return <></>
    }
  }

  return renderCategory()
}
