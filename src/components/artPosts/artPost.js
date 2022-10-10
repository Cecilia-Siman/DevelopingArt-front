import { Post } from "./artPostStyle.js";
import CanvasDraw from "../../components/toolBar/indexEraser.js";

export default function ArtPosts(props) {
  return (
    <Post>
      <p>
        {props.title} - <span>by {props.userName}</span>
      </p>
      <CanvasDraw
        saveData={props.image}
        className="canvas"
      />
    </Post>
  );
}
