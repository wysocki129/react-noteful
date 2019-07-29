import { useContext, useEffect } from 'react';
import { NotesStateContext } from './NotesState';

const useFoldersState = () => {
	const [notesState, setNotesState] = useContext(NotesStateContext);
	const dbURL = 'http://localhost:9090/notes';

	const noteGetRequest = () => {
		var getRequestRN = notesState.getRequestNum;
		getRequestRN++;
		setNotesState(notesState => ({ ...notesState, getRequestNum: getRequestRN }));
	};

	function getNotesState() {
		return notesState;
	}

	function getNotesArray() {
		return notesState.notes;
	}

	function getNoteWithNoteId(noteId) {
		const noteObj = notesState.notes.filter(note => {
			return note.id === noteId;
		});

		console.log(noteObj[0]);
		return noteObj[0];
	}

	function postNewNote(newNoteName, newNoteContent) {
		let date = new Date();
		const newNote = {
			name: `${newNoteName}`,
			folderId: notesState.selectedFolderId,
			modified: date,
			content: `${newNoteContent}`
		};

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newNote)
		};

		fetch(dbURL, options)
			.then(response => response.json())
			.then(console.log('New Note Posted'))
			.then(noteGetRequest())
			.catch(e => console.log(e));
	}

	function deleteSelectedNote(selectedNote) {
		const deleteURL = dbURL + '/' + selectedNote;

		fetch(deleteURL, { method: 'DELETE' })
			.then(response => response.json())
			.then(console.log('Note Deleted'))
			.then(noteGetRequest())
			.catch(e => console.log(e));
	}

	return {
		getNotesState,
		getNotesArray,
		getNoteWithNoteId,
		postNewNote,
		deleteSelectedNote,
		noteGetRequest
	};
};

export default useFoldersState;
