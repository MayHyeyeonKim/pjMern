import React, { useState, useEffect } from "react";

function Upload(props) {
  const [Content, setContent] = useState("");

  const onSubmit = () => {
    let TempArr = [...props.ContentList];
    TempArr.push(Content);
    props.setContentList([...TempArr]);
    setContent("");
  };

  useEffect(() => {
    console.log("Content was changed");
  }, [Content]);

  return (
    <div
      style={{
        textAlign: "center",
        verticalAlign: "middle",
      }}
    >
      <input
        type="text"
        value={Content}
        onChange={(e) => {
          setContent(e.currentTarget.value);
        }}
      />
      <button
        onClick={() => {
          onSubmit();
        }}
        style={{ marginTop: "1rem" }}
      >
        Submit
      </button>
    </div>
  );
}

export default Upload;
