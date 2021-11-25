import { BooksModel } from "../models/booksModel.js";

export const getAllBooks = async () => {
  const books = await BooksModel.find({})
    .populate("author")
    .populate("customers");
  return books;
};
