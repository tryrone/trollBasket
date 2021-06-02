import { ADD_TO_CART,DELETE_FROM_CART } from '../actions/types';

const initialState = {
  cartData: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartData: [ ...state.cartData, action.payload],
      };
    case DELETE_FROM_CART:
      return {
        cartData: action.payload,
      };
    default:
      return state;
  }
}
