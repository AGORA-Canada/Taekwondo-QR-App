// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import QRCodeCamera from "./pages/QRCodeCamera";
import QRViewerModal from "./components/QRViewerModal";
import Header from "./components/Header";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col h-screen bg-gray-100">
          <Header />
          <main className="flex-grow p-4  overflow-auto">
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/qr-scan" element={<QRCodeCamera />} />
            </Routes>
            <QRViewerModal />
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
