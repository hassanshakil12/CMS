import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    taskDescription: {
      type: String,
      required: true,
    },
    taskAuthor: {
      type: String,
      required: true,
    },
    publishDate: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const taskModel = mongoose.model("task", taskSchema);
