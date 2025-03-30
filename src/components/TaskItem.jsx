import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

const TaskItem = ({ task }) => {
    const { removeTask, updateTaskStatus, updateUrgence, categories, relations, changeCategory } = useContext(TaskContext);

    const relation = relations.find(r => r.tache === task.id);
    const currentCategory = relation ? categories.find(c => c.id === relation.categorie) : null;

    return (
        <div key={task.id} className={`task-card ${task.urgent ? "urgent" : ""}`}>
            <div className="task-header">
                <h3 className="task-title">{task.title}</h3>
                <select 
                    className="category-select" 
                    value={currentCategory ? currentCategory.id : ""}
                    onChange={(event) => changeCategory(event, task.id)}>
                    <option value="">Sans catégorie</option>
                    {categories.map(cat => (
                        <option key={cat.id} value={cat.id}>
                            {cat.title}
                        </option>
                    ))}
                </select>
            </div>
            <p className="task-desc">{task.description}</p>
            <p className="task-date">Créé le : {task.date_creation}</p>
            <p className="task-date">Échéance : {task.date_echeance}</p>
            <select
                className="task-status-select"
                value={task.etat}
                onChange={(e) => updateTaskStatus(task.id, e.target.value)}>
                <option value="Nouveau">Nouveau</option>
                <option value="En cours">En cours</option>
                <option value="Réussi">Réussi</option>
                <option value="En attente">En attente</option>
                <option value="Abandonné">Abandonné</option>
            </select>
            <label className="task-urgent-label">
                <input
                type="checkbox"
                checked={task.urgent}
                onChange={() => updateUrgence(task.id)}/>
                Urgent
            </label>
            <button onClick={() => removeTask(task.id)} className="task-remove-btn">
                Supprimer
            </button>
        </div>
    );
};

export default TaskItem;