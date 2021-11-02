import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  RESET_INGREDIENT,
} from "./BurgerActionTypes";
import { addIngredient, removeIngredient } from "./BurgerUtils";

const INITIAL_STATE = {
  price: {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
  },
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: 4,
  purchasable: false,
};

const buildReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RESET_INGREDIENT:
      return (state = INITIAL_STATE);
    case ADD_INGREDIENT:
      return addIngredient(state, action.payload);

    case REMOVE_INGREDIENT:
      return removeIngredient(state, action.payload);
    default:
      return state;
  }
};

export default buildReducer;
