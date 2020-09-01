import React, { useReducer } from "react";
import UserReducer from "./userReducer";
import UserContext from "./userContext";
import { LOGOUT_USER, LOGIN_USER, SET_TRANSACTION_DATA } from "../types";
import axios from "axios";

export const initialState = {
  user: null,
  authToken: null,
  transactions: null,
};

const UserState = (props) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const apiUrl = process.env.REACT_APP_API_URL
    ? process.env.REACT_APP_API_URL
    : "https://ica-app-api.herokuapp.com/";

  const loginUser = async (username, password) => {
    const user = await axios.get(
      `${apiUrl}login?username=${username}&password=${password}`
    );

    dispatch({
      type: LOGIN_USER,
      payload: user.data,
    });
  };

  const getTransactions = async () => {
    const transactions = await axios.get(
      `${apiUrl}transactions?token=${state.authToken}`
    );

    dispatch({
      type: SET_TRANSACTION_DATA,
      payload: transactions.data,
    });
  };

  const logoutUser = () => dispatch({ type: LOGOUT_USER });

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        transactions: state.transactions,
        loginUser,
        logoutUser,
        getTransactions,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
