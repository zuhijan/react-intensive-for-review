import React from 'react';
import styles from '../menu-section/menu-section.module.css';
import Card from '../card/card';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Menusection = ({ title, type, customRef, ...props }) => {
  const { ingredients } = useSelector((state) => state.burgerIngredients);

  Menusection.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  };

  return (
    <>
      <h3
        id={type}
        className={`text text_type_main-medium  pb-5 pt-5 ${styles.header}`}
      >
        {title}
      </h3>
      {ingredients && (
        <ul className={styles.cards} ref={customRef}>
          {ingredients
            .filter((item) => item.type === type)
            .map((item, index) => (
              <Card item={item} key={index} {...props} />
            ))}
        </ul>
      )}
    </>
  );
};

export default Menusection;
