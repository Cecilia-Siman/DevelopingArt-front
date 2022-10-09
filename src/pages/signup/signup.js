import { Container, FormStyle } from "../login/loginStyle.js";
import React from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export default function SignUp() {
  //const { setUserName, setToken } = React.useContext(LoginContext);
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const navigate = useNavigate();
  function submitData(event) {
    console.log("ok");
  }
  return (
    <Container>
      <h1>Developing art 🎨</h1>
      <FormStyle>
        <form onSubmit={submitData}>
        <input
            type="name"
            id="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            placeholder="User name"
          />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="E-mail"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm password"
          />
          <button type="submit">Sign up</button>
        </form>
      </FormStyle>
      <Link to={`/login`}>
        <p>Already registered? Return to login!</p>
      </Link>
    </Container>
  );
}
