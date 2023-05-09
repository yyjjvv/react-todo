import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

import styles from "./AddNote.module.css";
const AddNote = () => {
    return (
        <li className={styles.note}>
            <textarea
                placeholder="Type to add a note..."
                // value={noteText}
                // onChange={handleChange}
            ></textarea>
            <div className={styles["note-footer"]}>
                {/* <small>{characterLimit - noteText.length} Remaining</small> */}
                <small>0/200</small>
                <button
                    className={`btn ${styles.save}`}
                    // onClick={handleSaveClick}
                >
                    <ArrowDownTrayIcon />
                </button>
            </div>
        </li>
    );
};

export default AddNote;
