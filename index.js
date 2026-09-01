import express from "express";
import dotenv from "dotenv";
const app = express();
const PORT = process.env.PORT || 3004;

dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
