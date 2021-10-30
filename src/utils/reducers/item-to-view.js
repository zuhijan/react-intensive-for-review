import { ITEM_TO_VIEW} from '../actions/item-to-view';

const initialState = {
  itemToView: null,
};



export const itemToView = (state = initialState, action) => {
  switch (action.type) {
    case ITEM_TO_VIEW: {
      if (action.payload.type === 'get') {
        return {
          ...state,
          itemToView: action.payload.item,
        };
      } else {
        return initialState;
      }
    }
    default: {
      return state;
    }
  }
};
