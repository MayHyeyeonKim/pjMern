import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Heading() {
  const [Content, setContent] = useState("");
  const [ContentList, setContentList] = useState([]);

  const onSubmit = () => {
    let TempArr = [...ContentList];
    TempArr.push(Content);
    setContentList([...TempArr]);
    setContent("");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <h1>Hello, React!</h1>
      <Link to="/">Home</Link>
      <Link to="/list">List</Link>
      <Link to="/upload">Upload</Link>
    </div>
  );
}

export default Heading;
