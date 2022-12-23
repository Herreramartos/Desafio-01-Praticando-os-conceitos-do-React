import styles from "./Task.module.css";
import { TaskProps } from "./TaskProps.interface";

import checkIcon from "@/assets/check.svg";
import trashIcon from "@/assets/trash.svg";

export function Task({ task, completeTask, deleteTask }: TaskProps) {
  function handleCheckTask() {
    completeTask(task.id);
  }

  function handleDeleteTask() {
    deleteTask(task.id);
  }

  return (
    <div
      className={`${styles.task} ${
        task.checked ? styles.task_checked : styles.task_unchecked
      }`}
    >
      <div className={styles.task_wrapper}>
        <button
          className={styles.checkbox}
          onClick={handleCheckTask}
          title={task.checked ? "desmarcar" : "marcar"}
        >
          <div
            className={
              task.checked ? styles.radio_checked : styles.radio_unchecked
            }
          >
            {task.checked && (
              <img src={checkIcon} className="check Icon" alt="check Icon" />
            )}
          </div>
        </button>

        <p
          className={task.checked ? styles.text_checked : styles.text_unchecked}
        >
          {task.text}
        </p>
      </div>
      <button
        className={styles.delete}
        onClick={handleDeleteTask}
        title="deletar"
      >
        <img src={trashIcon} className="trash Icon" alt="trash Icon" />
      </button>
    </div>
  );
}
