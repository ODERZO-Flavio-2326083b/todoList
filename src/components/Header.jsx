import React, { useContext } from 'react';
import TaskForm from './TaskForm';
import { ModalContext } from '../context/ModalContext';

const Header = () => {
    const { modals, openModal, closeModal } = useContext(ModalContext);
        
    return (
        <header className="header">
            <h1 className="title">Todo List</h1>
            <button className="add-task-btn" onClick={() => openModal("addTask")}>+</button>

            <TaskForm isOpen={modals.addTask} onClose={() => closeModal("addTask")} />
        </header>
    );
};

export default Header;