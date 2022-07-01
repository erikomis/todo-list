import styles from "./TaskList.module.css";

interface TaskHeaderProps {
  totalTasks: number;
  tasksConcluidas: number;
}

export function TaskHeader({ tasksConcluidas, totalTasks }: TaskHeaderProps) {
  return (
    <div>
      <div className={styles.conclui}>
        <span className={styles.criadas}>
          Tarefas Criadas: <span>{totalTasks}</span>
        </span>
        <span className={styles.concluidas}>
          Concluídas:{" "}
          <span>
            {tasksConcluidas} de {totalTasks}
          </span>
        </span>
      </div>
    </div>
  );
}
