import React from 'react';
import Note from '../Note/Note';
import useNotesState from '../../useNotesState';

const NoteList = ({ selectedFolder }) => {
	const { getNotesArray } = useNotesState();

	let displayNotes = [];

	selectedFolder === null || selectedFolder === undefined
		? (displayNotes = getNotesArray())
		: (displayNotes = getNotesArray().filter(folderNotes => {
				return folderNotes.folderId === selectedFolder;
		  }));

	return (
		<>
			<ul>
				{displayNotes.map(note => (
					<li key={note.id}>
						<Note data={note} />
					</li>
				))}
			</ul>
		</>
	);
};

export default NoteList;
