import { useContext } from 'react';
import { NotesStateContext } from './NotesState';

const useFoldersState = () => {
	const [notesState, setNotesState] = useContext(NotesStateContext);
	const dbURL = 'https://still-citadel-89591.herokuapp.com/api/notes';

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
			return note.id == noteId;
		});

		console.log(noteObj[0]);
		return noteObj[0];
	}

	function postNewNote(note) {
		let date = new Date();
		const newNote = {
			name: note.name,
			folderid: note.folderid,
			modified: date,
			content: note.content
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
			.then(noteGetRequest())
			.catch(e => console.log(e));
	}

	function deleteSelectedNote(selectedNote) {
		const deleteURL = dbURL + '/' + selectedNote;

		fetch(deleteURL, { method: 'DELETE' })
			.then(response => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				const allNotes = getNotesArray();
				const remNotes = allNotes.filter(note => note.id !== selectedNote);
				setNotesState(notesState => ({ ...notesState, notes: remNotes }));
				return response.json();
			})
			.catch(Error => console.log(Error));
	}

	function newNoteAuth(values) {
		let errors = {};
		if (!values.name) {
			errors.name = 'Each note must have a name.';
		}
		if (Object.keys(errors).length !== 0) {
			console.log(errors);
		} else {
			postNewNote(values);
		}
	}

	function patchSelectedNote(selectedNote) {
		const patchURL = `${dbURL}/${selectedNote.id}`;
	}

	return {
		getNotesState,
		getNotesArray,
		getNoteWithNoteId,
		postNewNote,
		deleteSelectedNote,
		noteGetRequest,
		newNoteAuth
	};
};

export default useFoldersState;
