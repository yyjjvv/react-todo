import { useState } from "react";

// custom hooks
import useLocalStorage from "../../hooks/useLocalStorage";
// custom components
import CustomForm from "./CustomForm";
import EditForm from "./EditForm";
import TaskList from "./TaskList";

const Task = () => {
    const [tasks, setTasks] = useLocalStorage("react-todo.tasks", []);
    const [previousFocusEl, setPreviousFocusEl] = useState(null);
    const [editedTask, setEditedTask] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const addTask = (task) => {
        setTasks((prevState) => [...prevState, task]);
    };

    const deleteTask = (id) => {
        setTasks((prevState) => prevState.filter((t) => t.id !== id));
    };

    const toggleTask = (id) => {
        setTasks((prevState) =>
            prevState.map((t) =>
                t.id === id ? { ...t, checked: !t.checked } : t
            )
        );
    };

    const updateTask = (task) => {
        setTasks((prevState) =>
            prevState.map((t) =>
                t.id === task.id ? { ...t, name: task.name } : t
            )
        );
        closeEditMode();
    };

    const closeEditMode = () => {
        setIsEditing(false);
        previousFocusEl.focus();
    };

    const enterEditMode = (task) => {
        setEditedTask(task);
        setIsEditing(true);
        setPreviousFocusEl(document.activeElement);
    };

    return (
        <>
            <h1>Your tasks</h1>
            {isEditing && (
                <EditForm
                    editedTask={editedTask}
                    updateTask={updateTask}
                    closeEditMode={closeEditMode}
                />
            )}
            <CustomForm addTask={addTask} />
            {tasks && (
                <TaskList
                    tasks={tasks}
                    deleteTask={deleteTask}
                    toggleTask={toggleTask}
                    enterEditMode={enterEditMode}
                />
            )}
        </>
    );
};

export default Task;
