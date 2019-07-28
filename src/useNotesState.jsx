import { useContext } from 'react';
import { NotesStateContext } from './NotesState';

const useFoldersState = () => {
	const [notesState, setNotesState] = useContext(NotesStateContext);
	const dbURL = 'http://localhost:9090/notes';

	function fetchNotesFromDb() {
		fetch(dbURL)
			.then(res => res.json())
			.then(allNotes => setNotesState(notesState => ({ ...notesState, notes: allNotes })))
			.then(() => console.log('Notes Fetch Complete'))
			.catch(e => console.log(e));
	}

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

	function getNoteName(noteIndex) {
		return notesState.notes[noteIndex].name;
	}

	function getNoteId(noteIndex) {
		return notesState.notes[noteIndex].id;
	}

	function getNoteFolderId(noteIndex) {
		return notesState.notes[noteIndex].folderId;
	}

	function getNoteModified(noteIndex) {
		return notesState.notes[noteIndex].modified;
	}

	function getNoteContent(noteIndex) {
		return notesState.notes[noteIndex].content;
	}

	function addNewNote(folderId) {
		let date = new Date();
		const newNote = {
			name: 'Name_String',
			folderId: folderId,
			modified: date,
			content: 'Content_String'
		};
		let newJsonNote = notesState.notes;
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newNote)
		};

		fetch(dbURL, options)
			.then(response => response.json())
			.then(myJson => newJsonNote.push(myJson))
			.catch(e => console.log(e));

		setNotesState(notesState => ({ ...notesState, notes: newJsonNote }));
	}

	function deleteSelectedNote(noteIndex) {
		const noteId = getNoteId(noteIndex);
		const deleteURL = dbURL + '/' + noteId;
		let newNotesArray = notesState.notes.filter(({ id }) => {
			return id !== noteId;
		});

		fetch(deleteURL, { method: 'DELETE' })
			.then(response => response.json())
			.then(console.log('Note Deleted'))
			.then(setNotesState(notesState => ({ ...notesState, notes: newNotesArray })))
			.catch(e => console.log(e));
	}

	return {
		fetchNotesFromDb,
		getNoteName,
		getNoteId,
		getNotesState,
		addNewNote,
		deleteSelectedNote,
		getNoteFolderId,
		getNoteModified,
		getNoteContent,
		getNotesArray,
		getNoteWithNoteId
	};
};

export default useFoldersState;
