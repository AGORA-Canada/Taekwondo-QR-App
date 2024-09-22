import React from "react";
import Logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ openQRViewerModal, openQRReaderModal, userType }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const location = useLocation();

  return (
    <header className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="Chang's Taekwondo" className="h-12" />
        </Link>
        {location.pathname !== "/login" &&
          (isLoggedIn ? (
            <>
              {userType === "customer" && (
                <button
                  onClick={openQRViewerModal}
                  className="bg-primary text-white px-4 py-2 rounded"
                >
                  My QR
                </button>
              )}
              {userType === "store" && (
                <button
                  onClick={openQRReaderModal}
                  className="bg-primary text-white px-4 py-2 rounded"
                >
                  Open Scanner
                </button>
              )}
            </>
          ) : (
            <Link
              to="/login"
              className="bg-primary text-white px-4 py-2 rounded"
            >
              Login
            </Link>
          ))}
      </div>
    </header>
  );
};

export default Header;
