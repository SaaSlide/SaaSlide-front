import {
  HeaderHome,
  SolutionHome,
  SondageHome,
  PresentationHome,
} from '../components/layout/home'
import { Footer } from '../components/layout/general'

export const Home = () => {
  return (
    <>
      <HeaderHome />
      <SolutionHome />
      <SondageHome />
      <PresentationHome />
      <Footer />
    </>
  )
}
