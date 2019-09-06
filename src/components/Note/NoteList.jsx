import React from 'react';
import { Link } from 'react-router-dom';
import useNotesState from '../../useNotesState';
import './NoteList.css';

const NoteList = ({ selectedFolder }) => {
	const { getNotesArray, deleteSelectedNote } = useNotesState();

	let displayNotes = [];

	selectedFolder === null || selectedFolder === undefined
		? (displayNotes = getNotesArray())
		: (displayNotes = getNotesArray().filter(folderNotes => {
				return folderNotes.folderid == selectedFolder;
		  }));

	return (
		<>
			<ul>
				{displayNotes.map(note => (
					<li key={note.id}>
						<Link to={`/folder/${note.folderid}/note/${note.id}`}>
							<h3> {note.name} </h3>
						</Link>
						<p>{note.modified}</p>
						<button type="button" onClick={() => deleteSelectedNote(note.id)}>
							Delete Note
						</button>
					</li>
				))}
			</ul>
			<Link to={`/folder/addnote`}>
				<button>Add Note</button>
			</Link>
		</>
	);
};

export default NoteList;
