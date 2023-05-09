import React from "react";

import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const NotesList = () => {
    return (
        <ul className="notes-list">
            <AddNote
            // handleAddNote={handleAddNote}
            />
            {/* {notes.map((note) => (
				<NoteItem
					id={note.id}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
				/>
			))} */}
            <NoteItem
            // id={note.id}
            // text={note.text}
            // date={note.date}
            // handleDeleteNote={handleDeleteNote}
            />
        </ul>
    );
};

export default NotesList;
