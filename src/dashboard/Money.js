import React from "react";

function Money() {
  return (
    <div className="info-box-container">
      <div className="info-box">
        <svg
          width="131"
          height="95"
          viewbox="0 0 131 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M126.202 30.503C100.847 39.2296 97.0315 2.99999 58.9733 3C26.6742 3 29.1336 43.4671 4.65875 54.8462V95H126.202V30.503Z"
            fill="#F1F3FF"
          />
          <path
            d="M1.74817 56.1231C29.0539 46.5109 25.2615 3.07825 58.6351 3.07825C98.456 3.07824 100.731 42.9509 129.554 29.0667"
            stroke="#3326AE"
            strokeWidth="5"
          />
        </svg>
        <div className="info-content">
          <span className="header">Money in</span>
          <span className="value">$10,320</span>
        </div>
      </div>
      <div className="info-box">
        <svg
          width="126"
          height="96"
          viewbox="0 0 126 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.1375 50.071C18.479 50.071 16.343 3.07825 0.678741 3.07825V95.2837H123.679V15.0044C123.679 15.0044 118.161 8.24033 105.522 8.24033C79.89 8.24033 75.796 50.071 47.1375 50.071Z"
            fill="#F1F3FF"
          />
          <path
            d="M0.678741 3.07825C16.343 3.07825 18.479 50.071 47.1375 50.071C75.796 50.071 79.89 8.24033 105.522 8.24033C118.161 8.24033 123.679 15.0044 123.679 15.0044"
            stroke="#3326AE"
            strokeWidth="5"
          />
        </svg>

        <div className="info-content">
          <span className="header">Money Out</span>
          <span className="value">$4,628</span>
        </div>
      </div>
    </div>
  );
}

export default Money;
