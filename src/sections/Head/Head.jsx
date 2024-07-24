// import { HelmetProvider } from "react-helmet-async";
// import { Helmet } from "react-helmet";
// import { useTranslation } from "react-i18next";
// export default function Head() {
//   const [t] = useTranslation();
//   return (
//     <div>
//       <HelmetProvider>
//         <Helmet>
// <meta  name="description" content={t("About-p")}/>
// <meta property="og:title" content={t("title")}/>
//     <meta property="og:description" content={t("About-p")}/>
//     <meta property="og:image" content="https://sawagroup.jp/assets/%D8%B3%D9%88%D9%89AI-01%20(1)-DEH58VaA.webp"/>
//     <meta property="og:url" content="https://sawagroup.jp/"/>


//     <meta name="twitter:title" content={t("title")}/>
//     <meta name="twitter:description" content={t("About-p")}/>
//     <meta name="twitter:image" content="https://sawagroup.jp/assets/%D8%B3%D9%88%D9%89AI-01%20(1)-DEH58VaA.webp"/>




//           <meta
//             name="keywords"
//             content="
//         الاستيراد و التصدير,
//         الترجمة و التدقيق,
//         تخطيط و إعداد التقارير الإخبارية,
//         تعليم اللغتين العربية و اليابانية,
//         التصميم و البرمجة,
//         تقديم الاستشارات الدراسية و الثقافية,
//         دعم التبادل العلمي و الثقافي,
//         تقديم الاستشارت الاستثمارية و التجارية,
//         اعمال النشر المكتبي (DTP),
//         دعم إضافة اللغات الى مواقع الويب,
//         تسجيل الاصوات و تفريغها,
//         تخطيط و اعداد الجولات السياحية,
//         Sawa Group,
//         Import & Export,
//         Translation & Proofreading,
//         Planning and preparing news reports,
//         Teaching Arabic and Japanese,
//         Design & Programming,
//         Providing study and cultural consultations,
//         Supporting scientific and cultural exchange,
//         Providing investment and commercial advice,
//         Office Publishing (DTP),
//         Support for adding languages to websites,
//         Recording and unloading sounds,
//         Planning and preparing tours,

//         輸入及び輸出    ,
//         翻訳及び校正,
//         ニュースレポートの企画及び制作,
//         アラビア語・日本語教育,
//         デザイン及びプログラミング,
//         観光ツアーの企画及び準備,
//         学術及び文化に関するコンサルティングの提供,
//         投資及びビジネスに関するコンサルティングの提供,
//         デスクトップパブリッシング（ＤＴＰ）,
//         ウェブサイトへの言語の追加,
//         音声録音及び文字起こし,
//         学術及び文化交流支援,      
//         "
//           />
//           <title>{t("title")}</title>
//         </Helmet>
//       </HelmetProvider>
//     </div>
//   );
// }



import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function Head() {
  const { t } = useTranslation();
  return (
    <HelmetProvider>
      <Helmet>
        <title>{t("title")} {t("Header-p")}</title>
        <meta name="description" content={t("About-p")} />
        <meta property="og:title" content={t("Header-p")}/>
        <meta property="og:description" content={t("About-p")} />
        <meta property="og:image" content="https://sawagroup.jp/assets/%D8%B3%D9%88%D9%89AI-01%20(1)-DEH58VaA.webp" />
        <meta property="og:url" content="https://sawagroup.jp/" />
        <meta name="twitter:title" content={t("title")} />
        <meta name="twitter:description" content={t("About-p")} />
        <meta name="twitter:image" content="https://sawagroup.jp/assets/%D8%B3%D9%88%D9%89AI-01%20(1)-DEH58VaA.webp" />
        <meta name="keywords" content="الاستيراد و التصدير, الترجمة و التدقيق, تخطيط و إعداد التقارير الإخبارية, تعليم اللغتين العربية و اليابانية, التصميم و البرمجة, تقديم الاستشارات الدراسية و الثقافية, دعم التبادل العلمي و الثقافي, تقديم الاستشارت الاستثمارية و التجارية, اعمال النشر المكتبي (DTP), دعم إضافة اللغات الى مواقع الويب, تسجيل الاصوات و تفريغها, تخطيط و اعداد الجولات السياحية, Sawa Group, Import & Export, Translation & Proofreading, Planning and preparing news reports, Teaching Arabic and Japanese, Design & Programming, Providing study and cultural consultations, Supporting scientific and cultural exchange, Providing investment and commercial advice, Office Publishing (DTP), Support for adding languages to websites, Recording and unloading sounds, Planning and preparing tours, 輸入及び輸出, 翻訳及び校正, ニュースレポートの企画及び制作, アラビア語・日本語教育, デザイン及びプログラミング, 観光ツアーの企画及び準備, 学術及び文化に関するコンサルティングの提供, 投資及びビジネスに関するコンサルティングの提供, デスクトップパブリッシング（ＤＴＰ）, ウェブサイトへの言語の追加, 音声録音及び文字起こし, 学術及び文化交流支援" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Helmet>  <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "アラビア語を学ぶ",
            "description": "アラビア語の基本、文法、会話を学ぶためのコース。",
            "provider": {
              "@type": "Organization",
              "name": "Sawa Group",
              "sameAs": "https://sawagroup.jp/"
            }
          })}
        </script>
    </HelmetProvider>
  );
}