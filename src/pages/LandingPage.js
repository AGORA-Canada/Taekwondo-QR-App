import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const LandingPage = () => {
  //   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  //   const username = useSelector((state) => state.auth.username);

  return (
    <>
      <div className="flex justify-around mb-4">
        <button className="bg-gray-200 px-4 py-2 rounded">20</button>
        <button className="bg-gray-200 px-4 py-2 rounded">10</button>
        <button className="bg-gray-200 px-4 py-2 rounded">1+1</button>
      </div>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded shadow"></div>
        <div className="bg-white p-4 rounded shadow"></div>
        <div className="bg-white p-4 rounded shadow"></div>
      </div>
    </>
  );
};

export default LandingPage;
