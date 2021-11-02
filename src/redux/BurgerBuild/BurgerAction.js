import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  RESET_INGREDIENT,
} from "./BurgerActionTypes";

export const addIngredient = (ingredient) => ({
  type: ADD_INGREDIENT,
  payload: ingredient,
});

export const removeIngredient = (ingredient) => ({
  type: REMOVE_INGREDIENT,
  payload: ingredient,
});

export const resetIngredient = {
  type: RESET_INGREDIENT,
};
