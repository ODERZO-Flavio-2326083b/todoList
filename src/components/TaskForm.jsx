import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
    const [newTask, setNewTask] = useState("")
    const { tasks, setTasks } = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault();

        const taskToAdd = {
            id: Date.now(),
            title: newTask,
            dueDate: "2025-03-22"
        }
        
        setTasks([...tasks, taskToAdd])
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={newTask}
                onChange= {(e) => setNewTask(e.target.value)}
                placeholder="Nom de la tache.."/><br/>
            <button type="submit">Ajouter</button>    
        </form>
    )
}

export default TaskForm;