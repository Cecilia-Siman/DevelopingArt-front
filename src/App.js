import { BrowserRouter, Routes, Route } from "react-router-dom";
import Canvas from "./pages/canvas/canvas.js";
import Login from "./pages/login/login.js";
import SignUp from "./pages/signup/signup.js";
import Home from "./pages/home/home.js";
import PersonalPage from "./pages/personalPage/personalPage.js";
import Header from "./components/header/header.js";
import { LoginContext } from "./contexts/loginContext.js";
import { useEffect, useState } from "react";

function App() {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [token, setToken] = useState("");
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedId = localStorage.getItem("userId");
    if (savedToken) {
      setToken(savedToken);
      setUserId(savedId);
    }
  }, []);

  const [imageData, setImageData] = useState({});
  return (
    <LoginContext.Provider
      value={{
        token,
        setToken,
        userId,
        setUserId,
        userName,
        setUserName,
        imageData,
        setImageData,
      }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/canvas" element={<Canvas />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/myPage" element={<PersonalPage />} />
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;
