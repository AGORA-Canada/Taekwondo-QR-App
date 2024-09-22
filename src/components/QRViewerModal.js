import React from "react";
import QRCode from "react-qr-code";
import { useSelector } from "react-redux";

const QRViewerModal = () => {
  const jwtToken = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.userid);

  const generateQRData = () => {
    const qrPayload = {
      userId,
      token: jwtToken,
    };
    return JSON.stringify(qrPayload);
  };

  return (
    <div className="bg-gray-200 w-full aspect-square flex flex-col items-center justify-center">
      <QRCode value={generateQRData()} size={256} />
    </div>
  );
};

export default QRViewerModal;
