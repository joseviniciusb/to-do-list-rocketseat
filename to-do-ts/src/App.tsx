import "./App.css";

import plusIcon from "./assets/plus-icon.png";

import React, { useState } from "react";
import Header from "./components/Header/Header";

interface Task {
  id: string;
  description: string;
  itsDone: boolean;
}

function App() {
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const doneCounter = tasks.filter((task) => task.itsDone === true).length;

  const handleItsDone = (id: string) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    const tempTasks = [...tasks];
    tempTasks[taskIndex].itsDone = !tempTasks[taskIndex].itsDone;
    setTasks(tempTasks);
  };

  const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskDescription(event.target.value);
  };

  const createTask = (event: React.FormEvent) => {
    event.preventDefault();
    let newTask = {
      description: taskDescription,
      id: (Math.random() + 1).toString(36).substring(7),
      itsDone: false,
    };
    setTaskDescription("");
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: string) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    const newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <Header />

      <div className="addTaskInputContainer">
        <form onSubmit={createTask}>
          <input
            className="addTaskInput"
            type="text"
            value={taskDescription}
            onChange={handleDescription}
          ></input>
          <button className="addTaskButton">
            <span>Criar</span>
            <img src={plusIcon}></img>
          </button>
        </form>
      </div>

      <div className="TasksContainer">
        <span className="TaskCount">{"Tarefas criadas:" + tasks.length}</span>
        <span className="CompletedTaskCounte">
          {"Tarefas concluidas:" + doneCounter + "de" + tasks.length}
        </span>

        {tasks.map((task) => (
          <div className="Task" key={task.id}>
            <input
              type="checkbox"
              onChange={() => handleItsDone(task.id)}
            ></input>
            <span className={task.itsDone ? "riskText" : ""}>
              {task.description}
            </span>
            <span className="DeleteTask" onClick={() => deleteTask(task.id)}>
              X
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
