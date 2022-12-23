import { useState } from "react";
import { v4 } from "uuid";
import styles from "./Body.module.css";

import plusIcon from "@/assets/plus.svg";
import clipboardIcon from "@/assets/clipboard.svg";

import { ITask } from "@/interfaces/Task";
import { Task } from "./task";

export function Body() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const tasksCompleted = tasks.reduce((acc, task) => {
    if (task.checked) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const [text, setText] = useState("");

  function createTask(text: string) {
    const newTask = {
      id: v4(),
      checked: false,
      text,
    };

    setTasks((state) => [...state, newTask]);
  }

  function deleteTask(id: string) {
    const updatedTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(updatedTasks);
  }

  function handleCreateTask() {
    if (text) {
      createTask(text);
      setText("");
    }
  }

  function completeTask(id: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          id: task.id,
          checked: !task.checked,
          text: task.text,
        };
      } else {
        return task;
      }
    });

    setTasks(updatedTasks);
  }

  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          placeholder="Adicione uma nova tarefa"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button className={styles.button} onClick={handleCreateTask}>
          Criar
          <img src={plusIcon} alt="Mais" />
        </button>
      </div>
      <div className={styles.info}>
        <div className={styles.created}>
          <strong>Tarefas criadas</strong>
          <span>{tasks.length}</span>
        </div>
        <div className={styles.done}>
          <strong>Concluídas</strong>

          {tasks.length ? (
            <span>
              {tasksCompleted} de {tasks.length}
            </span>
          ) : (
            <span>{tasks.length}</span>
          )}
        </div>
      </div>
      {tasks.length ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            completeTask={completeTask}
            deleteTask={deleteTask}
            task={task}
          />
        ))
      ) : (
        <div className={styles.empty}>
          <img src={clipboardIcon} alt="Mais" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}
    </div>
  );
}
