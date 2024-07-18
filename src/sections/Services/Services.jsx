import "./Services.css";
import Data from "../../Data/Card_Services";
import { Card_Services } from "../../components/index";
import { useTranslation } from "react-i18next";

export default function Services() {
  const [t , i18n] = useTranslation();

  const card = Data.map((card) => {
    return <Card_Services key={card.id} image={card.Image} />;
  });
  return (
    <>
      <div className="container mt-5" id="Services">
        <div className="row rowServices ">
          <div className="MainTitle same">
            <h2 className="hidden">{t("Services-h")}</h2>
          </div>

          <div className="CaRd">
            <div className="serv1 top Regular shadow">
              {card[0]} <h4>{t("Services-card1T")}</h4>{" "}
              <p lang={i18n.language}>{t("Services-card1")}</p>
            </div>
            <div className="serv2 top Regular shadow">
              {card[1]} <h4>{t("Services-card2T")}</h4>{" "}
              <p lang={i18n.language}>{t("Services-card2")}</p>
            </div>
            <div className="serv3 top Regular shadow">
              {card[2]} <h4>{t("Services-card3T")}</h4>{" "}
              <p lang={i18n.language}>{t("Services-card3")}</p>
            </div>
            <div className="serv4 top Regular shadow">
              {card[3]} <h4>{t("Services-card4T")}</h4>{" "}
              <p lang={i18n.language}>{t("Services-card4")}</p>
            </div>
            <div className="serv5 top Regular shadow">
              {card[4]} <h4 lang={i18n.language}>{t("Services-card5T")}</h4>{" "}
              <p lang={i18n.language}>{t("Services-card5")}</p>
            </div>
            <div className="serv6 top Regular shadow">
              {card[5]} <h4>{t("Services-card6T")}</h4>{" "}
              <p lang={i18n.language}>{t("Services-card6")}</p>
            </div>
            <div className="serv7 top Regular shadow">
              {card[6]} <h4>{t("Services-card7T")}</h4>{" "}
              <p lang={i18n.language}>{t("Services-card7")}</p>
            </div>
            <div className="serv8 top Regular shadow">
              {card[7]} <h4>{t("Services-card8T")}</h4>{" "}
              <p lang={i18n.language}>{t("Services-card8")}</p>
            </div>
            <div className="serv9 top Regular shadow">
              {card[8]} <h4>{t("Services-card9T")}</h4>{" "}
              <p lang={i18n.language}>{t("Services-card9")}</p>
            </div>
            <div className="serv10 top Regular shadow">
              {card[9]} <h4>{t("Services-card10T")}</h4>{" "}
              <p lang={i18n.language}>{t("Services-card10")}</p>
            </div>
            <div className="serv11 top Regular shadow">
              {card[10]}<h4>{t("Services-card11T")}</h4> <p lang={i18n.language}>{t("Services-card11")}</p>
            </div>
            {/* <div className="serv12 top Regular shadow">
              {card[11]} <h4>{t("Services-card12T")}</h4> <p lang={i18n.language}>{t("Services-card12")}</p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
