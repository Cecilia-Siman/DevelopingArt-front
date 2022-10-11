import { useRef } from "react";
import { Post } from "./artPostStyle.js";
import CanvasDraw from "../../components/toolBar/indexEraser.js";

export default function ArtPosts(props) {
  const canvas = useRef();
  localStorage.setItem("savedDrawing", props.image);
  return (
    <Post>
      <p>
        {props.title} - <span>by {props.userName}</span>
      </p>
      <div className="regularCanvas">
        <CanvasDraw
          ref={canvas}
          hideGrid
          saveData={localStorage.getItem("savedDrawing")}
          className="canvas"
        />
      </div>
      <div className="mobileCanvas">
        <CanvasDraw
          canvasWidth={"150px"}
          canvasHeight={"150px"}
          hideGrid
          saveData={props.image}
          className="canvas"
        />
      </div>
    </Post>
  );
}

/* <CanvasDraw
        saveData={props.image}
        className="canvas"
      /> */
