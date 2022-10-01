import { useState,useRef, useEffect } from "react";
import CanvasDraw from "../../components/toolBar/indexEraser.js"

export default function Home() {
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(10);
  const [erasing,setErasing] = useState(false);


  return (
    <div className="App">
      <h1>React-Canvas-Draw</h1>
      <h3>Basic canvas for studies</h3>
      <input
        type="color"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <input
        defaultValue={brushSize}
        type="range"
        min="0"
        max="50"
        onChange={(e) => {
          setBrushSize(Number(e.target.value));
        }}
      />
      <button onClick={() => setErasing(!erasing)}>
        Eraser
      </button>
      <div className="canvas-container">
        <CanvasDraw
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
    </div>
  );
}
