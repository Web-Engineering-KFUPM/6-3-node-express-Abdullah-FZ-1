import express from "express";
import cors from "cors";
import morgan from "morgan";
import { getRandomQuote } from "./quotes.js";

// TODO 1: initialize Express app
const app = express();

const PORT = 3000;

// TODO 4: enable CORS middleware
app.use(cors());

// TODO 5: enable Morgan middleware
app.use(morgan("dev"));

// TODO 6.1: define root route
app.get("/", (req, res) => {
  res.send("Express server is running");
});

// TODO 6.2: define random quote API route
app.get("/api/quote", (req, res) => {
  const quote = getRandomQuote();
  res.json({ quote });
});

// TODO 7: start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});