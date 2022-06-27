import { useState } from "react";

import styles from "./TaskList.module.css";

import { FiTrash2, FiCheckSquare, FiPlusCircle } from "react-icons/fi";
import TaskInput from "./TaskInput";
import Clipboard from "../../Clipboard.png";

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

  return (
    <section className={styles.container}>
      <TaskInput
        onChange={(e) => setNewTaskTitle(e.target.value)}
        onClick={handleCreateNewTask}
        value={newTaskTitle}
      />
      <main className={styles.listWrapper}>
        <div>
          <div className={styles.conclui}>
            <span className={styles.criadas}>
              Tarefas Criadas: <span>{tasks.length}</span>
            </span>
            <span className={styles.concluidas}>
              Concluídas:{" "}
              <span>
              {tasks.reduce(
                (acc, value) => (value.isComplete ? acc + 1 : acc),
                0
              )}
              {tasks.length > 0 ? ` de ${tasks.length}` : ""}
              </span>
            </span>
          </div>
        </div>

        {tasks.map((item) => (
          <ul className={styles.list} key={item.id}>
            <li className={styles.listItem} key={item.id}>
              <div data-testid="task">
                <label className={styles["checkbox-container"]}>
                  <input
                    type="checkbox"
                    checked={item.isComplete}
                    className={styles.checkInput}
                    onChange={() => handleToggleTaskCompletion(item.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p
                  style={{
                    textDecoration: `${
                      item.isComplete ? "line-through" : "initial"
                    }`,
                    color: `${item.isComplete ? "#808080" : "#d9d9d9"}`,
                  }}
                >
                  {item.title}
                </p>
              </div>
              <button
                type="button"
                data-testid="remove-task-button"
                className={styles.removeItem}
                onClick={() => handleRemoveTask(item.id)}
              >
                <FiTrash2 size={16}  color={'#d9d9d9'} />
              </button>
            </li>
          </ul>
        ))}
        {tasks.length === 0 && (
          <div className={styles.taskcontainer}>
            <div className={styles.taskWrapper}>
              <div>
                <img src={Clipboard} alt="vazio" />
              </div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus items a fazer </p>
            </div>
          </div>
        )}
      </main>
    </section>
  );
}
