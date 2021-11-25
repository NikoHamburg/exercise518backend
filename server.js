import express from "express";
import path from "path";
import mongoose from "mongoose";
import cors from "cors";
import { booksRouter } from "./routes/booksRouter.js";
import { personsRouter } from "./routes/personsRouter.js";

const app = express();
const __dirname = path.resolve(path.dirname(""));
const port = 3047;

mongoose.connect("mongodb://192.168.0.211:27017/bookstore");

app.use(express.json());
app.use(cors());

app.use("/books", booksRouter);
app.use("/persons", personsRouter);

app.get("/", (_req, res) => {
  res.send("API Home Route");
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
