import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"
import TaskItem from "./TaskItem";


function TaskList() {
    const { tasks } = useContext(TaskContext);

    return (
        <div>
            {tasks.map((task) => (
                <TaskItem task={task} />
            ))}
        </div>
    )
}

export default TaskList;