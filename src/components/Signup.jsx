import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, email, password } = credentials;
      const response = await fetch("http://localhost:8000/auth/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const json = await response.json();
      console.log(json);
      if (json.jwt_data) {
        // Save the auth token and redirect
        localStorage.setItem("token", json.jwt_data);
        console.log("Token set in localStorage:", json.jwt_data);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <main
        className="form-signin"
        style={{
          width: "30vw",
          marginLeft: "520px",
          marginTop: "80px",
          padding: "20px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div className="form-floating my-3">
            <input
              type="text"
              className="form-control"
              id="nameInput"
              name="name"
              placeholder="Tanmay Kumar Chaurasia"
              onChange={handleChange}
            />
            <label htmlFor="nameInput">Name</label>
          </div>
          <div className="form-floating my-3">
            <input
              type="email"
              className="form-control"
              id="emailInput"
              name="email"
              placeholder="name@example.com"
              onChange={handleChange}
            />
            <label htmlFor="emailInput">Email address</label>
          </div>
          <div className="form-floating my-3">
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <label htmlFor="passwordInput">Password</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="confirmPasswordInput"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
            />
            <label htmlFor="confirmPasswordInput">Confirm Password</label>
          </div>
          <button className="btn btn-primary w-100 py-2 my-5" type="submit">
            Sign Up
          </button>
        </form>
      </main>
    </div>
  );
};

export default Signup;
