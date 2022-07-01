import styles from "./TaskList.module.css";
import Clipboard from "../../Clipboard.png";

export function TaskEmpty(){
  return (
    <div className={styles.taskcontainer}>
    <div className={styles.taskWrapper}>
      <div>
        <img src={Clipboard} alt="vazio" />
      </div>
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus items a fazer </p>
    </div>
  </div>
  )
}