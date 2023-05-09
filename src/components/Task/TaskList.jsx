import TaskItem from "./TaskItem";

//styles
import styles from "./TaskItem.module.css";

const TaskList = ({ tasks, deleteTask, toggleTask, enterEditMode }) => {
    return (
        <ul className={styles.tasks}>
            {tasks
                .sort((a, b) => a.id - b.id)
                .map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        toggleTask={toggleTask}
                        enterEditMode={enterEditMode}
                    />
                ))}
        </ul>
    );
};

export default TaskList;
