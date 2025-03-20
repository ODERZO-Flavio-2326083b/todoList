import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
    const [newTask, setNewTask] = useState("")
    const { tasks, setTasks } = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        let date = new Date()

        const taskToAdd = {
            id: Math.max(...tasks.map(task => task.id)) + 1,
            title: "fdsf",
            description: "fdsfds",
            date_creation: date.toISOString().slice(0, 10),
            date_echeance: "2025-04-01",
            etat: "Nouveau",
            urgent: true
        }
        setNewTask("")
        setTasks([...tasks, taskToAdd])
    }

    return (
        <form class="task-add-form" onSubmit={handleSubmit}>
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