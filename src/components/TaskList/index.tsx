import { useState } from "react";
import styles from "./TaskList.module.css";
import { FiTrash2, FiCheckSquare, FiPlusCircle } from "react-icons/fi";
import { TaskEmpty } from "./TaskEmpty";
import TaskInput from "./TaskInput";
import { TaskItem } from "./TaskItem";
import { TaskHeader } from "./TaskHeader";
import { Task } from "../../containers/TaskList";

interface TaskListProps {
  handleCreateNewTask: () => void;
  handleRemoveTask: (id: number) => void;
  handleToggleTaskCompletion: (id: number) => void;
  newTaskTitle: string;
  tasks: Task[];
  tasksConcluidas: number;
  totalTasks: number;
  handleChangeNewTaskTitle: (
    event: React.ChangeEvent<HTMLInputElement | HTMLButtonElement>
  ) => void;
}
export function TaskList({
  handleCreateNewTask,
  handleRemoveTask,
  handleToggleTaskCompletion,
  newTaskTitle,
  tasks,
  tasksConcluidas,
  totalTasks,
  handleChangeNewTaskTitle,
}: TaskListProps) {
  console.log(tasks);
  return (
    <section className={styles.container}>
      <TaskInput
        onChange={(e) => handleChangeNewTaskTitle(e)}
        onClick={handleCreateNewTask}
        value={newTaskTitle}
      />
      <main className={styles.listWrapper}>
        <TaskHeader tasksConcluidas={tasksConcluidas} totalTasks={totalTasks} />
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
