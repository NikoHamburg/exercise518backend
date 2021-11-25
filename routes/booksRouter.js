import express from "express";
import * as booksController from "../controllers/booksController.js";

const booksRouter = express.Router();

booksRouter.get("/", async (_req, res) => {
  res.json({
    books: await booksController.getAllBooks(),
  });
});

export { booksRouter };
