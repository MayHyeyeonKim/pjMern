import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { ListDiv, ListItem } from "../../Style/ListCSS.js";

function List(props) {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios
      .post("/api/post/list")
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          setPostList([...res.data.postList]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ListDiv>
      {postList.map((post, idx) => {
        return (
          <ListItem>
            <p className="title">{post.title}</p>
            <p>{post.content}</p>
          </ListItem>
        );
      })}
      {/* <>
        <Button style={{ margin: "10px 10px" }} href="/">
          Home
        </Button>{" "}
        <br />
        <Button style={{ margin: "10px 10px" }} type="submit">
          Button
        </Button>{" "}
      </> */}
    </ListDiv>
  );
}
export default List;
