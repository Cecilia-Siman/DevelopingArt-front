import Container from "./toolBoxStyle.js";
import { BsEraserFill } from "react-icons/bs";
import { useState } from "react";

export default function ToolBox(props) {
  return (
    <Container>
      <h3>Tool Box 🎨</h3>
      <div className="tools">
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
          min="0.5"
          max="50"
          onChange={(e) => {
            props.setBrushSize(Number(e.target.value));
          }}
        />
        <div className="eraser">
          <button
            className={props.erasing ? "eraserOn" : "eraserOff"}
            onClick={() => props.setErasing(!props.erasing)}
          >
            <BsEraserFill />
          </button>
        </div>
      </div>
    </Container>
  );
}
