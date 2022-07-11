import {
  HeaderHome,
  SolutionHome,
  SondageHome,
  PresentationHome,
} from '../components/layout/home'
import FloatSmiley from '../components/layout/home/floatSmiley/floatSmiley'
import { Footer } from '../components/layout/general'
import SocketProvider from '../utils/socket'

export const Home = () => {
  return (
    <>
      <SocketProvider room={'1'} name="test">
        <FloatSmiley />
        {/* <HeaderHome />
        <SolutionHome />
        <SondageHome />
        <PresentationHome />
        <Footer /> */}
      </SocketProvider>
    </>
  )
}
