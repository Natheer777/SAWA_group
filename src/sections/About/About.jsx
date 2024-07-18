import "./About.css"


import {useTranslation} from 'react-i18next'
export default function About() {
  const [t] = useTranslation()
  return (
    <>
    <div className="container same mt-4 mb-5 text-container" id="about">
      <div className="row">
        <div className="col-lg-12 text-container">
          <h2 className="about-title right">{t("About-h")}</h2>
          <p className="about-details right">{t("About-p")}</p>           
       
        </div>

      </div>
    </div>
    </>
  )
}
