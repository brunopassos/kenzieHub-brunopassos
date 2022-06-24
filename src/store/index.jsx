import { legacy_createStore as createStore, combineReducers } from "redux";
import usersReducer from "./modules/users/reducer";

const reducers = combineReducers({users: usersReducer});

const store = createStore(reducers);

export default store;
