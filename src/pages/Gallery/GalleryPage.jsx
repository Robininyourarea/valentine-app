import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./GalleryPage.css";

// Import your images
import img1 from "../../assets/photo1.jpg";
import img2 from "../../assets/photo2.jpg";
import img3 from "../../assets/photo3.jpg";
import img4 from "../../assets/photo4.jpg";
import img5 from "../../assets/photo5.jpg";
import img6 from "../../assets/photo6.jpg";
import img7 from "../../assets/photo7.jpg";
import img8 from "../../assets/photo8.jpg";
import img9 from "../../assets/photo9.jpg";
import img10 from "../../assets/photo10.jpg";
import img11 from "../../assets/photo11.jpg";
import img12 from "../../assets/photo12.jpg";
import img13 from "../../assets/photo13.jpg";

const GalleryPage = () => {
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13
  ]; // List of images

  return (
    <div className="gallery-container">
      <h1>Happy Valentine's Day ❤️</h1>
      <p>You make my life beautiful every single day.</p>
      <p>Thank you for being my girlfriend</p>

      {/* Swiper Image Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        centeredSlides={true} // Keeps the active image in the center
        slidesPerView={3} // Shows 3 images (previous, current, next)
        spaceBetween={20} // Space between images
        className="gallery-slider"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="swiper-slide-custom">
            <img className="gallery-image" src={image} alt={`slide-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GalleryPage;
