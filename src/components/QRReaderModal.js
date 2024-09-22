import React, { useState, useRef, useEffect } from "react";
import QrScanner from "qr-scanner";
import "./QRReaderModal.css";

const QRReaderModal = (handleScanResult) => {
  const videoElementRef = useRef(null); // Ref for video element
  const [scanned, setScannedText] = useState(""); // State to store scanned result

  useEffect(() => {
    const video = videoElementRef.current; // Reference to video element
    const qrScanner = new QrScanner(
      video,
      (result) => {
        console.log("decoded qr code:", result);
        setScannedText(result.data); // Set the scanned text from the QR result
      },
      {
        returnDetailedScanResult: true,
        highlightScanRegion: true,
        highlightCodeOutline: true,
      }
    );

    qrScanner.start(); // Start the QR scanner
    console.log("QR Scanner started");

    // Cleanup when component is unmounted
    return () => {
      qrScanner.stop(); // Stop the scanner
      qrScanner.destroy(); // Destroy the scanner instance
      console.log("QR Scanner stopped");
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <div className="bg-gray-200 w-full aspect-square flex flex-col items-center justify-center">
      <div className="videoWrapper">
        <video className="qrVideo" ref={videoElementRef} />{" "}
        {/* Video element for scanning */}
      </div>
      <p className="scannedText">SCANNED: {scanned}</p>{" "}
      {/* Display scanned result */}
    </div>
  );
};

export default QRReaderModal;
