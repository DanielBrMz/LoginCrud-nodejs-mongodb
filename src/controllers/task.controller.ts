import { Request, Response } from "express";
import Task from "../models/Task";

export const renderTask = async (_req: Request, res: Response) => {
  const tasks = await Task.find().lean();
  res.render("index", { tasks: tasks });
};

export const createTask = async (req: Request, res: Response) => {
  try {
    res.redirect("/");
    const task = new Task(req.body);
    await task.save();
  } catch (error) {
    console.log(error);
  }
};

export const renderTaskEdit = async (req: Request, res: Response) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task });
  } catch (error) {
    console.log(error);
  }
};

export const editTask = async (req: Request, res: Response) => {
  await Task.findByIdAndUpdate(req.params.id, req.body);

  res.redirect("/");
};

export const deleteTask = async (req: Request, res: Response) => {
  await Task.findByIdAndDelete(req.params.id);

  res.redirect("/");
};

export const toggleDone = async (req: Request, res: Response) => {
  const task = await Task.findById(req.params.id);

  task!.done = !task!.done;

  await task!.save();

  res.redirect("/");
};
