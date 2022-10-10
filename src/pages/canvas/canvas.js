import { useState, useRef, useEffect, useContext } from "react";
import CanvasDraw from "../../components/toolBar/indexEraser.js";
import ToolBox from "../../components/toolBar/toolBox.js";
import { Container, Title } from "./canvasStyle.js";
import { LoginContext } from "../../contexts/loginContext.js";
import { useNavigate } from "react-router-dom";

export default function Canvas() {
  const { setImage, token } = useContext(LoginContext);
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(10);
  const [erasing, setErasing] = useState(false);
  const [title, setTitle] = useState("");
  const canvas = useRef();
  const navigate = useNavigate();

  function LoginBeforeSave() {
    let result = window.confirm("You have to login to save your art piece");
    if (result) {
      navigate("/login");
    }
  }

  return (
    <>
      <Title>
        <input
          className="artTitle"
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Your art title"
        />
      </Title>
      <Container>
        <ToolBox
          color={color}
          setColor={setColor}
          erasing={erasing}
          setErasing={setErasing}
          brushSize={brushSize}
          setBrushSize={setBrushSize}
        />
        <div className="canvas-container">
          <CanvasDraw
            ref={canvas}
            saveData={localStorage.getItem("savedDrawing")}
            className="canvas"
            erase={erasing}
            brushColor={color}
            brushRadius={brushSize}
            hideGrid
            lazyRadius={1}
            style={{
              boxShadow:
                "0 13px 27px -5px rgba(50, 50, 93, 0.25),    0 8px 16px -8px rgba(0, 0, 0, 0.3)",
            }}
          />
        </div>
        <div className="sideBar">
          <button onClick={() => canvas.current.undo()}>Undo</button>
          <button onClick={() => canvas.current.clear()}>Clear canvas</button>
          {token.length === 0 ? (
            <button
              onClick={() => {
                console.log(canvas.current.getSaveData());
                localStorage.setItem(
                  "savedDrawing",
                  canvas.current.getSaveData()
                );
                LoginBeforeSave();
              }}
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => {
                console.log(canvas.current.getSaveData());
                localStorage.setItem(
                  "savedDrawing",
                  canvas.current.getSaveData()
                );
                alert("DataURL written to console");
              }}
            >
              Save
            </button>
          )}
        </div>
      </Container>
    </>
  );
}
