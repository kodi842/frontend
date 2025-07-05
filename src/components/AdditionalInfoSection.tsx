import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./AdditionalInfoSection.css";

const infoData = [
  { text: "ИИ-навигация" },
  { text: "Голосовой ассистент" },
  { text: "Оптимизация маршрутов" },
  { text: "Зрение для водителя" },
  { text: "Умный дом: интеграция" },
  { text: "Автообновление ПО" },
  { text: "Личные рекомендации" },
  { text: "Безопасное вождение" }
];

const AdditionalInfoSection: React.FC = () => {
  return (
    <section className="additional-info-section" id="contacts">
      <div className="container additional-info-section__container">
        <div className="myInfoSlider">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".custom-swiper-button-next",
              prevEl: ".custom-swiper-button-prev"
            }}
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 }
            }}
          >
            {infoData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="info-item">
                  <p className="info-item__text">{item.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="custom-swiper-button-prev" aria-label="Previous slide"></button>
          <button className="custom-swiper-button-next" aria-label="Next slide"></button>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfoSection;