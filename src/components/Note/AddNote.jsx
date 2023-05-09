import { useState } from "react";

//icon
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

//styles
import styles from "./AddNote.module.css";

const AddNote = ({ handleAddNote }) => {
    const [note, setNote] = useState("");

    const handleSave = (e) => {
        e.preventDefault();
        const today = new Date();
        handleAddNote({
            text: note,
            id: Date.now(),
            date: today.toLocaleDateString(),
        });
        setNote("");
    };

    return (
        <li className={styles.note}>
            <textarea
                placeholder="Type to add a note..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                maxLength="200"
            ></textarea>
            <div className={styles["note-footer"]}>
                <small>{note.length} / 200</small>
                <button className={`btn ${styles.save}`} onClick={handleSave}>
                    <ArrowDownTrayIcon />
                </button>
            </div>
        </li>
    );
};

export default AddNote;
