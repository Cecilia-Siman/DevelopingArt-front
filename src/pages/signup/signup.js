import { Container, FormStyle } from "../login/loginStyle.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const navigate = useNavigate();

  function submitData(event) {
    event.preventDefault();
    const obj = {
      email,
      password,
      userName: newUserName,
      confirmPassword,
    };
    const req = axios.post("http://localhost:4000/signup", obj);
    req.then(registered);
    function registered(res) {
      navigate("/login");
    }
    req.catch(error);
    function error(er) {
      console.log(er);
    }
  }

  return (
    <Container>
      <h1>Welcome 😊</h1>
      <FormStyle>
        <form onSubmit={submitData}>
          <input
            type="name"
            id="name"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
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
