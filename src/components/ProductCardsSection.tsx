import React from "react";
import "./ProductCardsSection.css";

import img1 from "../assets/product-img1.png";
import img2 from "../assets/product-img2.png";
import img3 from "../assets/product-img3.png";

interface ProductCardsSectionProps {
  openModal: () => void;
}

const products = [
  {
    image: img1,
    title: "Голосовой помощник BMW",
  },
  {
    image: img2,
    title: "Мультимедийная система с Android Auto",
  },
  {
    image: img3,
    title: "Развлечение для задних пассажиров",
  },
];

const ProductCardsSection: React.FC<ProductCardsSectionProps> = ({ openModal }) => {
  return (
    <section className="product-cards-section" id="modules">
      <div className="container product-cards-section__container">
        {products.map((product, index) => (
          <article className="product-card" key={index}>
            <img
              src={product.image}
              alt={`Изображение продукта ${index + 1}`}
              className="product-card__image"
            />
            <div className="product-card__caption">{product.title}</div>
            <button className="product-card__button" onClick={openModal}>Подробнее</button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductCardsSection;