import { LayoutCreation, ContentCreation } from '../components'
import { ProvideManageDiapo } from '../utils/hooks'

export const DiapoCreation = () => {
  return (
    <ProvideManageDiapo>
      <LayoutCreation>
        <ContentCreation />
      </LayoutCreation>
    </ProvideManageDiapo>
  )
}
