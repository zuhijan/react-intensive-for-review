import React from 'react';
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './card.module.css';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

function Card({ item, onCardClick }) {
  let getcounter = (state) => {
    console.log(state.constructorIngredients);
    if (state.constructorIngredients.find((el) => el._id === item._id) !== undefined) {
      return 1
    } else {
      return 0
    }
  }

  const counter = useSelector((state) =>
    getcounter(state.constructorIngredients)
  );

  const [, dragRef] = useDrag({
    type: 'ingredients',
    item: { ...item, key: uuidv4() },
  });

  return (
    <li
      className={`pl-3 pb-8 ${styles.card}`}
      onClick={() => onCardClick(item)}
      ref={dragRef}
    >
      {counter > 0 ? <Counter count={counter} size='small' /> : null}
      <img src={item.image} alt="" />
      <span className={`text text_type_digits-default pr-1`} style={{verticalAlign: "top"}}>
        {item.price}
      </span>
      <CurrencyIcon type='primary' />
      <p className='text text_type_main-default'>{item.name}</p>
    </li>
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image_mobile: PropTypes.string.isRequired,
  }).isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default Card;
