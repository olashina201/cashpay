import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Money from "./Money";
import Tab from "./components/Tab";
import "./styles/main.css";
import "./styles/navbar.css";
import Aside from "./Aside";
import Statistics from "./Statistics";
import BottomChart from "./components/BottomChart";

function MainView() {
  useEffect(() => {
    document
      .getElementsByClassName("tab")[0]
      .addEventListener("click", changeTab);
    var activeTab = "tabCharts";

    function changeTab() {
      let target = arguments[0].target;
      let tagName = target.tagName;
      let liElement;
      if (tagName === "I" || tagName === "SPAN") {
        liElement = target.parentElement;
      } else if (tagName === "A") {
        liElement = target;
      } else {
        return;
      }

      [...liElement.parentElement.children].forEach((x) => (x.className = ""));
      liElement.classList.add("active");

      let charts = document.querySelector("section[role='region']");
      let aside = document.querySelector("aside");
      activeTab = liElement.id;
      if (activeTab === "tabCreditCard") {
        charts.style.display = "none";
        aside.style.display = "initial";
      } else {
        aside.style.display = "none";
        charts.style.display = "initial";
      }
    }
  }, []);

  return (
    <div>
      <NavBar />
      <main>
        <div className="mainRadiusTop"></div>
        <Header />
        <Tab />
        <div className="wrapper">
          <section role="region">
            <Money />
            <Statistics />
            <BottomChart />
          </section>

          <Aside />
        </div>
        <div className="mainRadiusBottom"></div>
      </main>
    </div>
  );
}

export default MainView;
