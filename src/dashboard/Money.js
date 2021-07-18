import React from "react";
import img from "../dashboard/img/log-in.png";
import img2 from "../dashboard/img/arrow.png";

function Money() {
  return (
    <div className="info-box-container">
      <div className="info-box">
        <img src={img} />
        <div className="info-content">
          <span className="header">Money in</span>
          <span className="value">$10,320</span>
        </div>
      </div>
      <div className="info-box">
      <img src={img2} />
        <div className="info-content">
          <span className="header">Money Out</span>
          <span className="value">$4,628</span>
        </div>
      </div>
    </div>
  );
}

export default Money;
