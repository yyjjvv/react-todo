import { useState } from "react";
// custom hooks
import useLocalStorage from "../../hooks/useLocalStorage";
// custom components
import Search from "./Search";
import NotesList from "./NotesList";
const Note = () => {
    const [notes, setNotes] = useLocalStorage("react-todo.notes", []);
    const [search, setSearch] = useState("");

    const handleAddNote = (note) => {
        setNotes((prevState) => [...prevState, note]);
    };

    const handleDeleteNote = (id) => {
        setNotes((prevState) => prevState.filter((n) => n.id !== id));
    };
    return (
        <>
            <h1>Your notes</h1>
            <Search setSearch={setSearch} />
            <NotesList
                notes={notes.filter((note) => {
                    return note.text.toLowerCase().includes(search);
                })}
                handleAddNote={handleAddNote}
                handleDeleteNote={handleDeleteNote}
            />
        </>
    );
};

export default Note;
