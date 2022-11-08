import { useState, useRef, useContext, useCallback } from "react";
import CanvasDraw from "../../components/toolBar/indexEraser.js";
import ToolBox from "../../components/toolBar/toolBox.js";
import { Container, Title, CanvasBackground } from "./canvasStyle.js";
import { LoginContext } from "../../contexts/loginContext.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Canvas() {
  const [dataUrl, setDataUrl] = useState("#");
  const { token } = useContext(LoginContext);
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

  function saveArtPiece(image) {
    localStorage.removeItem("drawing");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    if (title.length === 0) {
      alert("Title and image must not be empty");
    } else {
      let obj = {
        title,
        image,
      };
      axios
        .post("http://localhost:4000/pieces/create", obj, config)
        .then((res) => {
          localStorage.setItem("drawing", "");
          alert("Art piece saved :)");
        })
        .catch((error) => {
          alert(error);
        });
    }
  }

  const handleDownload = useCallback(() => {
    // not working yet
    if (!canvas || !canvas.current) return;
    console.log("downloading");
    setDataUrl(canvas.current.getDataURL("png", false, "0xffffff"));
  }, [canvas]);

  return (
    <>
      <CanvasBackground>
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
              saveData={localStorage.getItem("drawing")}
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
            <button
              onClick={() => {
                localStorage.removeItem("drawing");
                canvas.current.clear();
              }}
            >
              Clear canvas
            </button>
            {token.length === 0 ? (
              <button
                onClick={() => {
                  console.log(canvas.current.getSaveData());
                  localStorage.setItem("drawing", canvas.current.getSaveData());
                  LoginBeforeSave();
                }}
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => {
                  const image = canvas.current.getSaveData();
                  saveArtPiece(image);
                }}
              >
                Save
              </button>
            )}
            <button
              onClick={() => {
                alert(canvas.current.getDataURL("png", false, "0xffffff"));
              }}
            >
              DataUrl
            </button>
          </div>
        </Container>
      </CanvasBackground>
    </>
  );
}
