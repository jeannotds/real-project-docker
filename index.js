import express from "express";
import { db } from "./src/db.js";
import { initializeDatabase } from "./helper/init.function.js";

const app = express();
const PORT = process.env.PORT || 3004;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "API en bonne santé",
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

async function listenServer() {
  db.connect()
    .then(() => console.log("✅ Connecté à PostgreSQL"))
    .catch((err) => console.error("❌ Erreur PostgreSQL :", err.message));
}

await listenServer();

await initializeDatabase();
