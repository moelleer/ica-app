import React, { useContext } from "react";
import { Link, navigate } from "@reach/router";
import UserContext from "../../context/user/userContext";

const Menu = () => {
  const userContext = useContext(UserContext);
  const { logoutUser } = userContext;

  const logout = () => {
    navigate("/");
    logoutUser();
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-red-700 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-semibold text-xl tracking-tight">ICA Api</span>
      </div>

      <div className="w-auto flex-grow flex items-center">
        <div className="text-sm flex-grow">
          <Link
            to="/"
            className="inline-block mt-0 text-white hover:underline mr-4"
          >
            Hem
          </Link>
          <Link
            to="payments"
            className="inline-block mt-0 text-white hover:underline mr-4"
          >
            Mina köp
          </Link>
        </div>
        <div>
          <button
            className="bg-transparent border text-white border-white hover:bg-white hover:text-red-700 py-2 px-4 font-bold rounded"
            onClick={logout}
          >
            Logga ut
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
