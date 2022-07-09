import './broadcasterInterface.scss'
import { TopNav } from './topnav/topNav'
import { RemoteSlideController } from './remoteSlideController/remoteSlideController'
import { Note } from './note/note'
import { ManageFeature } from './manageFeature/manageFeature'
import { IconSondage } from '../../icons/sondage/sondage'
import { IconQuizz } from '../../icons/quizz/quizz'

const quizz = {
  color: '#3F53D9',
  title: 'Quizz',
  icon: <IconQuizz size={80} color={'white'} />,
}

const sondage = {
  color: '#F3A953',
  title: 'Sondage',
  icon: <IconSondage size={80} color={'white'} />,
}

export const BroadcasterInterface = () => {
  return (
    <>
      <TopNav specCount={20} />
      <RemoteSlideController numberSlide={40} />
      <div>
        <Note />
        <ManageFeature type={sondage} />
      </div>
    </>
  )
}
