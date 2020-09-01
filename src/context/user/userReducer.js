import { LOGIN_USER, SET_TRANSACTION_DATA, LOGOUT_USER } from "../types";
import { initialState } from "./UserState";

export default (state, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
        authToken: action.payload.token,
      };
    case SET_TRANSACTION_DATA:
      return {
        ...state,
        transactions: action.payload,
      };
    case LOGOUT_USER: {
      return initialState;
    }
    default:
      return state;
  }
};
