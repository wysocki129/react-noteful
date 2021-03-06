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

	function fetchNotesFromDb() {
		fetch('https://still-citadel-89591.herokuapp.com/api/notes')
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
