import React from "react";


import trashIcon from "../../assets/trash-icon.png"
import clipboard from "../../assets/clipboard.png"

interface Task {
  id: string;
  description: string;
  itsDone: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggleDone: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleDone, onDeleteTask }) => {

    const doneCounter = tasks.filter((task) => task.itsDone === true).length;

  return (
    <div className="TasksContainer">
     <div className="counterContainer">
          <span className="taskCount">
            {"Tarefas criadas: "}
            <span className="countBadge">{tasks.length}</span>
          </span>
          <span className="taskCount">
            {"Tarefas concluidas: "}
            <span className="countBadge">{doneCounter + " de "}</span>
            <span className="countBadge">{tasks.length}</span>
          </span>
        </div>

        {tasks.length === 0
          ? <div className="emptyContainer"> <img alt="clipboard" src={clipboard}></img>
            <h3>Você ainda não tem tarefas cadastradas</h3>
            <p>Crie tarefas e organize seus items a fazer</p>
           </div>
          : tasks.map((task) => (
              <div className="task" key={task.id}>
                <input
                  type="checkbox"
                  onChange={() => onToggleDone(task.id)}
                ></input>
                <span className={task.itsDone ? "riskText" : ""}>
                  {task.description}
                </span>
                <img onClick={() => onDeleteTask(task.id)} src={trashIcon} alt="a trash icon"></img>
              </div>
            ))}
    </div>
  );
};

export default TaskList;
