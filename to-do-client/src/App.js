import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDoListss</h1>
      </header>

      <div className="AddTaskInput">
        <input type="text"></input>
        <button>Criar tarefa</button>
      </div>

      <div className="TasksContainer">
        <span className="TaskCount">{"Tarefas criadas:" + 0}</span>
        <span className="CompletedTaskCounte">
          {"Tarefas concluidas:" + 0 + "de" + 0}
        </span>

        <div className="Task">
          <input type="checkbox"></input>
          <span>
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
