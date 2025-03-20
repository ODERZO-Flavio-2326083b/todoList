import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

function TaskItem(task) {
    return (
        <div>
            <h3>{task.title}</h3>
            <p>À faire avant le : {task.date_echeance}</p>
        </div>
    )
}

function TaskList() {
    const { tasks } = useContext(TaskContext);

    return (
        <div>
        {tasks.map((task) => (
            TaskItem(task)
        ))}
        </div>
    )
}

export default TaskList;