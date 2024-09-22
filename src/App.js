import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Modal from "./components/Modal";
import QRReaderModal from "./components/QRReaderModal";
import QRViewerModal from "./components/QRViewerModal";
import { jwtDecode } from "jwt-decode";

function App() {
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  // Modal open
  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  // Modal close
  const closeModal = () => {
    setIsModalOpen(false);
    // Reset modal type
    setModalType(null);
  };

  //
  const token = localStorage.getItem("token");
  let userType = null;

  if (token) {
    const decoded = jwtDecode(token);
    userType = decoded.userType;
  }

  // Modal content rendering based on user type
  const renderModalContent = () => {
    if (userType === "store") {
      return (
        <QRReaderModal
          handleScanResult={(data) => console.log("Scanned data:", data)}
        />
      );
    } else if (userType === "customer") {
      return <QRViewerModal />;
    }
    return null;
  };

  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col h-screen bg-gray-100">
          <Header
            openQRViewerModal={() => openModal("viewer")}
            openQRReaderModal={() => openModal("reader")}
            userType={userType}
          />
          <main className="flex-grow p-4 overflow-auto">
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </main>

          {/* Dynamic rendering of modal based on user type */}
          {isModalOpen && (
            <Modal isOpen={isModalOpen} title="QR" closeModal={closeModal}>
              {renderModalContent()}
            </Modal>
          )}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
