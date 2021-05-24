import { ACTION_TYPES } from "../../constants/actionTypes";

import jsonPlaceholder from "../../apis/jsonPlaceholder";

export const fetchUsers = () => async (dispatch) => {
  const resp = await jsonPlaceholder.get("/users");
  dispatch({ type: ACTION_TYPES.USER.FETCH, payload: resp });
};

export const fetchUser = (id) => async (dispatch) => {
  const resp = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: ACTION_TYPES.USER.FETCH_1, payload: resp });
};
