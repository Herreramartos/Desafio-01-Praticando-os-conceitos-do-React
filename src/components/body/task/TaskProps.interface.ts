import { ITask } from "@/interfaces/Task";

export interface TaskProps {
  task: ITask;
  completeTask: (id: string) => void;
  deleteTask: (id: string) => void;
}
