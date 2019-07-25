import React from 'react';
import Note from './Note/Note';

const NoteList = () => {
	return (
		<nav>
			<ul>
				<Note />
				<Note />
				<Note />
				<Note />
				<button
					type="button"
					onClick={() => console.log('Added New Note')}
				>
					Add Note
				</button>
			</ul>
		</nav>
	);
};

export default NoteList;
