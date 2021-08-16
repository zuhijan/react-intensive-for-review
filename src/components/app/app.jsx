import React, { useState, useEffect } from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import './app.css';
import Modal from '../modal/modal';
import IngredientsDetails from '../ingredients-details/ingredients-details';
import OrderDetails from '../order-details/order-details';
import { getMenuIngredients } from '../../utils/actions';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { getNumber } from '../../utils/actions/order';
import { ITEM_TO_VIEW } from '../../utils/actions/item-to-view';
import { CREATE_ORDER, RESET_ORDER } from '../../utils/actions/order';

function App() {
  const [isOrderInvalid, setIsOrderInvalid] = useState(false);

  const dispatch = useDispatch();
  const { number } = useSelector((state) => state.order);
  const { itemToView } = useSelector((state) => state.itemToView);

  useEffect(() => {
    dispatch(getMenuIngredients());
  }, [dispatch]);

  const onCardClick = (item) => {
    dispatch({
      type: ITEM_TO_VIEW,
      payload: {item, type: 'get'},
    });
  };

  const onOrderClick = (orderData, isBun) => {
    dispatch({
      type: CREATE_ORDER,
      payload: orderData,
    });
    dispatch(getNumber({ ingredients: orderData }));
  };

  const onCloseClick = () => {
    setIsOrderInvalid(false);
    dispatch({
      type: ITEM_TO_VIEW,
      payload: {type: 'reset'}
    });
    dispatch({
      type: RESET_ORDER,
    });
  };

  const modal = (
    <Modal
      header={itemToView ? 'Детали ингредиента' : null}
      onClose={onCloseClick}
    >
      {itemToView && <IngredientsDetails item={itemToView} />}
      {number && <OrderDetails order={number} />}
      {isOrderInvalid && (
        <p className='text text_type_main-large pb-5'>
          Добавьте булку в ваш бургер
        </p>
      )}
    </Modal>
  );

  return (
    <div className="app">
      <AppHeader />
      <main className="main">
        <h1
          className={`text text_type_main-large pl-2 pr-2 pb-5 pt-10 header`}
        >
          Cоберите бургер
        </h1>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients
            onCardClick={onCardClick}
            onCloseClick={onCloseClick}
          />
          <BurgerConstructor onOrderClick={onOrderClick} />
        </DndProvider>
      </main>
      {(isOrderInvalid || number || itemToView) && modal}
    </div>
  );
}

export default App;
