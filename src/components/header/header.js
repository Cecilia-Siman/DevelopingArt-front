import { TopBar } from "./headerStyle";
import { BsPersonCircle, BsHouse } from "react-icons/bs";
import { BiExit, BiPalette } from "react-icons/bi";
import { LoginContext } from "../../contexts/loginContext.js";
import { Link } from "react-router-dom";
import { useContext } from "react";

export default function Header() {
  const { setUserId, setUserName, setToken } = useContext(LoginContext);
  return (
    <TopBar>
      <h1> 🎨 Developing art </h1>
      <div>
        <Link to={`/`}>
          <BsHouse className="icon" />
        </Link>
        <Link to={`/canvas`}>
          <BiPalette className="icon" />
        </Link>
        <Link to={`/login`}>
          <BsPersonCircle className="icon" />
        </Link>
        <Link
          to={`/`}
          onClick={() => {
            setToken("");
            setUserId("");
            setUserName("");
          }}
        >
          <BiExit className="icon" />
        </Link>
      </div>
    </TopBar>
  );
}
