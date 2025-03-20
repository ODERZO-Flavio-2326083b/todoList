import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import { TaskProvider } from "./context/TaskContext.jsx";
import "./App.css";

function App() {
  return (
    <TaskProvider>
      <main>
        <TaskList />
        <TaskForm />
      </main>
    </TaskProvider>
  );
}

export default App;