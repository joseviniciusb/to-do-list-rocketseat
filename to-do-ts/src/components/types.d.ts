export interface Task {
    id: string;
    description: string;
    itsDone: boolean;
  }
  
  export interface TaskListProps {
    task?: Task,
    tasks: Task[];
    onToggleDone: (id: string, tasks: Task[]) => void;
    onDeleteTask: (id: string) => void;
  }