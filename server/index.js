const express = require("express");
const app = express();
const port = 5001;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/express", (req, res) => {
  res.send("Hello Express!");
});
