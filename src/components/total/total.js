import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './total.module.css';
import PropTypes from 'prop-types';

function Total({ sum }) {
  Total.propTypes = {
    sum: PropTypes.number.isRequired,
  };

  return (
    <div className={`pr-3 ${styles.total}`}>
      <span className={`text text_type_digits-default pr-1`} style={{fontSize: "48px"}}>
        {sum}
      </span>
      <CurrencyIcon type='primary' />
    </div>
  );
}

export default Total;
