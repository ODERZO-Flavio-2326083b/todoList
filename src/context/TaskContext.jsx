import { createContext, useState } from "react";
import jsonTasks from "../data/tasks.json";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(jsonTasks.taches);

    return (
        <TaskContext.Provider value = {{ tasks, setTasks }}>
            { children }
        </TaskContext.Provider>
    )
}