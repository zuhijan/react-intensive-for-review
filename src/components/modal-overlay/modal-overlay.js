import React from 'react';
import styles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

function ModalOverlay({ onClose, children }) {
  ModalOverlay.propTypes = {
    onClose: PropTypes.func,
  };
  return <div className={styles.backdrop} onClick={onClose}>{children}</div>;
}

export default ModalOverlay;
