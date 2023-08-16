import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import logger from "redux-logger";
import { combineReducers } from "redux";

import DataReducer from "./DataFetch/DataReducer"
import cartReducer from "./Cart/CartReducer";

const rootReducer = combineReducers({
    products: DataReducer,
    cart : cartReducer
})


const store = createStore(rootReducer, applyMiddleware(logger, thunk))



export default store