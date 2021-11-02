import { SUCCESS_ORDER, TOGGLE_ORDER } from "./orderActionTypes";

export const toggleOrder = {
  type: TOGGLE_ORDER,
};

export const successOrder = (order) => ({
  type: SUCCESS_ORDER,
  payload: order,
});
