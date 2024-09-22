import React from "react";
import { Link } from "react-router-dom";
// import { QrReader } from "react-qr-reader";
// import { useDispatch, useSelector } from "react-redux";
// import { setQRData } from "../store";

const QRCodeCamera = () => {
  //   const dispatch = useDispatch();
  //   const qrData = useSelector((state) => state.qr.qrData);

  //   const handleScan = (data) => {
  //     if (data) {
  //       dispatch(setQRData(data));
  //     }
  //   };

  //   const handleError = (err) => {
  //     console.error(err);
  //   };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-white shadow-md p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">QR Scan</h1>
          <Link
            to="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            login
          </Link>
        </div>
      </header>
      <main className="flex-grow p-4 flex justify-center items-center">
        <div className="w-full max-w-md">
          {/* <QrReader
            delay={300}
            onError={handleError}
            onResult={handleScan}
            style={{ width: "100%" }}
          /> */}
          {/* <p className="mt-4 text-center">{qrData}</p> */}
        </div>
      </main>
    </div>
  );
};

export default QRCodeCamera;
