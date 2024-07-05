import express from "express";
import { taskModel } from "../models/task.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let tasks = await taskModel.find({});
    let tasksData = { length: tasks.length, data: tasks };
    return res.status(200).json(tasksData);
  } catch (error) {
    console.log("Error");
    return res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let id = req.params.id;

    let task = await taskModel.findById(id);
    return res.status(200).json(task);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    let { title, taskDescription, taskAuthor, publishDate } = req.body;
    if (!title || !taskDescription || !taskAuthor || !publishDate) {
      return res.status(400).json({ message: "Kindly submit all details" });
    }
    let taskData = { title, taskDescription, taskAuthor, publishDate };
    let postTask = await taskModel.create(taskData);

    return res.status(200).json(postTask);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    let {id} = req.params
    let { title, taskDescription, taskAuthor, publishDate } = req.body;
    if (!title || !taskDescription || !taskAuthor || !publishDate) {
      return res.status(400).json({ message: "Kindly submit all details" });
    }
    let taskData = { title, taskDescription, taskAuthor, publishDate };
    let updateTask = await taskModel.findByIdAndUpdate(id,taskData);

    if (!updateTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json(updateTask);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let deleteTask = await taskModel.findByIdAndDelete(id);

    if (!deleteTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res
      .status(200)
      .json({ message: `Task Deleted Successfully ${deleteTask}` });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
});

export default router;
