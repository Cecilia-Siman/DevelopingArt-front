import { useRef } from "react";
import { Post } from "./artPostStyle.js";
import CanvasDraw from "../../components/toolBar/indexEraser.js";

export default function ArtPosts(props) {
  const canvas = useRef();
  localStorage.setItem("savedDrawing", props.image);
  return (
    <Post>
      <div></div>
      <p>{props.title}</p>
      <span>by {props.userName}</span>
    </Post>
  );
}
