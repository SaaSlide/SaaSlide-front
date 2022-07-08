import { LayoutCreation, ContentCreation } from '../components'
import { ProvideManageDiapo } from '../utils/hooks'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const DiapoCreation = () => {
  return (
    <ProvideManageDiapo>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <LayoutCreation>
        <ContentCreation />
      </LayoutCreation>
    </ProvideManageDiapo>
  )
}
