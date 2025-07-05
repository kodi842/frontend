import React from "react";
import "./Footer.css"; // сюда вынеси CSS для футера

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <p className="footer__copy">&copy; 2025 BMW x ChatGPT. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;