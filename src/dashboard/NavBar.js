import React from "react";
import "./styles/navbar.css";
import { FaCcMastercard, FaWallet } from "react-icons/fa";
import { HiDocumentDuplicate } from "react-icons/hi";
import { MdSend } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";

function NavBar() {
  return (
    <nav className="navbar">
      <a href="/dashboard" className="navbar-brand">
        <span><h1>VERIFY</h1></span>
      </a>
      <ul className="navbar-nav">
        <li>
          <a href="/dashboard">
            <i>
              <FaWallet />
            </i>
            <span>Wallet</span>
          </a>
        </li>
        <li>
          <a href="/payment">
            <i>
              <HiDocumentDuplicate />
            </i>
            <span>Documents</span>
          </a>
        </li>
        <li>
          <a href="/payment">
            <i>
              <MdSend />
            </i>
            <span>Payment</span>
          </a>
        </li>
        <li>
          <a href="/transactions">
            <i>
              <AiOutlineTransaction />
            </i>
            <span>Transactions</span>
          </a>
        </li>
        <li>
          <a>
            <i>
              <FaCcMastercard />
            </i>
            <span>Add Card</span>
          </a>
        </li>
      </ul>
      <a href="#" id="expander" className="navbar-footer">
        <i className="icofont-rounded-double-right"></i>
      </a>
    </nav>
  );
}

export default NavBar;
