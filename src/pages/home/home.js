import { useState } from "react";
import ArtPosts from "../../components/artPosts/artPost.js";
import { Container, Gallery } from "./homeStyle.js";
import axios from "axios";

export default function Home() {
  const [listPosts, setListPosts] = useState([]);

  //console.log(localStorage.getItem("savedDrawing"));
  axios
    .get("http://localhost:4000/pieces/findAll")
    .then((res) => {
      setListPosts(res.data);
    })
    .catch((error) => {
      alert(error);
    });
  function ListPieces() {
    return listPosts.map(ArtPosts);
  }
  return (
    <Container>
      <h2>Art gallery</h2>
      <Gallery>
        {listPosts.length === 0 ? (
          <p>Nothing here yet :(</p>
        ) : (
          <>
            <ListPieces /> <ListPieces />
          </>
        )}
      </Gallery>
    </Container>
  );
}
