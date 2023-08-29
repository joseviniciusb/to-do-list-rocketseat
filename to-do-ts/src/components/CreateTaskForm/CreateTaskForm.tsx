// components/TaskForm.tsx
import React, { useState } from "react";

import plusIcon from "../../assets/plus-icon.png"

interface TaskFormProps {
  onCreateTask: (taskDescription: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onCreateTask }) => {
  const [taskDescription, setTaskDescription] = useState("");

  const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskDescription(event.target.value);
  };

  const createTask = (event: React.FormEvent) => {
    event.preventDefault();
    onCreateTask(taskDescription);
    setTaskDescription("");
  };

  return (
    <div className="createTaskContainer">
      <form onSubmit={createTask}>
        <input
          className="addTaskInput"
          type="text"
          value={taskDescription}
          onChange={handleDescription}
        />
        <button className="addTaskButton">
          <span>Criar</span>
          <img alt="a plus icon" src={plusIcon}></img>
        </button>
      </form>
    </div>
  );
};

export default TaskForm;