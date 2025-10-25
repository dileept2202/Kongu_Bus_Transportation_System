import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import bus2 from '../../assets/bus2.jpg';

const Login = () => {
  const [isDriver, setIsDriver] = useState(true);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isDriver
      ? "http://localhost:5000/api/login/driver"
      : "http://localhost:5000/api/login/admin";

    const body = isDriver
      ? { driverId: id, password }
      : { adminId: id, password };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        const data = await res.json();
        alert(data.message);
        navigate(isDriver ? "/Form" : "/Dashboard");
      } else {
        const err = await res.json();
        alert(err.message || "Invalid ID or password");
      }
    } catch (error) {
      alert("Server error — please try again");
      console.error(error);
    }
  };

  return (
    <div className="containerlogin">
    <div className="logcontainer">
      {/* Left side image */}
      <div className="logimage">
        <img src={bus2} alt="Bus" />
      </div>

      {/* Right side login form */}
      <div className="logform">
        <div className="loghead">
          <button
            className={`logbutt ${isDriver ? "active" : ""}`}
            onClick={() => setIsDriver(true)}
          >
            Driver Login
          </button>
          <button
            className={`logbutt ${!isDriver ? "active" : ""}`}
            onClick={() => setIsDriver(false)}
          >
            Admin Login
          </button>
        </div>

        <form className="inputs" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={isDriver ? "Driver ID" : "Admin ID"}
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="logsub">
            <button className="logsubbut" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
