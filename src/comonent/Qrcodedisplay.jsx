import React from "react";
import qr from "../assets/images/qr-code.png";
function Qrcodedisplay() {
  return (
    <>
      <div className="qr_heading">
        <h3>Scan the QR code to view our menu</h3>
        <img src={qr} alt="Scan to view our menu" style={{ height: "100px" }} />
      </div>
    </>
  );
}

export default Qrcodedisplay;
