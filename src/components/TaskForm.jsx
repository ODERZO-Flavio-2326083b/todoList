import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm({ isOpen, onClose }) {

    const { tasks, setTasks } = useContext(TaskContext);
    const [newTask, setNewTask] = useState({
        title: "",
        description: "",
        date_echeance: "",
        urgent: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNewTask({
            ...newTask,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let date = new Date();

        const taskToAdd = {
            id: tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1,
            title: newTask.title,
            description: newTask.description,
            date_creation: date.toISOString().slice(0, 10),
            date_echeance: newTask.date_echeance,
            etat: "Nouveau",
            urgent: newTask.urgent
        };

        setTasks([...tasks, taskToAdd]);
        console.log("Tâche ajoutée :", tasks);
        setNewTask({ title: "", description: "", date_echeance: "", urgent: false });
    };

    return isOpen && (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Ajouter une tâche</h2>
                <form className="task-add-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        value={newTask.title}
                        onChange={handleChange}
                        placeholder="Nom de la tâche..."
                        required /><br />
                    <textarea
                        name="description"
                        value={newTask.description}
                        onChange={handleChange}
                        placeholder="Description..." /><br />
                    <input
                        type="date"
                        name="date_echeance"
                        value={newTask.date_echeance}
                        onChange={handleChange} /><br />
                    <label className="urgent-label">
                        Urgent
                        <input
                            type="checkbox"
                            name="urgent"
                            checked={newTask.urgent}
                            onChange={handleChange} />
                    </label><br />

                    <div className="modal-buttons">
                        <button type="submit">Ajouter</button>
                        <button type="button" className="close-btn" onClick={onClose}>Fermer</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TaskForm;