import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

const TaskItem = ({ task }) => {
    return (
    <div className={`task-card ${task.urgent ? "urgent" : ""}`}>
        <h3 className="task-title">{task.title}</h3>
        {task.description && <p className="task-desc">{task.description}</p>}
        <p className="task-date">Créé le : {task.date_creation}</p>
        <p className="task-date">Échéance : {task.date_echeance}</p>
        <span className={`task-status ${task.etat.toLowerCase().replace(" ", "-")}`}>
            {task.etat}
        </span>
    </div>
    );
};

function TaskList() {
    const { tasks } = useContext(TaskContext);
    return (
        <div>
            {tasks.map((task) => (
                <TaskItem task={task}/>
            ))}
        </div>
    )
}

export default TaskList;