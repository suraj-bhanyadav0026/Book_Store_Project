
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  author: {
    type: String,
    required: [true, 'Author is required'],
  },
  genre: {
    type: String,
    required: [true, 'Genre is required'],
  },
  publishedDate: {
    type: Date,
    required: [true, 'Published date is required'],
  },
});

const Book = mongoose.model('Book', bookSchema);
export default Book;
