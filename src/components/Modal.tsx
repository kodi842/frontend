// src/components/Modal.tsx
import React from "react";
import "../components/Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal show" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Свяжитесь с нами</h2>
        <form className="modal-form">
          <div className="form-group">
            <label htmlFor="name">Имя:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-actions">
            <button type="submit" className="modal-button modal-button--send">
              Отправить
            </button>
            <button
              type="button"
              className="modal-button modal-button--cancel"
              onClick={onClose}
            >
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;