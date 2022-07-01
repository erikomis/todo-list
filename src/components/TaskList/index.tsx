import { useState } from "react";
import styles from "./TaskList.module.css";
import { FiTrash2, FiCheckSquare, FiPlusCircle } from "react-icons/fi";
import { TaskEmpty } from "./TaskEmpty";
import TaskInput from "./TaskInput";
import { TaskItem } from "./TaskItem";
import { TaskHeader } from "./TaskHeader";

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskList() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

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
    <section className={styles.container}>
      <TaskInput
        onChange={(e) => setNewTaskTitle(e.target.value)}
        onClick={handleCreateNewTask}
        value={newTaskTitle}
      />
      <main className={styles.listWrapper}>
        <TaskHeader tasksConcluidas={tasksConcluidas}  totalTasks={totalTasks}/>
        {tasks.map((item) => (
          <TaskItem
            key={item.id}
            task={item}
            handleRemoveTask={handleRemoveTask}
            handleToggleTaskCompletion={handleToggleTaskCompletion}
          />
        ))}
        {tasks.length === 0 && <TaskEmpty />}
      </main>
    </section>
  );
}
