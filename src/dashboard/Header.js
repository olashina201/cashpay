import React from "react";
import "./styles/header.css";
import { MdNotifications } from "react-icons/md";

function Header() {
  return (
    <header>
      <section role="search">
        <form action="#" method="get">
          <div className="form-inline">
            <i className="icofont-search"></i>
            <input type="search" placeholder="Search" />
          </div>
        </form>
      </section>
      <section role="application">
        <nav className="navbar-top">
          <a href="#">Feedback</a>
          <a href="#">Contacts</a>
          <a href="#">Help</a>
        </nav>
        <div className="notification-profile">
          <a href="#" className="notification">
            <i>
              <MdNotifications />
            </i>
          </a>
          <a href="#">
            <div className="profile-pic"></div>
          </a>
        </div>
      </section>
    </header>
  );
}

export default Header;
