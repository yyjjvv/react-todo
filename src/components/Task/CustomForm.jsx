import { useState } from "react";

//library import
import { PlusIcon } from "@heroicons/react/24/solid";

const CustomForm = ({ addTask }) => {
    const [task, setTask] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addTask({
            name: task,
            checked: false,
            id: Date.now(),
        });
        setTask("");
    };
    return (
        <form className="todo" onSubmit={handleFormSubmit}>
            <div className="wrapper">
                <input
                    type="text"
                    id="task"
                    className="input"
                    value={task}
                    onInput={(e) => setTask(e.target.value)}
                    maxLength={60}
                    placeholder="Enter Todo"
                    required
                    autoFocus
                />
                <label htmlFor="task" className="label">
                    Enter Todo
                </label>
            </div>
            <button className="btn" aria-label="Add Task" type="submit">
                <PlusIcon />
            </button>
        </form>
    );
};

export default CustomForm;
