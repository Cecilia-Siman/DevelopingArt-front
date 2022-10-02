import { useState,useRef, useEffect } from "react";
import CanvasDraw from "./indexEraser.js";

export default function ToolBox({color, setColor, erasing, setErasing, brushSize,setBrushSize}) {
  return (
    <div>
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
      <button onClick={() => setErasing(!erasing)}>Eraser</button>
    </div>
  );
}
