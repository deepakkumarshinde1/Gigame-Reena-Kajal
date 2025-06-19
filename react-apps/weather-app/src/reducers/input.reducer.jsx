import { useReducer } from "react";

const inputInitState = {
  username: "",
  email: "",
  password: "",
  mobile: "",
};

const inputReducer = (state, action) => {
  let { type, payload } = action;
  switch (type) {
    case "username":
      return { ...state, username: payload };

    case "password":
      return { ...state, password: payload };
    default:
      return state;
  }
};

export const useInputReducer = () => {
  return useReducer(inputReducer, inputInitState);
};
