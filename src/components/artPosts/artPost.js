import { useEffect, useRef } from "react";
import { Post } from "./artPostStyle.js";
import CanvasDraw from "../../components/toolBar/indexEraser.js";

export default function ArtPosts(props) {
  return (
    <Post>
      <img src={props.image} alt={props.title} />
      <p>{props.title}</p>
      <span>by {props.userName}</span>
    </Post>
  );
}
