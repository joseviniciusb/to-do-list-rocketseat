import React from "react";

import clipboard from "../../assets/clipboard.png"
import TaskItem from "../TaskItem/TaskItem";

import { TaskListProps } from "../types";

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
              <TaskItem {...{task, onDeleteTask, onToggleDone, tasks}}  />
            ))}
    </div>
  );
};

export default TaskList;
