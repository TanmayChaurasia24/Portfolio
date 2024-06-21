import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted"); // Check if the form submission is triggered
    try {
      const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();
      if (json.jwt_data) {
        // Save the auth token and redirect
        localStorage.setItem("token", json.jwt_data);
        navigate("/");
      } else {
        console.log("Login failed:", json.error || "Unknown error");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setCredentials((credentials) => ({
      ...credentials,
      [name]: value,
    }));
  };
  
  return (
    <div className="my-5">
      <h1 className={`my-4 text-center`}>Log In</h1>
      <form onSubmit={handleSubmit} className="m-5">
        <div className="mb-3">
          <label htmlFor="email" className={`form-label`}>Email address</label>
          <input
            type="email"
            className="form-control"
            value={credentials.email}
            onChange={onChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className={`form-text form-label`}>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className={`form-label`}>Password</label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            onChange={onChange}
            name="password"
            id="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Login;
