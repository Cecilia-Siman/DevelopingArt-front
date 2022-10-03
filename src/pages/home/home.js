import { useState,useRef, useEffect } from "react";
import CanvasDraw from "../../components/toolBar/indexEraser.js";
import ToolBox from "../../components/toolBar/toolBox.js";
import Container from "./homeStyle.js";

export default function Home() {
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(10);
  const [erasing,setErasing] = useState(false);


  return (
    <Container>
      <ToolBox  color={color} setColor={setColor} erasing={erasing} setErasing={setErasing} brushSize={brushSize} setBrushSize={setBrushSize}/>
      <div className="canvas-container">
      <CanvasDraw
          className='canvas'
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
    </Container>
  );
}
