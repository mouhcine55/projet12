import { Link } from 'react-router-dom'
import LinkStyle from '../../utils/style/linkstyle'
import '../../sass/containers/_footer.scss'

const Footer = () => {
  // Gère le problème de la position en milieu de page
  const handleClick = () => {
    // Remonter vers le haut avant la navigation
    window.scrollTo(0, 0)
  }

  return (
    <footer className="footer">
      <div className="footer__left">
        <LinkStyle />
        <Link className="link-theme" to="/" onClick={handleClick}>
          Accueil
        </Link>
      </div>
      <div className="footer__middle">
        <p>Tous droits réservés © 2024 - Mouhcine Abdelkrim</p>
      </div>
      <div className="right">
        <Link
          className="link-theme"
          to="/mentions-legales"
          onClick={handleClick}
        >
          Mentions légales
        </Link>
      </div>
    </footer>
  )
}

export default Footer
