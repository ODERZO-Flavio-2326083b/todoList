import { createContext, useState } from "react";
import jsonTasks from "../data/tasks.json";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(jsonTasks.taches);
    const [categories, setCategories] = useState(jsonTasks.categories);
    const [relations, setRelations] = useState(jsonTasks.relations);

    const removeTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const updateTaskStatus = (taskId, newStatus) => {
        setTasks(tasks.map(task => 
            task.id === taskId ? { ...task, etat: newStatus } : task
        ));
    };

    const updateUrgence = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, urgent: !task.urgent } : task
        ));
    };

    const changeCategory = (event, taskId) => {
        const newCategoryId = parseInt(event.target.value);
    
        setRelations(prevRelations => {
        
            const updatedRelations = prevRelations.map(relation =>
                relation.tache === taskId
                    ? { ...relation, categorie: newCategoryId }
                    : relation
            );

            if (!prevRelations.some(r => r.tache === taskId)) {
                updatedRelations.push({ tache: taskId, categorie: newCategoryId });
            }

            return updatedRelations;
        });
    };

    return (
        <TaskContext.Provider value = {{ 
            tasks, setTasks, removeTask, updateTaskStatus, updateUrgence, changeCategory,
            categories, setCategories,
            relations, setRelations,  }}>
            { children }
        </TaskContext.Provider>
    )
}