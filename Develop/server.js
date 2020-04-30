const express = require("express");
const logger = require("morgan");

// // TODO: import mongoose
const mongojs = require("mongojs");
const mongoose = require("mongoose");

const apiRoutes = require("./routes/api");

const PORT = process.env.PORT || 3000;

const app = express();

// use logging middleware
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public", { "extensions": "html" }));

const Schema = mongoose.Schema;

const workoutSchema = new mongoose.Schema({
  type:{
    type: String,
    trim: true,
    required: "string is required",
  },
  name: {
    type: String,
    trim: true,
    required: "string is required",
  },
  duration: {
    type: Number,
    required: true,
    unique: true,
    min: 1,
  },
  weight: {
    type: Number,
    required: true,
    unique: true,
    min: 1,
  },
  reps: {
    type: Number,
    required: true,
    unique: true,
    min: 1,
  },
  sets: {
    type: Number,
    required:true,
    unique: true,
    min:1,
  }
});

const User = mongoose.model("Workout", workoutSchema);

module.exports = User;




// TODO: create mongodb connection with mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});


app.use(apiRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
