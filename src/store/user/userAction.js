import { USER_ACTION_TYPES } from "../../constants/datatypes";

export const setUser = (user) => {
  return { type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user };
};
