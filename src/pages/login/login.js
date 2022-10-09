import { Container, FormStyle } from "./loginStyle";
import React from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

export default function Login() {
  //const { setUserName, setToken } = React.useContext(LoginContext);
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
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
          <button type="submit">Login</button>
        </form>
      </FormStyle>
      <Link to={`/signup`}>
        <p>New artist? Register first!</p>
      </Link>
    </Container>
  );
}
