import React from 'react';
import styles from './ingredients-details.module.css';
import PropTypes from 'prop-types';

function IngredientsDetails({ item }) {
  IngredientsDetails.propTypes = {
    item: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image_mobile: PropTypes.string.isRequired,
    }).isRequired,
  };

  return (
    <div className={styles.container}>
      <img src={item.image_large} alt="" className={styles.image} />
      <p className={`text text_type_main-medium pb-3 ${styles.title}`}>
        {item.name}
      </p>
      <p className={`text text_type_main-default pb-5 ${styles.title}`}>
        Превосходные котлеты из марсианской Магнолии для фирменных космических
        бургеров, набирающих популярность по всей вселенной.
      </p>
      <ul className={styles.list}>
        <li>
          <p className='text text_type_main-default pb-1'>Калории, ккал</p>
          <p className={`text text_type_digits-default ${styles.digits}`}>
            {item.calories}
          </p>
        </li>
        <li>
          <p className='text text_type_main-default pb-1'>Белки, г</p>
          <p className={`text text_type_digits-default ${styles.digits}`}>
            {item.proteins}
          </p>
        </li>
        <li>
          <p className='text text_type_main-default pb-1'>Жиры, г</p>
          <p className={`text text_type_digits-default ${styles.digits}`}>
            {item.fat}
          </p>
        </li>
        <li>
          <p className='text text_type_main-default pb-1'>Углеводы, г</p>
          <p className={`text text_type_digits-default ${styles.digits}`}>
            {item.carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  );
}

export default IngredientsDetails;
