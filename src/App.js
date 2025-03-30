import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import Header from "./components/Header.jsx";
import { TaskProvider } from "./context/TaskContext.jsx";
import "./css/App.css";
import { ModalProvider } from "./context/ModalContext.jsx";

function App() {
  return (
    <ModalProvider>
    <TaskProvider>
      <Header/>
      <main>
        <TaskList />
        <TaskForm />
      </main>
    </TaskProvider>
    </ModalProvider>
  );
}

export default App;