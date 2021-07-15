import React from "react";
import "./authentication.css";

function Login() {
  return (
    <div className="form-modal">
      <div id="login-form">
        <h1 style={{ textAlign: "center", paddingTop: "30px"}}>CASHPAY</h1>
        <form>
          <input type="text" placeholder="Enter email or username" />
          <input type="password" placeholder="Enter password" />
          <button type="button" className="btn login">
            Submit
          </button>
          <p>
            <a href="javascript:void(0)">Forgotten account</a>
          </p>
          <p>
            <a href="/register">create account</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
