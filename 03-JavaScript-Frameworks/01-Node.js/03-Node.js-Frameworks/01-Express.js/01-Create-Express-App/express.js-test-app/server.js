import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<div>Welcome!</div>");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
