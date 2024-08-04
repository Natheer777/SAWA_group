


// import { useTranslation } from "react-i18next";
// import { useEffect, useRef, useState } from "react";
// import Logo from "../../assets/Logo/سوىAI-01 (1).webp";
// import { FaHome, FaPhoneAlt } from "react-icons/fa";
// import { IoPerson } from "react-icons/io5";
// import { GrServices } from "react-icons/gr";
// import { LuLanguages } from "react-icons/lu";
// import i18n from "i18next";
// import { FiAlignJustify } from "react-icons/fi";

// import "./Navbar.css";

// export default function Navbar() {
//   const [t] = useTranslation();
//   const dropdownRef = useRef(null);
//   const navbarCollapseRef = useRef(null);

//   const languageNames = {
//     en: "English",
//     ja: "日本語",
//     ar: "العربية"
//   };

//   const [current, setcurrent] = useState(languageNames[i18n.language]);

//   const showDropdown = () => {
//     if (dropdownRef.current) {
//       dropdownRef.current.style.display = "block";
//     }
//   };

//   const hideDropdown = () => {
//     if (dropdownRef.current) {
//       dropdownRef.current.style.display = "none";
//     }
//   };

//   const closeNavbarCollapse = () => {
//     if (navbarCollapseRef.current && navbarCollapseRef.current.classList.contains("show")) {
//       navbarCollapseRef.current.classList.remove("show");
//     }
//   };

//   useEffect(() => {
//     const handleLanguageChange = () => {
//       hideDropdown();
//       closeNavbarCollapse();
//     };

//     i18n.on("languageChanged", handleLanguageChange);

//     return () => {
//       i18n.off("languageChanged", handleLanguageChange);
//     };
//   }, [i18n]);

//   const handleLanguageChange = (lang) => {
//     i18n.changeLanguage(lang);
//     setcurrent(languageNames[lang]);
//   };

//   return (
//     <div className="container">
//       <div className="revers">
//         <div className="title container mt-4">
//           <ul className="flex-container">
//             <li className="t">
//               <h1 lang={i18n.language}>
//                 {t("Header-h")}
//               </h1>
//             </li>
//             <li className="diffrint " lang={i18n.language}>
//               {t("Header-p")}
//             </li>
//             <li className="t">
//               <a className="navbar-brand" href="#">
//                 <img src={Logo} alt="Logo" />
//               </a>
//             </li>
//           </ul>
//           <div className="typing-demo ">
//             <div className="mt-3 m-0">
//               <h5 lang={i18n.language}>{t("Main")}</h5>
//             </div>
//           </div>
//         </div>
//         <nav className="navbar navbar-expand-lg navbar-light">
//           <div className="container-fluid">

//             <ul className="title_toggler">
//               <li className="title">
//                 <h1 lang={i18n.language}>
//                   {t("Header-h")}
//                 </h1>
//               </li>
//             </ul>
//             <ul className="navbar-right">
//               <li className="nav-item dropdown ms-3 nav-link dropdown-toggle fs-5">
//                 <span className="navbar-toggler-icon"></span>
//                 <div
//                   className="dropdown lanBtn"
//                   onMouseEnter={showDropdown}
//                   onMouseLeave={hideDropdown}
//                   onClickCapture={showDropdown}
//                   aria-labelledby="navbarDropdownMenuLink"
//                 >
//                   <LuLanguages />
//                   <div
//                     className="dropdown-content"
//                     ref={dropdownRef}
//                     style={{ display: "none" }}
//                   >
//                     <a
//                       onClick={() => handleLanguageChange("ja")}
//                       className="dropdown-item"
//                     >
//                       日本語
//                     </a>
//                     <a
//                       onClick={() => handleLanguageChange("en")}
//                       className="dropdown-item"
//                     >
//                       English
//                     </a>
//                     <a
//                       onClick={() => handleLanguageChange("ar")}
//                       className="dropdown-item"
//                     >
//                       العربية
//                     </a>
//                   </div>
//                 </div>
//                 <button
//                   className="navbar-toggler"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#navbarNavDropdown"
//                   aria-controls="navbarNavDropdown"
//                   aria-expanded="false"
//                   aria-label="Toggle navigation"
//                 >
//                   <FiAlignJustify />
//                 </button>
//               </li>
//             </ul>

