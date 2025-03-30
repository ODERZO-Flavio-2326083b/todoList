import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modals, setModals] = useState({
        addTaskForm: false
    });

    const openModal = (name) => {
        setModals((prev) => ({ ...prev, [name]: true }));
    };

    const closeModal = (name) => {
        setModals((prev) => ({ ...prev, [name]: false }));
    };

    return (
        <ModalContext.Provider value = {{modals, openModal, closeModal}}>
            { children }
        </ModalContext.Provider>
    )
}