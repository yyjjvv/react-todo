import { TrashIcon } from "@heroicons/react/24/outline";

import styles from "./NoteItem.module.css";
const NoteItem = ({ id, text, date, handleDeleteNote }) => {
    return (
        <li className={styles.note}>
            <span>{text}</span>
            <div className={styles["note-footer"]}>
                <small>{date}</small>
                <button
                    className={`btn ${styles.delete}`}
                    aria-label="Delete Note"
                    onClick={() => handleDeleteNote(id)}
                >
                    <TrashIcon width={24} height={24} />
                </button>
            </div>
        </li>
    );
};

export default NoteItem;
