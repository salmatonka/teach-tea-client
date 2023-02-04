import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers/rootReducer";
import cartCounter from "./middleWares/cartCounter";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(cartCounter,thunk,logger)));

export default store;