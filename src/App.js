import React, { useContext } from "react";
import { Router } from "@reach/router";
import UserContext from "./context/user/userContext";
import LoginForm from "./components/Login/LoginForm";
import Home from "./components/User/Home";
import Payments from "./components/User/Payments";
import Menu from "./components/Layout/Menu";

const App = () => {
  const userContext = useContext(UserContext);
  const { user } = userContext;

  if (!user) {
    return <LoginForm />;
  }

  return (
    <>
      <Menu />

      <div className="p-6">
        <Router>
          <Home path="/" />
          <Payments path="payments" />
        </Router>
      </div>
    </>
  );
};

export default App;
