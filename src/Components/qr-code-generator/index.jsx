import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

export default function QRCodeGenerator() {
  const [qr, setQr] = useState("");
  const [input, setInput] = useState("");

  function handleInput(event) {
    setInput(event.target.value);
  }

  const handleGenerateQR = () => {
    setQr(input);
    setInput("");
    console.log(input);
    console.log(qr);
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <input
        className="qr-input"
        value={input}
        onChange={() => handleInput(event)}
        placeholder="insert your string"
      />
      <button
        className="qr-button"
        onClick={handleGenerateQR}
        disabled={input && input.trim() == '' || input.trim().length === 0 }
      >
        Generate QR
      </button>
      <div>
        <QRCode id="qr-code-val" value={qr} size={500} />
      </div>
    </div>
  );
}
