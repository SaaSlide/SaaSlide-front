import { useIsMobile } from '../../../../../../utils/hooks'
import './links.scss'

export const LinksResponsive = ({ category, setCategory }) => {
  const parametre = {
    key: 'PARAMETRE',
    value: 'Paramètres',
    tabIndex: 3,
    icon: '/assets/icons/settings.svg',
  }

  const routes = [parametre]
  const isMobile = useIsMobile()

  return (
    <>
      {isMobile && (
        <div className="links_responsive_params">
          {routes.map((elem) => (
            <div className="item" key={elem.tabIndex}>
              <div></div>
              <div className="link">
                <div
                  className="onclick"
                  onClick={() => setCategory(elem.key)}
                  aria-hidden="true"
                >
                  <div className="link-icon">
                    <img src={elem.icon} alt="icon" />
                  </div>
                  <p className="navlink">{elem.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
