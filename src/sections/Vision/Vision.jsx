import './Vision.css'
import { useTranslation } from 'react-i18next'


export default function Vision() {

    const [t , i18n] = useTranslation() 

  return (
    <>
    
    <div className="container same">
      <div className="row">
        <div className="col-lg-12 text-container">
          <h2 className="vision-title right">{t("Vision-h")}</h2>
          <p className="vision-details right" lang={i18n.language}>{t("Vision-p")}</p>
        </div>
      </div>
    </div>
    
    </>
  )
}
