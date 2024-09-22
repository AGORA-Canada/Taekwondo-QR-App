import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQRData } from "../store";

const QRViewerModal = () => {
  const dispatch = useDispatch();
  const qrData = useSelector((state) => state.qr.qrData);

  if (!qrData) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg max-w-sm w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">QR</h2>
          <button
            onClick={() => dispatch(setQRData(null))}
            className="text-2xl"
          >
            &times;
          </button>
        </div>
        <div className="bg-gray-200 w-full h-64 flex items-center justify-center">
          <p>QR Code: {qrData}</p>
        </div>
      </div>
    </div>
  );
};

export default QRViewerModal;
