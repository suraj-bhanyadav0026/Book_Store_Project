
import express from "express";
import Book from "./bookModel.js";

const router = express.Router();


router.post("/add", async (req, res) => {
  try {
    const { title, author, genre, publishedDate } = req.body;

    const newBook = new Book({
      title,
      author,
      genre,
      publishedDate,
    });

    await newBook.save();

    res.status(201).json({
      message: "Book added successfully",
      book: newBook,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => err.message);
      res.status(400).json({ message: "Validation failed", errors });
    } else {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  }
});

export default router;
