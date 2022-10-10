import { Container, FormStyle } from "./loginStyle";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../contexts/loginContext.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const { setUserId, setUserName, setToken } = useContext(LoginContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function submitData(event) {
    event.preventDefault();
    const loginObj = {
      email,
      password,
    };
    const loginReq = axios.post("http://localhost:4000/login", loginObj);
    loginReq.then(logged);
    function logged(res) {
      setUserId(res.data.userId);
      setUserName(res.data.userName);
      setToken(res.data.token);
      navigate("/");
    }
    loginReq.catch(error);
    function error(er) {
      console.log(er);
    }
  }

  return (
    <Container>
      <h1>Hi there 👋🏽</h1>
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
