import { useIsMobile } from '../../../../../utils/hooks'
import './content.scss'

export const Content = ({ components }) => {
  const isMobile = useIsMobile()
  return <div className={!isMobile && 'container'}>{components}</div>
}
