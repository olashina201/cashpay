import React from "react";
import "./authentication.css";

function Register() {
  return (
    <div className="form-modal">
      <div id="signup-form">
      <h1 style={{ textAlign: "center", paddingTop: "20px"}}>VERIFY</h1>
        <form>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Create password" />
          <button type="button" className="btn signup">
            create account
          </button>
          <p>
            Clicking <strong>create account</strong> means that you are agree to
            our <a href="javascript:void(0)">terms of services</a>.
          </p>
          <hr />
        </form>
      </div>
    </div>
  );
}

export default Register;
