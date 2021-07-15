import React from "react";
import NavBar from "./NavBar";
import Tab from "./components/Tab";
import Header from "./Header";
import Aside from "./Aside";
import PaymentList from "./components/PaymentList";
import Contacts from "./components/Contacts";

function Payments() {
  return (
    <div>
      <NavBar />
      <main>
        <div className="mainRadiusTop"></div>
        <Header />
        <Tab />
        <div className="wrapper">
          <section role="region">
            <PaymentList />
            <Contacts />
          </section>
          <Aside />
        </div>
        <div className="mainRadiusBottom"></div>
      </main>
    </div>
  );
}

export default Payments;
