import React, { useState } from "react";
import axios from "axios";
import "./authentication.css";

function Login() {
  console.log()
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = ({ target: { name, value } }) => {
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    axios.post("http://localhost:5000/api/login", loginData)
    .then((res) => {
      console.log(res)
      window.location = "/dashboard"
  }).catch((error) => {
    console.log(error)
  })
  };
  return (
    <div className="form-modal">
      <div id="login-form">
        <h1 style={{ textAlign: "center", paddingTop: "30px"}}>VERIFY</h1>
        <form onSubmit={handleSubmit}>
        <input
            type="email"
            placeholder="Enter your email"
            name = "email"
            value={ loginData.email }
            onChange={ handleChange }
            />
          <input
            type="password"
            placeholder="password"
            name = "password"
            value={ loginData.password }
            onChange={ handleChange }
            />
          <button type="submit" className="btn login">
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
