import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from "./modules/users/reducer";

import thunk from "redux-thunk"

const reducers = combineReducers({users: usersReducer});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
