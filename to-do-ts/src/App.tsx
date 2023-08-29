import "./App.css";

import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import TaskForm from "./components/CreateTaskForm/CreateTaskForm";

interface Task {
  id: string;
  description: string;
  itsDone: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleItsDone = (id: string) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    const tempTasks = [...tasks];
    tempTasks[taskIndex].itsDone = !tempTasks[taskIndex].itsDone;
    setTasks(tempTasks);
  };

  const handleCreateTask = (taskDescription: string) => {
    const newTask = {
      description: taskDescription,
      id: (Math.random() + 1).toString(36).substring(7),
      itsDone: false,
    };
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

      <TaskForm onCreateTask={handleCreateTask} />

      <TaskList
        tasks={tasks}
        onToggleDone={handleItsDone}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
