import { ADD_TO_CART,DELETE_FROM_CART } from './types';

//TODO:: Save transactions history @payload to the local db and dispath.
export const addToCart = (payload) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: payload,
  });
};
export const deleteFromCart = (payload) => (dispatch) => {
  dispatch({
    type: DELETE_FROM_CART,
    payload: payload,
  });
};
