import "./App.css";

import plusIcon from "./assets/plus-icon.png";
import trashIcon from "./assets/trash-icon.png";
import clipboard from "./assets/clipboard.png"

import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";

interface Task {
  id: string;
  description: string;
  itsDone: boolean;
}

function App() {
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    if(tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

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

      <div className="createTaskContainer">
        <form onSubmit={createTask}>
          <input
            className="addTaskInput"
            type="text"
            value={taskDescription}
            onChange={handleDescription}
          ></input>
          <button className="addTaskButton">
            <span>Criar</span>
            <img alt="a plus icon" src={plusIcon}></img>
          </button>
        </form>
      </div>

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
                  onChange={() => handleItsDone(task.id)}
                ></input>
                <span className={task.itsDone ? "riskText" : ""}>
                  {task.description}
                </span>
                <img onClick={() => deleteTask(task.id)} src={trashIcon} alt="a trash icon"></img>
              </div>
            ))}
      </div>
    </div>
  );
}

export default App;
