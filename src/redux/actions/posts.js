import { ACTION_TYPES } from "../../constants/actionTypes";

import jsonPlaceholder from "../../apis/jsonPlaceholder";

import { fetchUser } from "./users";

export const fetchPosts = () => async (dispatch) => {
  const resp = await jsonPlaceholder.get("/posts");
  dispatch({ type: ACTION_TYPES.POST.FETCH, payload: resp });
};

export const fetchPostAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = Array.from(
    new Set(getState().blogs?.map(({ userId }) => userId))
  );
  userIds.forEach((id) => dispatch(fetchUser(id)));
};
