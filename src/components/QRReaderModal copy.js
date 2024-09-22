import React, { useState } from "react";
import QrScanner from "react-qr-scanner";

const QRReaderModal = (handleScanResult) => {
  const [scannedData, setScannedData] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setScannedData(data);
      handleScanResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="bg-gray-200 w-full aspect-square flex items-center justify-center">
      <QrScanner delay={300} onError={handleError} onScan={handleScan} />
      {scannedData && <p className="mt-4 text-center">{scannedData}</p>}
    </div>
  );
};

export default QRReaderModal;
