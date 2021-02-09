import { VakiReward } from '@vaki-challenge/models';
import { actions, CartActionTypes } from '../store/actions';


export interface State {
  items: VakiReward[];
  cart: VakiReward[];
}

const initialState = {
  items: [],
  cart: [],
};

export function CartReducer(state = initialState, action: actions) {
  console.log('CartReducer')
  console.log(action)

  switch (action.type) {
    case CartActionTypes.LoadSuccess:
      return {
        ...state,
        items: [...action.payload],
      };

    case CartActionTypes.AddCart:
      return {
        cart: [...state.cart],
      };

    case CartActionTypes.Remove:
      return {
        ...state,
        cart: [
          ...state.cart.filter((item) => item.key !== action.payload.key),
        ],
      };

    default:
      return state;
  }
}

export const getCartState = (state: State) => state.cart