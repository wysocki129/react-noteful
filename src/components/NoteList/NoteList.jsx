import React from 'react';
import Note from '../Note/Note';

const NoteList = ({allNotes, setAllNotes}) => {
	

	return (
		<ul>
			{allNotes.map((note, index) => <li key={note.id}><Note data={note}/></li>)}
		</ul>
	);
};

export default NoteList;
