import React, { createContext, useState } from 'react';

const NotesStateContext = createContext([{}, () => {}]);

const NotesStateProvider = props => {
	const [notesState, setNotesState] = useState({
		notes: [],
		selectedNoteIndex: null,
		firstFetch: true
	});
	const dbURL = 'http://localhost:9090/notes';

	function fetchNotesFromDb() {
		fetch(dbURL)
			.then(res => res.json())
			.then(allNotes => setNotesState(notesState => ({ ...notesState, notes: allNotes })))
			.then(() => console.log('Notes Fetch Complete'))
			.catch(e => console.log(e));
	}

	if (notesState.firstFetch === true) {
		fetchNotesFromDb();
		setNotesState(notesState => ({ ...notesState, firstFetch: false }));
	}

	return (
		<NotesStateContext.Provider value={[notesState, setNotesState]}>
			{props.children}
		</NotesStateContext.Provider>
	);
};

export { NotesStateContext, NotesStateProvider };
