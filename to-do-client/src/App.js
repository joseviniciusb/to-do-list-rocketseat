import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";

function App() {
  const [itsDone, setItsDone] = useState(false);
  const [taskDescription, setTaskDescription] = useState("");


  const tasks = [];
  let newTask = {description: ''};

  const handleItsDone = () => {
    setItsDone((current) => !current);
  };

  const handleDescription = (event) => {
    setTaskDescription(event.target.value);
  };

  const createTask = (event) => {
    event.preventDefault();
    newTask.description = taskDescription;
    tasks.push(newTask);
    console.log('array', tasks);
    console.log('newTask',newTask);
   
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDoListss</h1>
      </header>

      <div className="AddTaskInput">
        <form onSubmit={createTask}>
          <input
            type="text"
            value={taskDescription}
            onChange={handleDescription}
          ></input>
          <button>Criar tarefa</button>
        </form>
      </div>

      <div className="TasksContainer">
        <span className="TaskCount">{"Tarefas criadas:" + 0}</span>
        <span className="CompletedTaskCounte">
          {"Tarefas concluidas:" + 0 + "de" + 0}
        </span>

        <div className="Task">
          <input
            type="checkbox"
            value={itsDone}
            onChange={handleItsDone}
          ></input>
          <span className={itsDone ? "riskText" : ""}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </span>
          <span className="DeleteTask">X</span>
        </div>
      </div>
    </div>
  );
}

export default App;
