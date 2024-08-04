import { useTranslation } from "react-i18next";
import { useEffect, useRef , useState} from "react";
import Logo from "../../assets/Logo/سوىAI-01 (1).webp";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import { LuLanguages } from "react-icons/lu";
import i18n from "i18next";
import "./Navbar.css";

export default function Navbar() {
  const [t , i18n] = useTranslation();
  const dropdownRef = useRef(null);
  const navbarCollapseRef = useRef(null);



  const languageNames = {
    en: "English",
    ja: "日本語",
    ar: "العربية"
  };

  const [current, setcurrent] = useState(languageNames[i18n.language]);




  const showDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.style.display = "block";
    }
  };

  const hideDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.style.display = "none";
    }
  };

  const closeNavbarCollapse = () => {
    if (navbarCollapseRef.current && navbarCollapseRef.current.classList.contains("show")) {
      navbarCollapseRef.current.classList.remove("show");
    }
  };

  useEffect(() => {
    const handleLanguageChange = () => {
      hideDropdown();
      closeNavbarCollapse();
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  return (
    <div className="container">
      <div className="title container">
        <ul className="flex-container">
          <li className="t">
            <h1 lang={i18n.language}>
              {t("Header-h")}
            </h1>
          </li>
          <li className="diffrint " lang={i18n.language}>
            {t("Header-p")}
          </li>
          <li className="t">  
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="Logo" />
            </a>
          </li>
        </ul>
        <div className="typing-demo ">
          <div className="mt-3 m-0">
            <h5 lang={i18n.language}>{t("Main")}</h5>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light mt-4">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <ul className="title_toggler">
            <li className="title  p-0 pb-2">
            <h1 lang={i18n.language}>
              {t("Header-h")}
            </h1>
          </li>
          <li>
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="Logo" />
            </a>
          </li>
            </ul>
            <li className="nav-item dropdown ms-3 nav-link dropdown-toggle fs-5">
            <span className="navbar-toggler-icon">

            </span>
                <div
                  className="dropdown lanBtn"
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                  onClickCapture={showDropdown}
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <LuLanguages />  <span className="LanNAme">{current}</span> ▼
                  <div
                    className="dropdown-content"
                    ref={dropdownRef}
                    style={{ display: "none" }}
                  >
                    <a
                      onClick={() =>{ i18n.changeLanguage("ja");
                        setcurrent(languageNames["ja"]);

                      }}
                      className="dropdown-item"
                    >
                      日本語
                    </a>
                    <a
                      onClick={() =>{ i18n.changeLanguage("en");
                        setcurrent(languageNames["en"]);

                      }}
                      className="dropdown-item"
                    >
                      English
                    </a>
                    <a
                      onClick={() =>{ i18n.changeLanguage("ar");
                        setcurrent(languageNames["ar"]);

                      }}
                      className="dropdown-item"
                    >
                      العربية
                    </a>
                  </div>
                </div>
              
              </li>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown" ref={navbarCollapseRef}>
            <ul className="navbar-nav">
              <li className="nav-item active  ">
                <a className="nav-link" href="#">
                  <FaHome />
                  {t("Navbar-Home")}
                  <span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item  ">
                <a className="nav-link" href="#about">
                  <IoPerson /> {t("Navbar-about")}
                </a>
              </li>
              <li className="nav-item  ">
                <a className="nav-link" href="#Services">
                  <GrServices /> {t("Navbar-Services")}
                </a>
              </li>
              <li className="nav-item  ">
                <a className="nav-link" href="#Contact">
                  <FaPhoneAlt /> {t("Navbar-contact")}
                </a>
              </li>
              <li className="nav-item dropdown ms-3 nav-link dropdown-toggle fs-5">
                <div
                  className="dropdown lanBtn"
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                  onClickCapture={showDropdown}
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <LuLanguages />  <span className="LanNAme">{current}</span> ▼
                  <div
                    className="dropdown-content"
                    ref={dropdownRef}
                    style={{ display: "none" }}
                  >
                    <a
                      onClick={() =>{ i18n.changeLanguage("ja");
                        setcurrent(languageNames["ja"]);

                      }}
                      className="dropdown-item"
                    >
                      日本語
                    </a>
                    <a
                      onClick={() =>{ i18n.changeLanguage("en");
                        setcurrent(languageNames["en"]);

                      }}
                      className="dropdown-item"
                    >
                      English
                    </a>
                    <a
                      onClick={() =>{ i18n.changeLanguage("ar");
                        setcurrent(languageNames["ar"]);

                      }}
                      className="dropdown-item"
                    >
                      العربية
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}