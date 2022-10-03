import { useState, useRef, useEffect } from "react";
import CanvasDraw from "./indexEraser.js";
import Container from "./toolBoxStyle.js";

export default function ToolBox(props) {
  return (
    <Container>
      <h3>Tool Box 🎨</h3>
      <div>
        <p>Color picker</p>
        <input
          className="color"
          type="color"
          value={props.color}
          onChange={(e) => {
            props.setColor(e.target.value);
          }}
        />
        <p>Brush size</p>
        <input
          className="size"
          defaultValue={props.brushSize}
          type="range"
          min="0"
          max="50"
          onChange={(e) => {
            props.setBrushSize(Number(e.target.value));
          }}
        />
        <button className={props.erasing ? 'eraserOn' : 'eraserOff'} onClick={() => props.setErasing(!props.erasing)}>Eraser</button>
      </div>
    </Container>
  );
}
