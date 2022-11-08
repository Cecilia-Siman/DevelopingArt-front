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
      <div></div>
    </Post>
  );
}

