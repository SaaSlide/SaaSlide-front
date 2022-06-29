import './index.scss'
import { useIsMobile } from '../../../../utils/hooks/isMobile'

export const Footer = () => {
  const isMobile = useIsMobile()

  return (
    <footer className="footer">
      <div className="wrap">
        <div>
          <h6>SaaSlide</h6>
          <p>A propos</p>
          <p>Equipe</p>
          <p>Nous contacter</p>
        </div>
        <div>
          <h6>Assistance</h6>
          <p>Paramètres des cookies</p>
          <p>Assistance SaaSlide</p>
          <p>Forum</p>
        </div>
      </div>
      <div>
        <div className="containerLogo">
          <a href="https://facebook.com/">
            <img src="/assets/icons/facebook.svg" alt="logo facebook" />
          </a>
          <a href="https://twitter.com/">
            <img src="/assets/icons/twitter.svg" alt="logo twitter" />
          </a>
          <a href="https://linkedin.com/">
            <img src="/assets/icons/LinkedIn.svg" alt="logo linkedin" />
          </a>
        </div>
        <p>
          © 2022 SaaSlide.{isMobile && <br />} Conditions & Politique de
          confidentialité
        </p>
      </div>
    </footer>
  )
}
