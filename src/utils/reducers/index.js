import { combineReducers } from 'redux';
import { burgerIngredients } from './burger-ingredients';
import { constructorIngredients } from './constructor-ingredients';
import { order } from './order';
import { itemToView } from './item-to-view';

export const rootReducer = combineReducers({
  burgerIngredients,
  constructorIngredients,
  order,
  itemToView,
});
