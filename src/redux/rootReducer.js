import { combineReducers } from "redux";
import buildReducer from "./BurgerBuild/BurgerReducer";
import orderReducer from "./Order/orderReducer";

const rootReducer = combineReducers({
  build: buildReducer,
  order: orderReducer,
});

export default rootReducer;
