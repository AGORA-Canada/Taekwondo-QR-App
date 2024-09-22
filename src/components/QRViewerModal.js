import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQRData } from "../store";

const QRViewerModal = ({ onClose }) => {
  const username = useSelector((state) => state.auth.username);
  // const dispatch = useDispatch();
  // const qrData = useSelector((state) => state.qr.qrData);

  // if (!qrData) return null;

  useEffect(() => {
    // Disable body scroll when modal is open
    document.body.style.overflow = "hidden";
    return () => {
      // Re-enable body scroll when modal is closed
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div
        className="relative bg-white w-full h-full md:w-2/3 md:h-auto md:max-w-md md:rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h2 className="text-xl font-semibold mb-4">{username}'s QR</h2>
          <div className="bg-gray-200 w-full aspect-square flex items-center justify-center">
            {/* QR code would be displayed here */}
            {/* <p>{qrData}</p> */}
            <p>QR Code Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRViewerModal;
