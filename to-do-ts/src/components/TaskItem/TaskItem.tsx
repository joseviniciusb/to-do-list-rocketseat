import React, { useState } from "react";
import trashIcon from "../../assets/trash-icon.png";

import { Task, TaskListProps } from "../types";

const TaskItem: React.FC<TaskListProps> = ({ task, onToggleDone, onDeleteTask, tasks }) => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  if(!task)
    return <></>;

  return (
    <div className="task" key={task.id}>
      <input
        type="checkbox"
        checked={task.itsDone}
        onChange={() => onToggleDone(task.id, tasks)}
      ></input>
      <span className={task.itsDone ? "riskText" : ""}>{task.description}</span>
      {confirmDelete ? (
        <div>
          <span
            onClick={() => {
              onDeleteTask(task.id);
              setConfirmDelete(false);
            }}
          >
            Certeza
          </span>
          <span onClick={() => setConfirmDelete(false)}>Cancela</span>
        </div>
      ) : (
        <img
          onClick={() => setConfirmDelete(true)}
          src={trashIcon}
          alt="a trash icon"
        ></img>
      )}
    </div>
  );
};

export default TaskItem;