//             <div className="collapse navbar-collapse" id="navbarNavDropdown" ref={navbarCollapseRef}>
//               <ul className="navbar-nav">
//                 <li className="nav-item active">
//                   <a className="nav-link" href="#">
//                     <FaHome />
//                     {t("Navbar-Home")}
//                     <span className="sr-only"></span>
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#about">
//                     <IoPerson /> {t("Navbar-about")}
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#Services">
//                     <GrServices /> {t("Navbar-Services")}
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#Contact">
//                     <FaPhoneAlt /> {t("Navbar-contact")}
//                   </a>
//                 </li>
//                 <li className="nav-item dropdown ms-3 nav-link dropdown-toggle fs-5">
//                   <div
//                     className="dropdown lanBtn langPc"
//                     onMouseEnter={showDropdown}
//                     onMouseLeave={hideDropdown}
//                     onClickCapture={showDropdown}
//                     aria-labelledby="navbarDropdownMenuLink"
//                   >
//                     <LuLanguages /> <span className="LanNAme">{current}</span> ▼
//                     <div
//                       className="dropdown-content"
//                       ref={dropdownRef}
//                       style={{ display: "none" }}
//                     >
//                       <a
//                         onClick={() => handleLanguageChange("ja")}
//                         className="dropdown-item"
//                       >
//                         日本語
//                       </a>
//                       <a
//                         onClick={() => handleLanguageChange("en")}
//                         className="dropdown-item"
//                       >
//                         English
//                       </a>
//                       <a
//                         onClick={() => handleLanguageChange("ar")}
//                         className="dropdown-item"
//                       >
//                         العربية
//                       </a>
//                     </div>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }

import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import Logo from "../../assets/Logo/سوىAI-01 (1).webp";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import { LuLanguages } from "react-icons/lu";
import i18n from "i18next";
import { FiAlignJustify } from "react-icons/fi";

import "./Navbar.css";

export default function Navbar() {
  const [t] = useTranslation();
  const dropdownTogglerRef = useRef(null);
  const dropdownCollapseRef = useRef(null);
  const navbarCollapseRef = useRef(null);

  const languageNames = {
    en: "English",
    ja: "日本語",
    ar: "العربية"
  };

  const [current, setcurrent] = useState(languageNames[i18n.language]);

  const showDropdown = (dropdownRef) => {
    if (dropdownRef.current) {
      dropdownRef.current.style.display = "block";
    }
  };

  const hideDropdown = (dropdownRef) => {
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
      hideDropdown(dropdownTogglerRef);
      hideDropdown(dropdownCollapseRef);
      closeNavbarCollapse();
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setcurrent(languageNames[lang]);
  };

  return (
    <div className="container">
      <div className="revers">
        <div className="title container reversMobile">
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
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">

            <ul className="title_toggler">
              <li className="title">
                <h1 lang={i18n.language}>
                  {t("Header-h")}
                </h1>
              </li>
            </ul>
            <ul className="navbar-right">
              <li className="nav-item dropdown ms-3 nav-link dropdown-toggle fs-5">
                <span className="navbar-toggler-icon"></span>
                <div
                  className="dropdown lanBtn"
                  onMouseEnter={() => showDropdown(dropdownTogglerRef)}
                  onMouseLeave={() => hideDropdown(dropdownTogglerRef)}
                  onClickCapture={() => showDropdown(dropdownTogglerRef)}
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <LuLanguages />
                  <div
                    className="dropdown-content"
                    ref={dropdownTogglerRef}
                    style={{ display: "none" }}
                  >
                    <a
                      onClick={() => handleLanguageChange("ja")}
                      className="dropdown-item"
                    >
                      日本語
                    </a>
                    <a
                      onClick={() => handleLanguageChange("en")}
                      className="dropdown-item"
                    >
                      English
                    </a>
                    <a
                      onClick={() => handleLanguageChange("ar")}
                      className="dropdown-item"
                    >
                      العربية
                    </a>
                  </div>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <FiAlignJustify />
                </button>
              </li>
            </ul>

            <div className="collapse navbar-collapse" id="navbarNavDropdown" ref={navbarCollapseRef}>
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    <FaHome />
                    {t("Navbar-Home")}
                    <span className="sr-only"></span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    <IoPerson /> {t("Navbar-about")}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Services">
                    <GrServices /> {t("Navbar-Services")}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Contact">
                    <FaPhoneAlt /> {t("Navbar-contact")}
                  </a>
                </li>
                <li className="nav-item dropdown ms-3 nav-link dropdown-toggle fs-5">
                  <div
                    className="dropdown lanBtn langPc"
                    onMouseEnter={() => showDropdown(dropdownCollapseRef)}
                    onMouseLeave={() => hideDropdown(dropdownCollapseRef)}
                    onClickCapture={() => showDropdown(dropdownCollapseRef)}
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <LuLanguages /> <span className="LanNAme">{current}</span> ▼
                    <div
                      className="dropdown-content"
                      ref={dropdownCollapseRef}
                      style={{ display: "none" }}
                    >
                      <a
                        onClick={() => handleLanguageChange("ja")}
                        className="dropdown-item"
                      >
                        日本語
                      </a>
                      <a
                        onClick={() => handleLanguageChange("en")}
                        className="dropdown-item"
                      >
                        English
                      </a>
                      <a
                        onClick={() => handleLanguageChange("ar")}
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
    </div>
  );
}