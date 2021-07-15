import React from "react";
import { MdNotifications } from "react-icons/md";

function PaymentList() {
  return (
    <div className="info-box-container">
      <div className="info-box">
        <img src={MdNotifications} />
        <div className="info-content">
          <span className="header">Money in</span>
          <span className="value">$10,320</span>
        </div>
      </div>
      <div className="info-box">
        <img src={MdNotifications} />
        <div className="info-content">
          <span className="header">Money Out</span>
          <span className="value">$4,628</span>
        </div>
      </div>
    </div>
  );
}

export default PaymentList;
