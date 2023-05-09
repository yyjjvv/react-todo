// custom hooks
import useLocalStorage from "../../hooks/useLocalStorage";
// custom components
import Search from "./Search";
import NotesList from "./NotesList";
const Note = () => {
    const [notes, setNotes] = useLocalStorage("react-todo.notes", []);

    const handleAddNote = (note) => {
        setNotes((prevState) => [...prevState, note]);
    };

    const handleDeleteNote = (id) => {
        setNotes((prevState) => prevState.filter((n) => n.id !== id));
    };
    return (
        <>
            <h1>Your notes</h1>
            <Search />
            <NotesList
                notes={notes}
                handleAddNote={handleAddNote}
                handleDeleteNote={handleDeleteNote}
            />
        </>
    );
};

export default Note;
