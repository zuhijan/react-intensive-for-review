import React from 'react';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';
import logo from '../../images/logo.svg';
import burger from '../../images/burger.svg';

function AppHeader(props) {
  return (
    <header className={styles.header}><div className={`p-2 ${styles.header_content}`}>
        <nav className={styles.nav}>
          <p className={styles.link}>
         <BurgerIcon type='primary' />
            <span className='text text_type_main-default ml-1 mr-4'>
              Конструктор
          </span>
          </p>
          <p className={styles.link_inactive}>
            <ListIcon type='secondary' />
            <span className='text text_type_main-default ml-1'>
              Лента заказов
            </span>
          </p>
        </nav>
        <div className={styles.logo}>
          <Logo />
        </div>
        <p className={styles.link_inactive}>
  <ProfileIcon type='secondary' />
          <span className='text text_type_main-default ml-1'>
            Личный кабинет
       </span>
        </p>
        <img src={logo} className={styles.logo_small} alt='small logo' />
        <img src={burger} className={styles.logo_small} alt='menu' />
      </div>
    </header>
  );
}

export default AppHeader;
