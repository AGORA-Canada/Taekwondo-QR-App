// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import QRCodeCamera from "./pages/QRCodeCamera";
import QRViewerModal from "./components/QRViewerModal";

function App() {
  // QR Modal
  const [isQRModalOpen, setQRModalOpen] = useState(false);
  const openQRModal = () => setQRModalOpen(true);
  const closeQRModal = () => setQRModalOpen(false);

  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col h-screen bg-gray-100">
          <Header openQRModal={openQRModal} />
          <main className="flex-grow p-4  overflow-auto">
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/qr-scan" element={<QRCodeCamera />} />
            </Routes>
          </main>
          {isQRModalOpen && <QRViewerModal onClose={closeQRModal} />}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
