import React, { createContext, useState } from 'react';

const NotesStateContext = createContext([{}, () => {}]);

const NotesStateProvider = props => {
	const [notesState, setNotesState] = useState({
		notes: [],
		selectedNoteIndex: null
	});

	return (
		<NotesStateContext.Provider value={[notesState, setNotesState]}>
			{props.children}
		</NotesStateContext.Provider>
	);
};

export { NotesStateContext, NotesStateProvider };
