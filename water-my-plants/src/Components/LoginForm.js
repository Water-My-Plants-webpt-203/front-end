import React, { useState } from "react";

const LoginForm = () => {
  // form initial values
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.taget.value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form>
        <h2>Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={onInputChange}
        />
        <input
          type="Password"
          name="password"
          placeholder="Password"
          onChange={onInputChange}
        />
        <button onClick={formSubmit}></button>
      </form>
    </div>
  );
};

export default LoginForm;
