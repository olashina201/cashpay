import React from "react";

function Statistics() {
  return (
    <div className="statistics">
      <header>
        <h1>Statistics</h1>
        <select>
          <option value="Year">Year</option>
          <option value="Month">Month</option>
          <option value="Day">Day</option>
        </select>
      </header>
      <div className="chartContainer">
        <canvas id="statisticsChart"></canvas>
      </div>
    </div>
  );
}

export default Statistics;
