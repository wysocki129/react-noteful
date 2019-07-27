import React from 'react';
import Note from '../Note/Note';
import useNotesState from '../../useNotesState';

const NoteList = () => {
	const {
		fetchNotesFromDb,
		getNoteName,
		getNoteId,
		getNotesState,
		addNewNote,
		deleteSelectedNote,
		getNoteFolderId,
		getNoteModified,
		getNoteContent
	} = useNotesState();

	return (
		<>
			<button type="button" onClick={() => fetchNotesFromDb()}>
				Fetch Notes
			</button>
			<button type="button" onClick={() => console.log(getNoteName(0))}>
				Get Notes Name
			</button>
			<button type="button" onClick={() => console.log(getNoteId(0))}>
				Get Notes Id
			</button>
			<button type="button" onClick={() => console.log(getNoteFolderId(0))}>
				Get Notes Folder Id
			</button>
			<button type="button" onClick={() => console.log(getNoteModified(0))}>
				Get Notes Modified
			</button>
			<button type="button" onClick={() => console.log(getNoteContent(0))}>
				Get Notes Content
			</button>
			<button type="button" onClick={() => console.log(getNotesState())}>
				Log Notes State
			</button>
			<button type="button" onClick={() => addNewNote()}>
				Add New Note
			</button>
			<button type="button" onClick={() => deleteSelectedNote(0)}>
				Delete Selected Note
			</button>
		</>
	);

	// const filterNotes = (allNotes, filter) => {
	// 	if (filter === null || filter === undefined) {
	// 		return allNotes;
	// 	} else {
	// 		let displayNotes = allNotes.filter(folderNotes => {
	// 			return folderNotes.folderId === filter;
	// 		});
	// 		return displayNotes;
	// 	}
	// };
	// return (
	// 	<ul>
	// 		{filterNotes(allNotes, folderFilter).map(note => (
	// 			<li key={note.id}>
	// 				<Note data={note} />
	// 			</li>
	// 		))}
	// 	</ul>
	// );
};

export default NoteList;
