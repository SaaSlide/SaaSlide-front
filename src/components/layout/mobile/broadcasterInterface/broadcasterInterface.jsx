import './broadcasterInterface.scss'
import { TopNav } from './topnav/topNav'
import { RemoteSlideController } from './remoteSlideController/remoteSlideController'
import { Note } from './note/note'
import { ManageFeature } from './manageFeature/manageFeature'
import Question from '../../../layout/mobile/question/question'

export const BroadcasterInterface = () => {
  return (
    <>
      <TopNav />
      <RemoteSlideController numberSlide={40} />
      <div>
        <Note />
        <ManageFeature />
      </div>
    </>
  )
}
