import { useState, useContext } from "react";
import { LoginContext } from "../../contexts/loginContext.js";
import ArtPosts from "../../components/artPosts/artPost.js";
import { Container, Gallery } from "../home/homeStyle.js";
import axios from "axios";

export default function PersonalPage() {
  const [listPosts, setListPosts] = useState([]);
  const { token, userId } = useContext(LoginContext);
  if (userId) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`http://localhost:4000/${userId}/pieces/find`, config)
      .then((res) => {
        setListPosts(res.data);
      })
      .catch((error) => {
        alert(error);
      });
  }
  function ListPieces() {
    return listPosts.map(ArtPosts);
  }

  return (
    <Container>
      <h2>Your gallery</h2>
      <Gallery>
        {listPosts.length === 0 ? <p>Nothing here yet :(</p> : <ListPieces />}
      </Gallery>
    </Container>
  );
}
