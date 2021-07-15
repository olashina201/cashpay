import React from "react";
import "./styles/aside.css";
import { GiShoppingCart } from "react-icons/gi";
import { BiTaxi } from "react-icons/bi";
import card from "../dashboard/img/card.svg";

function Aside() {
  return (
    <aside>
      <div className="editContainer">
        <a>
          <i className="icofont-edit"></i>
        </a>
      </div>
      <div className="chartContainer">
        <span>$5,600</span>
        <canvas id="asideChart"></canvas>
      </div>

      <div className="header">
        <h1>My card</h1>
        <i>..</i>
      </div>
      <div className="cardContainer">
        <img src={card} />
      </div>
      <div className="header transaction">
        <h1>Transaction</h1>
        <a href="#">+</a>
      </div>
      <div className="transactionItem">
        <div className="imgItemContainer">
          <div className="iconContainer">
            <i className="icofont-taxi"><BiTaxi /></i>
          </div>
          <div className="spendItem">
            <span className="name">Taxi</span>
            <span className="date">01:21 PM</span>
          </div>
        </div>
        <span className="spendMoney">-$9,20</span>
      </div>
      <div className="transactionItem">
        <div className="imgItemContainer">
          <div className="iconContainer">
            <i className="icofont-shopping-cart"><GiShoppingCart /></i>
          </div>
          <div className="spendItem">
            <span className="name">Shopping</span>
            <span className="date">11:15 AM</span>
          </div>
        </div>
        <span className="spendMoney">-$142,00</span>
      </div>
      <div className="transactionItem">
        <div className="imgItemContainer">
          <div className="iconContainer">
            <i>
              <b>N</b>
            </i>
          </div>
          <div className="spendItem">
            <span className="name">Netflix</span>
            <span className="date">Jan 10, 2020</span>
          </div>
        </div>
        <span className="spendMoney">-$24,99</span>
      </div>
    </aside>
  );
}

export default Aside;
