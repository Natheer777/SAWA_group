// import { useRef, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { EffectFade, Navigation, Pagination } from "swiper/modules";
// import "swiper/css";

// import "./Header.css";

// export default function Header() {
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       if (swiperRef.current && swiperRef.current.swiper) {
//         const nextButton = swiperRef.current.swiper.navigation.nextEl;
//         if (nextButton) {
//           nextButton.click();
//         }
//       }
//     }, 5000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="container">
//       <div className="Main-img container">
//         <Swiper
//           ref={swiperRef}
//           dir="ltr"
//           spaceBetween={30}
//           effect={"fade"}
//           autoplay={{ delay: 10000 }}
//           navigation={true}
//           loop={true}
//           pagination={{ clickable: true }}
//           modules={[EffectFade, Navigation, Pagination]}
//           className="mySwiper"
//         >
      
//           <SwiperSlide className="img1"></SwiperSlide>
//           <SwiperSlide className="img2"></SwiperSlide>
//           <SwiperSlide className="img3"></SwiperSlide>
//         </Swiper>
//       </div>
//     </div>
//   );
// }


// import{ useState, useEffect } from 'react';

// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './Header.css'; // لإنشاء تأثيرات التداخل
// import img1 from '../../assets/Services/من نحن_.webp'
// import img2 from '../../assets/Services/img3.webp'
// import img3 from '../../assets/Services/اعمالنا_.webp'
// import { useTranslation } from 'react-i18next';

// const images = [
//   'image1.jpg',
//   'image2.jpg',
//   'image3.jpg',
// ];

// const AutoSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Change image every 3 seconds
//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   return (
//     <div style={styles.sliderContainer}>
//       {images.map((src, index) => (
//         <img
//           key={index}
//           src={src}
//           alt={`Slide ${index}`}
//           style={{
//             ...styles.sliderImage,
//             ...(index === currentIndex ? styles.slickActive : {}),
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default AutoSlider;
import  { useState, useEffect } from 'react';
import img1 from '../../assets/Services/من نحن_.webp'
import img2 from '../../assets/Services/img3 (1).webp'
import img3 from '../../assets/Services/اعمالنا .webp'
import './Header.css'; // Import the CSS file

const images = [
img1,
img2,
img3
];

const AutoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="slider-container container mt-4">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index}`}
          className={`slider-image ${index === currentIndex ? 'slick-active' : ''}`}
        />
      ))}
    </div>
  );
};

export default AutoSlider;