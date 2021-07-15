import React from "react";
import TransactionList from "../components/TransactionList";
import NavBar from "../NavBar";
import Tab from "../components/Tab";
import Header from "../Header";
import Aside from "../Aside";

function Transactions() {
  return (
    <div>
      <NavBar />
      <main>
        <div className="mainRadiusTop"></div>
        <Header />
        <Tab />
        <div className="wrapper">
          <section role="region">
            <TransactionList />
          </section>
          <Aside />
        </div>
        <div className="mainRadiusBottom"></div>
      </main>
    </div>
  );
}

export default Transactions;
