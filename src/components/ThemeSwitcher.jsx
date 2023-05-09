import { useState, useEffect } from "react";

//custom hooks
import useLocalStorage from "../hooks/useLocalStorage";

//icons
import {
    XMarkIcon,
    SunIcon,
    MoonIcon,
    SwatchIcon,
    DocumentTextIcon,
    ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

//styles
import styles from "./ThemeSwitcher.module.css";

const ThemeSwitcher = ({ mode, setMode }) => {
    const defaultDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
    const [isColorPicking, setIsColorPicking] = useState(false);
    const [theme, setTheme] = useLocalStorage(
        "react-todo.theme",
        defaultDark ? "dark" : "light"
    );
    const [hue, setHue] = useLocalStorage("react-todo.color", "200");
    const [appType, setAppType] = useLocalStorage(
        "react-todo.appType",
        mode === "task" ? "task" : "note"
    );

    useEffect(() => {
        document.documentElement.setAttribute("color-scheme", theme);
    }, [theme]);

    useEffect(() => {
        document.documentElement.style.setProperty("--_hue", hue);
    }, [hue]);

    const handleThemeBtn = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const handleModeChange = () => {
        setAppType(appType === "task" ? "note" : "task");
        setMode(appType === "task" ? "note" : "task");
    };
    return (
        <header className={styles.wrapper}>
            {isColorPicking ? (
                <div className={styles["picker-wrapper"]}>
                    <input
                        type="range"
                        className={styles.picker}
                        aria-label="Change color theme slider"
                        min="0"
                        max="360"
                        value={hue}
                        onInput={(e) => setHue(e.target.value)}
                    />
                    <button
                        className={`btn ${styles.close}`}
                        aria-label="Close color picking mode"
                        onClick={() => setIsColorPicking(false)}
                    >
                        <XMarkIcon />
                    </button>
                </div>
            ) : (
                <div className={styles["btns-wrapper"]}>
                    <div className={styles.btns}>
                        <button
                            className="btn"
                            aria-label={`Change theme to ${
                                theme === "light" ? "light" : "dark"
                            } mode`}
                            role="switch"
                            onClick={handleThemeBtn}
                        >
                            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                        </button>
                        <button
                            className="btn"
                            aria-label="Enable color piciking mode"
                            onClick={() => setIsColorPicking(true)}
                        >
                            <SwatchIcon />
                        </button>
                    </div>
                    <button
                        className="btn"
                        aria-label={`Change into ${
                            mode === "task" ? "note" : "task"
                        } app`}
                        onClick={
                            // () =>
                            // setMode(mode === "task" ? "note" : "task")
                            handleModeChange
                        }
                    >
                        {mode === "task" ? (
                            <DocumentTextIcon />
                        ) : (
                            <ClipboardDocumentCheckIcon />
                        )}
                    </button>
                </div>
            )}
        </header>
    );
};

export default ThemeSwitcher;
