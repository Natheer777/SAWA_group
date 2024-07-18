import "./Slogan2.css";

import Data from "../../Data/Card_Slogans";

import { Card_Slogans } from "../../components/index";

import { useTranslation } from "react-i18next";


export default function Slogan() {
  const [t] = useTranslation();

  const card = Data.map((card) => {
    return <Card_Slogans key={card.id} image={card.Image} />;
  });

  return (
    <>

      <div className="cards text-center mb-5 mt-5">
        <div className="container">
          <div className="row d-flex justify-content-between">
        <div className="card0 left">{card[6]}<p className="card0">{t("Slogan-card12")}</p></div>
        <div className="card1 left">{card[7]} <p className="card1">{t("Slogan-card5")}</p></div>
        <div className="card2 hidden">{card[8]} <p className="card2">{t("Slogan-card7")}</p> </div>
        <div className="card3 hidden">{card[9]} <p className="card3">{t("Slogan-card6")}</p> </div>
        <div className="card4 right">{card[10]} <p className="card4">{t("Slogan-card1")}</p> </div>
        <div className="card5 right">{card[11]} <p className="card5">{t("Slogan-card8")}</p> </div>
          </div>
          </div>
          </div>
    </>
  );
}
