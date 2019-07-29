import React, { createContext, useState, useEffect } from 'react';

const NotesStateContext = createContext([{}, () => {}]);

const NotesStateProvider = props => {
	const [notesState, setNotesState] = useState({
		notes: [],
		getRequestNum: 0
	});

	useEffect(() => {
		fetchNotesFromDb();
	}, [notesState.getRequestNum]);

	useEffect(() => {
		const noteObj = notesState.notes.filter(note => {
			return note.id === notesState.selectedNoteId;
		});
		if (noteObj[0] !== undefined) {
			setNotesState(notesState => ({ ...notesState, selectedFolderId: noteObj[0].folderId }));
		}
	}, [notesState.selectedNoteId]);

	function fetchNotesFromDb() {
		fetch('http://localhost:9090/notes')
			.then(res => res.json())
			.then(allNotes => setNotesState(notesState => ({ ...notesState, notes: allNotes })))
			.then(() => console.log('Notes Fetch Complete'))
			.catch(e => console.log(e));
	}

	return (
		<NotesStateContext.Provider value={[notesState, setNotesState]}>
			{props.children}
		</NotesStateContext.Provider>
	);
};

export { NotesStateContext, NotesStateProvider };
