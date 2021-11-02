import { SUCCESS_ORDER, TOGGLE_ORDER } from "./orderActionTypes";

const INITIAL_STATE = {
  purchasing: false,
  order: {},
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_ORDER:
      return { ...state, purchasing: !state.purchasing };
    case SUCCESS_ORDER:
      return { ...state, order: action.payload, purchasing: false };
    default:
      return state;
  }
};
export default orderReducer;
