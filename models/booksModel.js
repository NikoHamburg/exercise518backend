import mongoose from "mongoose";
import { PersonsModel } from "./personsModel.js";

const booksSchema = mongoose.Schema(
  {
    title: { type: String },
    author: { type: mongoose.Schema.ObjectId, ref: "Person" },
    url: { type: String },
    customers: [{ type: mongoose.Schema.ObjectId, ref: "Person" }],
    isbn: { type: String },
  },
  { collection: "books", versionKey: false }
);

const BooksModel = mongoose.model("Book", booksSchema);

export { BooksModel };
