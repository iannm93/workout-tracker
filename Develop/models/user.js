const mongoose = require("mongoose");

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