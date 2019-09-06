import { useContext } from 'react';
import { NotesStateContext } from './NotesState';

const useNotesState = () => {
	const [notesState, setNotesState] = useContext(NotesStateContext);
	const dbURL = 'https://still-citadel-89591.herokuapp.com/api/notes';

	const noteGetRequest = () => {
		fetch(dbURL)
			.then(res => res.json())
			.then(allNotes => setNotesState(notesState => ({ ...notesState, notes: allNotes })))
			.then(() => console.log('Notes Fetch Complete'))
			.catch(e => console.log(e));
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

		// console.log(noteObj[0]);
		return noteObj[0];
	}

	function postNewNote(note, history) {
		let date = new Date();

		if (isNaN(note.folderid)) {
			note.folderid = 0;
		}

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
			.then(response => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}

				return response.json();
			})
			.then(() => noteGetRequest())
			.then(() => history.push('/'))

			.catch(e => console.log(e));
	}

	function deleteSelectedNote(selectedNote) {
		const deleteURL = dbURL + '/' + selectedNote;

		let allNotes = getNotesArray();
		let remNotes = allNotes.filter(note => note.id !== selectedNote);
		setNotesState(notesState => ({ ...notesState, notes: remNotes }));

		fetch(deleteURL, { method: 'DELETE' })
			.then(response => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				noteGetRequest();
				return response.json();
			})

			.catch(Error => console.log(Error));
	}

	function newNoteAuth(values, history) {
		let errors = {};
		if (!values.name) {
			errors.name = 'Each note must have a name.';
		}
		if (Object.keys(errors).length !== 0) {
			console.log(errors);
		} else {
			postNewNote(values, history);
		}
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

export default useNotesState;
