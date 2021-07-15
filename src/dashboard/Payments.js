import React from "react";
import NavBar from "./NavBar";
import Tab from "./components/Tab";
import Header from "./Header";
import Aside from "./Aside";
import PaymentList from "./components/PaymentList";

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
          </section>
          <Aside />
        </div>
        <div className="mainRadiusBottom"></div>
      </main>
    </div>
  );
}

export default Payments;
