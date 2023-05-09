import { useState } from "react";

// custom hooks
import useLocalStorage from "./hooks/useLocalStorage";

// custom components
import ThemeSwitcher from "./components/ThemeSwitcher";
import Task from "./components/Task/Task";
import Note from "./components/Note/Note";

const App = () => {
    // const [mode, setMode] = useState("task");
    const [mode, setMode] = useState(
        JSON.parse(window.localStorage.getItem("react-todo.appType"))
    );
    return (
        <div className="container">
            <ThemeSwitcher mode={mode} setMode={setMode} />
            {mode === "task" ? <Task /> : <Note />}
        </div>
    );
};

export default App;
