import { ACTION_TYPES } from "../../constants/actionTypes";

export const userReducer = (users = [], { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.USER.FETCH:
      return [...users, ...payload];
    case ACTION_TYPES.USER.FETCH_1:
      return [...users, payload];
    default:
      return users;
  }
};
