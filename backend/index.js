import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import booksRoute from "./booksRoute.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => res.send("📚 Welcome to Book Store"));


app.use("/books", booksRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(process.env.PORT || 5555, () => {
      console.log(
        ` Server running on http://localhost:${process.env.PORT || 5555}`
      );
    });
  })
  .catch((err) => console.log(" MongoDB Connection Error:", err.message));
