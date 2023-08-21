import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";

function App() {
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  const doneCounter = tasks.filter((task) => task.itsDone === true).length;

  const handleItsDone = (id) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    const tempTasks = [...tasks];
    tempTasks[taskIndex].itsDone = !tempTasks[taskIndex].itsDone;
    setTasks(tempTasks);
  };

  const handleDescription = (event) => {
    setTaskDescription(event.target.value);
  };

  const createTask = (event) => {
    event.preventDefault();
    let newTask = {
      description: taskDescription,
      id: (Math.random() + 1).toString(36).substring(7),
      itsDone: false,
    };
    setTaskDescription("");
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    const newTasks = [...tasks];
     newTasks.splice(taskIndex, 1);
     setTasks(newTasks);


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
        <span className="TaskCount">{"Tarefas criadas:" + tasks.length}</span>
        <span className="CompletedTaskCounte">
          {"Tarefas concluidas:" + doneCounter + "de" + tasks.length}
        </span>

        {tasks.map((task) => (
          <div className="Task" key={task.id}>
            <input
              type="checkbox"
              value={task.itsDone}
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
