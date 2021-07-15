import React from "react";
import { AiOutlineLineChart } from "react-icons/ai";
import { FaCreditCard } from "react-icons/fa";

function Tab() {
  return (
    <div className="tabContainer">
      <div className="tab">
        <a href="#" id="tabCharts" className="active">
          <AiOutlineLineChart />
        </a>
        <a href="#" id="tabCreditCard" className="">
          <i className="icofont-credit-card">
            <FaCreditCard />
          </i>
        </a>
      </div>
    </div>
  );
}

export default Tab;
