import React, { HTMLAttributes, InputHTMLAttributes } from "react";
import { FiPlusCircle } from "react-icons/fi";
import styles from "./TaskList.module.css";
interface TaskInputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLButtonElement> {}

// ButtonHTMLAttributes < HTMLButtonElement;
export default function TaskInput({
  onClick,
  onChange,
  ...rest
}: TaskInputProps) {
  return (
    <div className={styles.form_container}>
      <div className={styles["input-group"]}>
        <input
          type="text"
          placeholder="Adicionar novo todo"
          onChange={(e)=> onChange?.(e)}
        />
        <button type="submit" data-testid="add-task-button" onClick={onClick}>
          criar
          <FiPlusCircle size={16} color="#fff" />
        </button>
      </div>
    </div>
  );
}
