import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Test from "./Test";
import Heading from "./Component/Heading";
import List from "./Component/List";
import Upload from "./Component/Upload";

function App() {
  const [ContentList, setContentList] = useState([]);

  return (
    <>
      <Heading />
      <Routes>
        <Route
          path="/List"
          element={
            <List ContentList={ContentList} setContentList={setContentList} />
          }
        />
        <Route
          path="/Upload"
          element={
            <Upload ContentList={ContentList} setContentList={setContentList} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
