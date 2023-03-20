import React from "react";
import PropTypes from "prop-types";
import styles from "./modal.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  return (
    <div
      className={`${styles.modal} ${isOpen && styles["is-open"]}`}
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={styles["modal-content"]}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

Modal.Title = ({ children }) => (
  <h2 className={styles["modal-title"]}>{children}</h2>
);

Modal.Body = ({ children }) => (
  <div className={styles["modal-body"]}>{children}</div>
);

Modal.Footer = ({ children }) => (
  <div className={styles["modal-footer"]}>{children}</div>
);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
