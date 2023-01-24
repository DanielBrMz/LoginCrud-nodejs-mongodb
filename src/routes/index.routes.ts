import { Router } from "express";
import {
  createTask,
  deleteTask,
  editTask,
  renderTask,
  renderTaskEdit,
  toggleDone,
} from "../controllers/task.controller";

const router = Router();

router.get("/", renderTask);

router.post("/tasks/add", createTask);

router.get("/about", (_req, res) => {
  res.render("about");
});

router.get("/tasls/:id/edit", renderTaskEdit);

router.post("/tasls/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);

router.get("/tasks/:id/toggleDone", toggleDone);

export default router;
