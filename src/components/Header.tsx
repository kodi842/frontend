import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">BMW x ChatGPT</div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#home" className="header__nav-link">Главная</a>
            </li>
            <li className="header__nav-item">
              <a href="#features" className="header__nav-link">Функции</a>
            </li>
            <li className="header__nav-item">
              <a href="#modules" className="header__nav-link">Модули</a>
            </li>
            <li className="header__nav-item">
              <a href="#contacts" className="header__nav-link">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;