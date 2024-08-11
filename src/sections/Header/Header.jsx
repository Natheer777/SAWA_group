

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