import React from 'react';
import Note from '../Note/Note';

const NoteList = ({ allNotes, folderFilter }) => {
	const filterNotes = (allNotes, filter) => {
		if (filter === null) {
			return allNotes;
		} else {
			let displayNotes = allNotes.filter(folderNotes => {
				return folderNotes.folderId == filter;
			});
			return displayNotes;
		}
	};

	return (
		<ul>
			{filterNotes(allNotes, folderFilter).map(note => (
				<li key={note.id}>
					<Note data={note} />
				</li>
			))}
		</ul>
	);
};

export default NoteList;
