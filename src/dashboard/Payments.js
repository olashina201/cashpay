import React, { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import NavBar from "./NavBar";
import Tab from "./components/Tab";
import Header from "./Header";
import Aside from "./Aside";
import PaymentList from "./components/PaymentList";
import Contacts from "./components/Contacts";
import BeneficiaryList from "./components/BeneficiaryList";

function Payments() {
  const [user, setUser] = useState([])

  function getCurrentUser() {
    try {
        const token = localStorage.getItem("token");
        return jwtDecode(token);
    } catch (error) {
        return null;
    }
  }

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
  
  useEffect(() => {
    setUser(getCurrentUser());
  }, [])
  return (
    <div>
      <NavBar />
      <main>
        <div className="mainRadiusTop"></div>
        <Header user = {user} />
        <Tab />
        <div className="wrapper">
          <section role="region">
            <PaymentList />
            <Contacts />
            <BeneficiaryList />
          </section>
          <Aside />
        </div>
        <div className="mainRadiusBottom"></div>
      </main>
    </div>
  );
}

export default Payments;
