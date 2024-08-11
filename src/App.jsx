import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Home } from "./pages/index";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Logo from "../src/assets/Logo/سوىAI-01 (1).webp";
import { FaLine } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import FontFaceObserver from "fontfaceobserver";
const languages = [
  {
    code: "ar",
    name: "العربية",
    country_code: "ar",
    dir: "rtl",
  },
  {
    code: "ja",
    name: "japanese ",
    country_code: "ja",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
];

function App() {


  const [t ] = useTranslation();
  const [lan, setLan] = useState(navigator.language);
  useEffect(() => {
    setLan(navigator.language);
    i18next.changeLanguage(lan);
    if (!i18next.languages.includes(lan)) {
      i18next.changeLanguage("en");
    } else {
      i18next.changeLanguage(lan);
    }
  }, [lan]);

  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  useEffect(() => {
    console.log("Setting page stuff");
    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage, t]);

  ////
  useEffect(() => {
    setInterval(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      });

    
      const elements = document.querySelectorAll(".left , .right , .hidden , .top")
  
      elements.forEach((el)=>{observer.observe(el)})

      return () => {
        elements.forEach((el) =>{observer.unobserve(el)})
   
      };
    });
  }, []);


////
const [loading, setLoading] = useState(true);

useEffect(() => {
  const timeoutId = setTimeout(() => {
    setLoading(false);
  }, 4000); // فترة الانتظار الافتراضية

  return () => clearTimeout(timeoutId); // تنظيف المؤقت عند إلغاء تركيب الكومبوننت
}, []);

  ////

  const [showIcons, setShowIcons] = useState(false);

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };
  const hideIcons = () => {
    setShowIcons(false);
  };
  ////
  setTimeout(() => {
    document.querySelector(".social").style.display = 'block'
  }, 5000);
  return (
    <>
    
      <div className="social hidden">
        <ul onMouseEnter={toggleIcons} onClick={toggleIcons} onMouseLeave={hideIcons} style={{ cursor: "pointer" }}>
          <li className="click">
            <IoChatbubbleEllipsesOutline />
          </li>
          {showIcons && (
            <>
              <li className="line top">
                <a href="https://line.me/ti/p/IuAqVt59QV">
                  <FaLine />
                </a>
              </li>
              <li className="email top">
                <a href="mailto:contact@sawagroup.jp">
                  <MdEmail />
                </a>
              </li>
              <li className="whatsapp top">
                <a href="https://wa.link/mr0gya">
                  <FaWhatsapp />
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
      {loading ? (
        <img className="Loading" src={Logo} alt="" />
      ) : (
        <>
          
              <Router>
            <Routes>
              <Route path="/SAWA_group/" element={<Home />} />
            </Routes>
              </Router>
        
        </>
       )} 
    </>
  );
}

export default App;