import { getIngredients } from '../api';

export const GET_INGREDIENTS = 'GET_INGREDIENTS';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';

export const DECREASE_ITEM = 'DECREASE_ITEM';
export const INCREASE_ITEM = 'INCREASE_ITEM';

export const SET_VIEWING_ITEM = 'SET_VIEWING_ITEM';
export const RESET_VIEWING_ITEM = 'RESET_VIEWING_ITEM';

export function getMenuIngredients() {
  return function (dispatch) {
    dispatch({
      type: GET_INGREDIENTS,
    });
    getIngredients()
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            // ingredients: res.data,
            ingredients: res.data.map((item) => ({
              ...item,
              qty: 0,
            })),
          });
        } else {
          dispatch({
            type: GET_INGREDIENTS_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_INGREDIENTS_FAILED,
        });
      });
  };
}
