import React from "react";
import "./HeroSection.css";
import bmwLogo from "../assets/bmw-logo.svg";
import gptLogos from "../assets/gpt-logos.png";
import bmwCar from "../assets/bmw-car.jpg";

interface HeroSectionProps {
  openModal: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ openModal }) => {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-section__container">
        <div className="hero-section__content">
          <h1 className="hero-section__title">Будущее на колесах</h1>
          <p className="hero-section__subtitle">ИИ и мощь - теперь вместе</p>
          <button className="hero-section__button" onClick={openModal}>
            Смотреть больше
          </button>
          <div className="hero-section__logos">
            <img src={bmwLogo} alt="BMW Logo" className="hero-section__logo-item" />
            <img src={gptLogos} alt="GPT Logos" className="hero-section__logo-item" />
          </div>
        </div>
        <div className="hero-section__image-wrapper">
          <img src={bmwCar} alt="BMW Car" className="hero-section__image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;