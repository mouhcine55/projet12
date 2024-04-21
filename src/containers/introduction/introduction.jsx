import { useTheme } from '../../utils/hooks/index'
import DownloadBtn from '../../components/downloadbtn/downloadbtn'
import MaPhoto from '../../assets/photo/Abdelkrim.jpg'
import GitHub from '../../assets/icones/github.png'
import DarkGitHub from '../../assets/icones/darkgithub.png'
import LinkedIn from '../../assets/icones/linkedin.png'
import DarkLinkedIn from '../../assets/icones/darklinkedin.png'
import Twitter from '../../assets/icones/twitter.png'
import DarkTwitter from '../../assets/icones/darktwitter.png'
import ImageStyle from '../../utils/style/imagestyle'
import '../../sass/containers/_introduction.scss'

const Introduction = () => {
  const { darkMode } = useTheme()

  return (
    <section className="intro">
      <h2 id="a-propos" className="intro__title">
        À propos
      </h2>
      <div className="intro__desc">
        <p> Passionné par les avancées technologiques, j'ai décidé de changer de cap professionnel après 15années dans le secteur automobile.
          <br />
          Mon choix s'est porté sur la programmation, une passion que je souhaite explorer davantage. Ainsi, je me suis lancé dans l'apprentissage des nouvelles technologies.
        </p>
        <p>
         Pour approfondir mes connaissances dans le développement web, j'ai intégré avec enthousiasme la formation certifiante "Intégrateur Web" de niveau Bac +2 proposée par OpenClassrooms. Cette expérience m'a permis de maîtriser des compétences solides en HTML, CSS, JavaScript et React.
        </p>
        <p>
         Je suis désormais impatient de saisir de nouvelles opportunités et de développer mes compétences dans le domaine du développement web, tout en perfectionnant celles que j'ai déjà acquises.
        </p>
        <div className="intro__desc-liens">
          <a href="https://github.com/Mouhcine55" target="blank">
            <img
              src={darkMode ? DarkGitHub : GitHub}
              alt="Lien vers mon profil Github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/abdelkrim-valenciennes-01003730"
            target="blank"
          >
            <img
              src={darkMode ? DarkLinkedIn : LinkedIn}
              alt="Lien vers mon profil LinkedIn"
            />
          </a>
          <a
            href="https://twitter.com/ka_assane"
            target="blank"
          >
            <img
              src={darkMode ? DarkTwitter : Twitter}
              alt="Lien vers mon profil Twitter"
            />
          </a>
        </div>
        <DownloadBtn />
      </div>
      <div className="intro__photo">
        <ImageStyle />
        <img
          className="image-theme"
          src={MaPhoto}
          alt="Portrait de Mouhcine Bonjour"
        />
        <h3>Mouhcine Abdelkrim</h3>
        <h3>Développeur front-end</h3>
      </div>
    </section>
  )
}

export default Introduction
