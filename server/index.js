const express = require("express");
const app = express();
const path = require("path");
const port = 8005;
const mongoose = require("mongoose");
const { connectionString } = require("./credentials");

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Post } = require("./Model/Post.js");
app.listen(port, () => {
  mongoose
    .connect(connectionString, {
      dbName: "classproject",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`Example app listening on port ${port}`);
      console.log(`"localhost ${port}"를 브라우저에 찍어봐`);
    })
    .catch((err) => {
      console.log(`${err}를 해결하시오!`);
    });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.post("/api/test", (req, res) => {
  const communitypost = new Post({ title: "test", content: "테스트입니다" });
  res.status(200).json({ success: true, text: "안dsad냥" });
});
