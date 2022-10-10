import { useState } from "react";
import ArtPosts from "../../components/artPosts/artPost.js";
import { Container, Gallery } from "./homeStyle.js";

export default function Home() {
  const [listPosts, setListPosts] = useState([]);
  return (
    <Container>
      <h2>Art gallery</h2>
      <Gallery>
        {listPosts.length === 0 ? <p>Nothing here yet :(</p> : "Posts here!"}
      </Gallery>
    </Container>
  );
}
