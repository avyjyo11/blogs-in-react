import { ACTION_TYPES } from "../../constants/actionTypes";

export const blogReducer = (blogs = [], { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.POST.FETCH:
      return [...payload];
    default:
      return blogs;
  }
};
