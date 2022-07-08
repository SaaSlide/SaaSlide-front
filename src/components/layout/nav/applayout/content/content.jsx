import { useIsMobile } from '../../../../../utils/hooks'
import './content.scss'

export const Content = ({ components, category }) => {
  const isMobile = useIsMobile()
  return (
    <div className={!isMobile && 'content'}>
      <div>{category}</div>
      <div>{components}</div>
    </div>
  )
}
