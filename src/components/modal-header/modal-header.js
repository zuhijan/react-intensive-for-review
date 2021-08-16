import React from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './modal-header.module.css';
import PropTypes from 'prop-types';

function ModalHeader({ header, onClose }) {
  ModalHeader.propTypes = {
    onClose: PropTypes.func,
    header: PropTypes.string,
  };

  return (
    <div className={styles.header}><h3 className={`text text_type_main-large ${styles.title}`}>{header}</h3>
      <button onClick={onClose} className={styles.button}>
        <CloseIcon CloseIcon type='primary' />
      </button>
    </div>
  );
}

export default ModalHeader;
