import { USER_ACTION_TYPES } from "../../constants/datatypes";

const INITIAL_VALUE = {
  user: null,
};

export const userReducer = (state = INITIAL_VALUE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};
