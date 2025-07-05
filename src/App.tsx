import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ProductCardsSection from "./components/ProductCardsSection";
import AdditionalInfoSection from "./components/AdditionalInfoSection";
import Preloader from "./components/Preloader";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import "./app.css";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="container">
          <Header />
          <HeroSection openModal={openModal} />
          <FeaturesSection />
          <ProductCardsSection openModal={openModal} />
          <AdditionalInfoSection />
          <Footer />
          <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      )}
    </>
  );
};

export default App;