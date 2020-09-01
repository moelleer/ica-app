import React, { useState, useContext } from "react";
import UserContext from "../../context/user/userContext";

const LoginForm = () => {
  const userContext = useContext(UserContext);
  const { loginUser } = userContext;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (event) => {
    if (event.target.name === "username") {
      setUsername(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const submitForm = () => {
    setLoading(true);
    loginUser(username, password);
  };

  return (
    <div className="flex justify-center h-screen">
      <div className="flex flex-col justify-center content-center w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Användarnamn
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Användarnamn"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={username}
              onChange={onChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Lösenord
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className={`w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline${
                !username || !password
                  ? " bg-red-300 cursor-not-allowed"
                  : " bg-red-500 hover:bg-red-700"
              }`}
              type="button"
              onClick={submitForm}
              disabled={!username || !password}
            >
              {loading ? "Loggar in..." : "Logga in"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
