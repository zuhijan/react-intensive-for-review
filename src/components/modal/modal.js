import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import ModalHeader from '../modal-header/modal-header';
import ModalOverlay from '../modal-overlay/modal-overlay';
import PropTypes from 'prop-types';
const modalRoot = document.getElementById('react-modals');

function Modal({ onClose, header, children }) {
  Modal.propTypes = {
    onClose: PropTypes.func,
    header: PropTypes.string,
    children: PropTypes.node,
  };

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [onClose]);

  return ReactDOM.createPortal(
    <ModalOverlay onClose={onClose}>
      <div className={`p-5 ${styles.modal}`}>
        <ModalHeader header={header} onClose={onClose} />
        {children}
      </div>
    </ModalOverlay>,
    modalRoot
  );
}

export default Modal;
