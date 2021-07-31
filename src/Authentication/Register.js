import React, { useState } from "react";
import axios from "axios";
import "./authentication.css";

function Register() {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: ""
  });

  const handleChange = ({ target: { name, value } }) => {
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    axios.post("http://localhost:5000/api/register", userData)
    .then((res) => {
      console.log(res)
  }).catch((error) => {
    console.log(error)
  })
  };

  return (
    <div className="form-modal">
      <div id="signup-form">
      <h1 style={{ textAlign: "center", paddingTop: "20px"}}>VERIFY</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            name = "firstname"
            value={ userData.firstName }
            onChange={ handleChange }
          />
          <input
            type="text"
            placeholder="Last Name"
            name = "lastname"
            value={ userData.lastName }
            onChange={ handleChange }
            />
          <input
            type="email"
            placeholder="Enter your email"
            name = "email"
            value={ userData.email }
            onChange={ handleChange }
            />
          <input
            type="password"
            placeholder="Create password"
            name = "password"
            value={ userData.password }
            onChange={ handleChange }
            />
            <input
            type="password"
            placeholder="Create password"
            name = "password2"
            value={ userData.password2 }
            onChange={ handleChange }
            />
          <button type="submit" className="btn signup">
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
