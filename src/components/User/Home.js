import React, { useContext } from "react";
import UserContext from "../../context/user/userContext";

const Home = () => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
  const { FirstName, LastName } = user;
  return (
    <div className="flex justify-center">
      Välkommen {FirstName} {LastName}!
    </div>
  );
};

export default Home;
