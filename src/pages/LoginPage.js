import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username));
    navigate.push("/");
  };

  return (
    <div className="flex items-center justify-center h-[80%] bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h3 className="text-xl mb-4 text-center">Login</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Login
          </button>
          <p className="text-theme_blue text-sm">
            If you are unable to log in, please contact the center.
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
