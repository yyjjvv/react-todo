import { TrashIcon } from "@heroicons/react/24/outline";

import styles from "./NoteItem.module.css";
const NoteItem = () => {
    return (
        <li className={styles.note}>
            {/* <span>{text}</span> */}
            <span>메모장 기능 구현하기</span>
            <div className={styles["note-footer"]}>
                {/* <small>{date}</small> */}
                <small>2023.05.08</small>
                <button
                    className={`btn ${styles.delete}`}
                    // aria-label={`Delete ${task.name} Note`}
                    // onClick={() => deleteTask(task.id)}
                >
                    <TrashIcon width={24} height={24} />
                </button>
            </div>
        </li>
    );
};

export default NoteItem;
