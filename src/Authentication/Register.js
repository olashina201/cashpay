import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./authentication.css";

function Register() {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });

  const history = useHistory();

  const handleChange = ({ target: { name, value } }) => {
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post("https://thawing-shore-17752.herokuapp.com/api/signup", userData)
    .then(() => {
        toast("account created successfully...", {
          position: toast.POSITION.TOP_RIGHT
        });
        history.push("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <ToastContainer />
      <div className="form-modal">
        <div id="signup-form">
          <h1 style={{ textAlign: "center", paddingTop: "20px" }}>VERIFY</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              name="firstname"
              value={userData.firstname}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              value={userData.lastname}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Create password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
            <button type="submit" className="btn signup">
              create account
            </button>
            <p>
              Clicking <strong>create account</strong> means that you are agree
              to our <a href="javascript:void(0)">terms of services</a>.
            </p>
            <hr />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
