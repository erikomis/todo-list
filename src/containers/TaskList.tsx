import React, { useState } from "react";
import { TaskList as TaskListComponent } from "../components/TaskList";

export interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  function handleChangeNewTaskTitle(
    event: React.ChangeEvent<HTMLInputElement | HTMLButtonElement>
  ) {
    setNewTaskTitle(event.target.value);
  }
  function handleCreateNewTask() {
    if (!newTaskTitle) {
      return;
    }
    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false,
    };
    setTasks((oldTask) => [...oldTask, newTask]);
    setNewTaskTitle("");
  }

  function handleToggleTaskCompletion(id: number) {
    const newTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            isComplete: !task.isComplete,
          }
        : task
    );
    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    setTasks((item) => item.filter((value) => value.id != id));
  }
  const tasksConcluidas = tasks.reduce(
    (acc, value) => (value.isComplete ? acc + 1 : acc),
    0
  );
  const totalTasks = tasks.length;

  return (
    <TaskListComponent
      handleCreateNewTask={handleCreateNewTask}
      handleRemoveTask={handleRemoveTask}
      handleToggleTaskCompletion={handleToggleTaskCompletion}
      newTaskTitle={newTaskTitle}
      tasks={tasks}
      tasksConcluidas={tasksConcluidas}
      totalTasks={totalTasks}
      handleChangeNewTaskTitle={handleChangeNewTaskTitle}
    />
  );
}

export default TaskList;
