import React, { useCallback } from 'react';
import styles from './burger-constructor.module.css';
import {
  ConstructorElement,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import Total from '../total/total';
import { useDrop } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';
import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  REORDER_INGREDIENTS,
} from '../../utils/actions/constructor-ingredients';
import DraggableConstructorCard from '../draggable-constructor-card/draggable-constructor-card';
import {IngredientsContext} from "../../contexts/IngredientsContext";

function BurgerConstructor({ onOrderClick }) {
  const dispatch = useDispatch();
  const { constructorIngredients } = useSelector(
    (state) => state.constructorIngredients
  );
  const bun = useSelector((state) => {
    return state.constructorIngredients.constructorIngredients.filter(
      (item) => item.type === 'bun'
    )[0];
  });



  const getTotalPrice = (state) => {
    let total = 0;
    state.constructorIngredients.map((item) =>
      item.type === 'bun' ? (total += item.price * 2) : (total += item.price)
    );
    return total;
  };

  const totalprice = useSelector((state) => {
    return getTotalPrice(state.constructorIngredients);
  });



  const insideBun = useSelector((state) => {
    return state.constructorIngredients.constructorIngredients.filter(
      (item, i) => item.type !== 'bun'
    );
  });

  const onItemClick = (item) => {

  };

  const handleOrderClick = (e) => {
    const isBun = constructorIngredients.some((item) => item.type === 'bun');
    onOrderClick(
      constructorIngredients.filter((item) => item.type === 'bun').map((item) => item = item._id),
      isBun
    );
  };

  const [, dropTarget] = useDrop({
    accept: 'ingredients',
    drop(item) {onDropHandler(item);},
  });

  const onDropHandler = (item) => {
    dispatch({
      type: ADD_INGREDIENT,
      payload: item,
    });
  };

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const newCards = [...insideBun];
      newCards.splice(hoverIndex, 0, newCards.splice(dragIndex, 1)[0]);
      // setInsideBun(newCards);
      dispatch({ type: REORDER_INGREDIENTS, payload: newCards });
      dispatch({
        type: ADD_INGREDIENT,
        payload: newCards[dragIndex]
      });
    },
    [insideBun, dispatch]
  );

  return (
    <IngredientsContext.Provider value={constructorIngredients}>
    <section
      className={styles.section}
      ref={dropTarget}
      onDrop={(e) => {
        e.preventDefault();
      }}
    >{constructorIngredients.length > 0 ? (
        <>
          {bun && (
            <div className={`mr-0 ml-0 mt-0 mb-4 ${styles.bun}`}>
              <ConstructorElement
                thumbnail={bun.image_mobile}
                text={bun.name}
                price={bun.price}
                isLocked={true}
                type='top'
              />
            </div>
          )}
          <ul className={`mr-0 ml-1 mt-0 mb-0 p-0 ${styles.list}`}>
            {insideBun.map((card, index) => (
              <DraggableConstructorCard
                item={card}
                onItemClick={onItemClick}
                key={index}
                index={index}
                id={card.key}
                moveCard={moveCard}
              />
            ))}
          </ul> {bun && (
            <div className={`mr-0 ml-0 mt-4 mb-0 ${styles.bun}`}>
              <ConstructorElement
                thumbnail={bun.image_mobile}
                text={bun.name}
                price={bun.price}
                isLocked={true}
                type='bottom'
              />
            </div>
          )}
          <div className={`pr-3 pl-3 pt-5 ${styles.order}`}>
            <Total sum={totalprice} />
            <Button type='primary' size='large' onClick={handleOrderClick}>
              Оформить заказ
            </Button>
          </div>
        </>
      ) : null}
    </section>
    </IngredientsContext.Provider>
  );
}

export default BurgerConstructor;
