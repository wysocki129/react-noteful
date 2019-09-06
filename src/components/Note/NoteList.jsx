import React from 'react';
import { Link } from 'react-router-dom';
import useNotesState from '../../useNotesState';
import Moment from 'react-moment';
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
			<ul className="note-list">
				{displayNotes.map(note => (
					<li key={note.id} className="note">
						<Link to={`/folder/${note.folderid}/note/${note.id}`}>
							<h3 className="note-name"> {note.name} </h3>
						</Link>
						<Moment className="note-date" format="DD-MM-YYYY HH:mm">
							{note.modified}
						</Moment>
						<button
							className="note-delete-button"
							type="button"
							onClick={() => deleteSelectedNote(note.id)}
						>
							Delete Note
						</button>
					</li>
				))}
			</ul>
			<Link to={`/folder/addnote`}>
				<button className="add-note-button">Add Note</button>
			</Link>
		</>
	);
};

export default NoteList;
