import React, { useState } from "react";
 
function Fetch() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
 
  const handleLogin = async (e) => {
    e.preventDefault(); // prevent page reload
 
    try {
      const response = await fetch("https://localhost:44353/api/Login/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
 
      if (!response.ok) {
        throw new Error("Login failed");
      }
 
      const data = await response.json();
      console.log("Response data:", data);
      setMessage("Login successful!");
      // You can save token or user info here, e.g., localStorage.setItem("token", data.token)
    } catch (error) {
      console.error("Error:", error);
      setMessage("Login failed. Please check your credentials.");
    }
  };
 
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
 
export default Fetch;
 
 
