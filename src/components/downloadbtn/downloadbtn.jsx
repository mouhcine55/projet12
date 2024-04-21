import ButtonStyle from '../../utils/style/boutonstyle'
import pdf from '../../assets/icones/pdf.svg'
import cv from '../../assets/download/cv.pdf'
import '../../sass/components/_buttonstyle.scss'

const DownloadBtn = () => {
  return (
    <div className="button-cv">
      <ButtonStyle />
      <a
        className="intro__desc-cv theme-color"
        href={cv}
        target="blank"
        rel="noreferrer"
        aria-label="Télécharger mon CV"
        aria-roledescription="Document PDF"
        title="Télécharger mon CV"
      >
        Télécharger mon CV
        <img src={pdf} alt="Icône document PDF" />
      </a>
    </div>
  )
}

export default DownloadBtn
