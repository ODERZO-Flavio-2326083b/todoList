import { useState, createContext, useContext } from "react";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import { TaskContext, TaskProvider } from "./context/TaskContext.jsx";

function App() {
  return (
    <TaskProvider>
      <div>
        <h1>Ma Todo List</h1>
        <TaskList />
        <TaskForm />
      </div>
    </TaskProvider>
  );
}

export default App;