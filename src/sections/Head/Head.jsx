// import { HelmetProvider } from "react-helmet-async";
// import { Helmet } from "react-helmet";
// import { useTranslation } from "react-i18next";

// export default function Head() {
//   const { t } = useTranslation();
//   return (
//     <HelmetProvider>
//       <Helmet>
//         <title>{t("title")} {t("Header-p")}</title>
//         <meta name="description" content={t("About-p")} />
//         <meta property="og:title" content={t("Header-p")}/>
//         <meta property="og:description" content={t("About-p")} />
//         <meta property="og:image" content="https://sawagroup.jp/assets/%D8%B3%D9%88%D9%89AI-01%20(1)-DEH58VaA.webp" />
//         <meta property="og:url" content="https://sawagroup.jp/" />
//         <meta name="twitter:title" content={t("title")} />
//         <meta name="twitter:description" content={t("About-p")} />
//         <meta name="twitter:image" content="https://sawagroup.jp/assets/%D8%B3%D9%88%D9%89AI-01%20(1)-DEH58VaA.webp" />
//         <meta name="keywords" content="الاستيراد و التصدير, الترجمة و التدقيق, تخطيط و إعداد التقارير الإخبارية, تعليم اللغتين العربية و اليابانية, التصميم و البرمجة, تقديم الاستشارات الدراسية و الثقافية, دعم التبادل العلمي و الثقافي, تقديم الاستشارت الاستثمارية و التجارية, اعمال النشر المكتبي (DTP), دعم إضافة اللغات الى مواقع الويب, تسجيل الاصوات و تفريغها, تخطيط و اعداد الجولات السياحية, Sawa Group, Import & Export, Translation & Proofreading, Planning and preparing news reports, Teaching Arabic and Japanese, Design & Programming, Providing study and cultural consultations, Supporting scientific and cultural exchange, Providing investment and commercial advice, Office Publishing (DTP), Support for adding languages to websites, Recording and unloading sounds, Planning and preparing tours, 輸入及び輸出, 翻訳及び校正, ニュースレポートの企画及び制作, アラビア語・日本語教育, デザイン及びプログラミング, 観光ツアーの企画及び準備, 学術及び文化に関するコンサルティングの提供, 投資及びビジネスに関するコンサルティングの提供, デスクトップパブリッシング（ＤＴＰ）, ウェブサイトへの言語の追加, 音声録音及び文字起こし, 学術及び文化交流支援" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta
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
//       </Helmet>  <script type="application/ld+json">
//           {JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Course",
//             "name": "アラビア語を学ぶ",
//             "description": "アラビア語の基本、文法、会話を学ぶためのコース。",
//             "provider": {
//               "@type": "Organization",
//               "name": "Sawa Group",
//               "sameAs": "https://sawagroup.jp/"
//             }
//           })}
//         </script>
//     </HelmetProvider>
//   );
// }

import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function Head({ serviceName }) {
  const { t } = useTranslation();

  // تحديد عناوين الخدمات الـ 12 المتاحة
  const serviceTitles = {
    service1: t("Services-card1T"),
    service2: t("Services-card2T"),
    service3: t("Services-card3T"),
    service4: t("Services-card4T"),
    service5: t("Services-card5T"),
    service6: t("Services-card6T"),
    service7: t("Services-card7T"),
    service8: t("Services-card8T"),
    service9: t("Services-card9T"),
    service10: t("Services-card10T"),
    service11: t("Services-card11T"),
    service12: t("Services-card12T"),
  };

  // تعيين عنوان الصفحة بناءً على اسم الخدمة أو استخدام العنوان الافتراضي
  const pageTitle =
    serviceTitles[serviceName] ||t("title");

  return (
    <HelmetProvider>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={t("About-p")} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={t("About-p")} />
        <meta
          property="og:image"
          content="https://sawagroup.jp/assets/%D8%B3%D9%88%D9%89AI-01%20(1)-DEH58VaA.webp"
        />
        <meta property="og:url" content="https://sawagroup.jp/" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={t("About-p")} />
        <meta
          name="twitter:image"
          content="https://sawagroup.jp/assets/%D8%B3%D9%88%D9%89AI-01%20(1)-DEH58VaA.webp"
        />
        <meta
          name="keywords"
          content="الاستيراد و التصدير, الترجمة و التدقيق, تخطيط و إعداد التقارير الإخبارية, تعليم اللغتين العربية و اليابانية, التصميم و البرمجة, تقديم الاستشارات الدراسية و الثقافية, دعم التبادل العلمي و الثقافي, تقديم الاستشارت الاستثمارية و التجارية, اعمال النشر المكتبي (DTP), دعم إضافة اللغات الى مواقع الويب, تسجيل الاصوات و تفريغها, تخطيط و اعداد الجولات السياحية, Sawa Group, Import & Export, Translation & Proofreading, Planning and preparing news reports, Teaching Arabic and Japanese, Design & Programming, Providing study and cultural consultations, Supporting scientific and cultural exchange, Providing investment and commercial advice, Office Publishing (DTP), Support for adding languages to websites, Recording and unloading sounds, Planning and preparing tours, 輸入及び輸出, 翻訳及び校正, ニュースレポートの企画及び制作, アラビア語・日本語教育, デザイン及びプログラミング, 観光ツアーの企画及び準備, 学術及び文化に関するコンサルティングの提供, 投資及びビジネスに関するコンサルティングの提供, デスクトップパブリッシング（ＤＴＰ）, ウェブサイトへの言語の追加, 音声録音及び文字起こし, 学術及び文化交流支援"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: "アラビア語を学ぶ",
            description: "アラビア語の基本、文法،会話を学ぶためのコース。",
            provider: {
              "@type": "Organization",
              name: "Sawa Group",
              sameAs: "https://sawagroup.jp/",
            },
          })}
        </script>
      </Helmet>
    </HelmetProvider>
  );
}
