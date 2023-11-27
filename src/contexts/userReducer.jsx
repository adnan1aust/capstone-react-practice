import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase";
import { USER_ACTION_TYPES } from "../constants/datatypes";

const INITIAL_VALUE = {
  user: null,
};

export const UserReducerContext = createContext({
  ...INITIAL_VALUE,
  setUser: () => null,
});

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      throw new Error(`unhandled action type: ${type}`);
  }
};

export const UserProvider = ({ children }) => {
  const [{ user }, dispatch] = useReducer(userReducer, INITIAL_VALUE);

  const setUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };

  const value = { user, setUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
