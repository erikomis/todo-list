import { FiTrash2 } from "react-icons/fi";
import styles from "./TaskList.module.css";

interface TaskData {
  id: number;
  isComplete: boolean;
  title: string;
}

interface TaskItem {
  task: TaskData;
  handleToggleTaskCompletion: (id: number) => void;
  handleRemoveTask: (id: number) => void;
}

export function TaskItem({
  task,
  handleRemoveTask,
  handleToggleTaskCompletion,
}: TaskItem) {
  return (
    <ul className={styles.list} key={task.id}>
      <li className={styles.listItem} key={task.id}>
        <div data-testid="task">
          <label className={styles["checkbox-container"]}>
            <input
              type="checkbox"
              checked={task.isComplete}
              className={styles.checkInput}
              onChange={() => handleToggleTaskCompletion(task.id)}
            />
            <span className="checkmark"></span>
          </label>
          <p
            style={{
              textDecoration: `${task.isComplete ? "line-through" : "initial"}`,
              color: `${task.isComplete ? "#808080" : "#d9d9d9"}`,
            }}
          >
            {task.title}
          </p>
        </div>
        <button
          type="button"
          data-testid="remove-task-button"
          className={styles.removeItem}
          onClick={() => handleRemoveTask(task.id)}
        >
          <FiTrash2 size={16} color={"#d9d9d9"} />
        </button>
      </li>
    </ul>
  );
}
