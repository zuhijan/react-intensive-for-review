import {
  CREATE_ORDER,
  GET_ORDER_NUMBER_FAILED,
  GET_ORDER_NUMBER_SUCCESS,
  GET_ORDER_NUMBER,
  RESET_ORDER,
} from '../actions/order';

const initialState = {
  ingredients: [],
  number: '',
  getOrderNumberFailed: false,
  orderNumberRequest: false,
};

export const order = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER: {
      return {
        ...state,
        ingredients: action.payload,
      };
    }
    case GET_ORDER_NUMBER: {
      return {
        ...state,
        orderNumberRequest: true,
        getOrderNumberFailed: false,
      };
    }
    case GET_ORDER_NUMBER_SUCCESS: {
      return {
        ...state,
        ingredients: [],
        number: action.payload,
        orderNumberRequest: false,
      };
    }
    case GET_ORDER_NUMBER_FAILED: {
      return {
        ...state,
        getOrderNumberFailed: true,
        orderNumberRequest: false,
      };
    }
    case RESET_ORDER: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
