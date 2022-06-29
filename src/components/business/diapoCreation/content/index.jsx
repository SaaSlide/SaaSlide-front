import './index.scss'
import { Sondage } from '../sondage'
import { Parameters } from '../parameters'
import { LayoutWindow } from '../layoutWindow'

export const ContentCreation = ({ category, setCategory }) => {
  const renderCategory = () => {
    switch (category) {
      case 'SONDAGE':
        return <Sondage />
      case 'PARAMETRE':
        return <Parameters />
      default:
        return <></>
    }
  }

  return category === '' ? (
    <>{renderCategory()}</>
  ) : (
    <LayoutWindow setCategory={setCategory}>{renderCategory()}</LayoutWindow>
  )
}
