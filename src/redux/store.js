import { createStore, combineReducers, applyMiddleware } from "redux";

import * as reducers from "./reducers";

const combinedReducers = combineReducers({
  blogs: reducers.blogReducer,
  users: reducers.userReducer,
});

const thunk =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    }

    return next(action);
  };

const middleWares = applyMiddleware(thunk);
const store = createStore(combinedReducers, middleWares);

export default store;
