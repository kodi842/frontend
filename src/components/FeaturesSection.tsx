import React from "react";
import "./FeaturesSection.css";

import navIcon from "../assets/icon-navigation.svg";
import voiceIcon from "../assets/icon-voice.svg";
import routeIcon from "../assets/icon-route.svg";
import driverIcon from "../assets/icon-driver.svg";

const features = [
  { icon: navIcon, text: "ИИ-навигация" },
  { icon: voiceIcon, text: "Голосовой ассистент" },
  { icon: routeIcon, text: "Анализ маршрута" },
  { icon: driverIcon, text: "Ассистент водителя" },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section" id="features">
      <div className="container features-section__container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img
              src={feature.icon}
              alt={`Иконка: ${feature.text}`}
              className="feature-card__icon"
            />
            <p className="feature-card__text">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;