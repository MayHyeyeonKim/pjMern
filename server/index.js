const express = require("express");
const app = express();
const path = require("path");
const port = 8005;
const mongoose = require("mongoose");
const { connectionString } = require("./credentials");
const cors = require("cors");

app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Post } = require("./Model/Post.js");
const { Counter } = require("./Model/Counter.js");

app.listen(port, () => {
  mongoose
    .connect(connectionString, {
      dbName: "pj-mern-db",
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

//클라이언트단에서 "/api/post/***"로 post 요청이 온다면은
app.post("/api/post/submit", (req, res) => {
  let temp = req.body;
  Counter.findOne({ name: "counter" })
    .exec()
    .then((counter) => {
      temp.postNum = counter.postNum;
      console.log(temp);
      const communityPost = new Post(temp);
      communityPost.save().then(() => {
        Counter.updateOne({ name: "counter" }, { $inc: { postNum: 1 } }).then(
          () => {
            res.status(200).json({ success: true });
          }
        );
      });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

app.post("/api/post/list", (req, res) => {
  Post.find()
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true, postList: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});
