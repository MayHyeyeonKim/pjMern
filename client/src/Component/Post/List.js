import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

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
    <div>
      {/* <h1>List</h1> */}
      {/* <h3>{Text}</h3> */}
      {postList.map((post, idx) => {
        return (
          <div>
            <p>제목 : {post.title}</p>
            내용: {post.content}
            <hr />
          </div>
        );
      })}
      <>
        <Button href="/">Home</Button> <Button type="submit">Button</Button>{" "}
      </>
    </div>
  );
}
export default List;
