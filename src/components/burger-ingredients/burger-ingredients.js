import React, { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import { MENU_LIST } from '../../utils/constant';
import Menusection from '../menu-section/menu-section';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

const BurgerIngredients = ({ onCardClick }) => {
  const [currentitem, setcurrentitem] = useState('bun');
  const [bun, inViewBun] = useInView({
    threshold: 0.8,
  });
  const [sauce, inViewSauce] = useInView({
    threshold: 0.7,
  });
  const [main, inViewMain] = useInView({
    threshold: 0.3,
  });
  const handleScroll = () => {
    inViewBun && setcurrentitem('bun');
    inViewMain && !inViewSauce && setcurrentitem('main');
    inViewSauce && !inViewBun && setcurrentitem('sauce');
  };

  return (
<section className={`p-2 ${styles.section}`}>
      <div className={styles.tab}>
        {MENU_LIST.map((item, index) => (
          <Tab value={item.type} active={currentitem === item.type}
            onClick={setcurrentitem}
            key={index}
          >
            {item.title}
          </Tab>
        ))}
      </div>
      <div className={`mt-10 ${styles.menu}`} onScroll={handleScroll}>
        <Menusection
          type='bun'
          title='Булки'
          key='bun'
          onCardClick={onCardClick}
          customRef={bun}
        />
        <Menusection
          type='sauce'
          title='Соусы'
          key='sauce'
          onCardClick={onCardClick}
          customRef={sauce}
        />
        <Menusection
          type='main'
          title='Начинки'
          key='main'
          onCardClick={onCardClick}
          customRef={main}
        />
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  onCardClick: PropTypes.func.isRequired,
};

export default BurgerIngredients;
