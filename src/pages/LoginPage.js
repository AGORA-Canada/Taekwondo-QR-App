import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store";

const LoginPage = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          password,
        }),
      });

      const data = await response.json();

      console.log("data", data);

      if (data.token) {
        localStorage.setItem("token", data.token);
        dispatch(login(userId)); // Update Redux store state
        navigate("/"); // Redirect to home page
      } else {
        console.log(data.message);
        alert("Invalid id or password.");
      }
    } catch (error) {
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-[80%] bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h3 className="text-xl mb-4 text-center">Login</h3>
        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="User id"
            className="w-full p-2 border rounded"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
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
            className="w-full bg-primary text-white p-2 rounded"
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
