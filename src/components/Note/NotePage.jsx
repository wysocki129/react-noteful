import React from 'react';
import { Link } from 'react-router-dom';
import useNotesState from '../../useNotesState';

const NotePage = ({ noteId, history }) => {
	const { getNoteWithNoteId, deleteSelectedNote, patchSelectedNote } = useNotesState();

	const displayNote = getNoteWithNoteId(noteId);

	const deleteNoteOnPage = () => {
		deleteSelectedNote(noteId);
		history.push('/');
	};

	return (
		<>
			<nav className="NotePage_nav">
				<Link to={`/folder/${displayNote.folderid}`}>{displayNote.folderid}</Link>
				<h4>{displayNote.name}</h4>
			</nav>
			<main>
				<div className="Note" key={displayNote.id} id={displayNote.id}>
					<Link to={`/folder/${displayNote.folderid}/note/${displayNote.id}`}>
						<h3> {displayNote.name} </h3>
					</Link>
					<p>{displayNote.content}</p>
					<p>{displayNote.modified}</p>
					<button type="button" onClick={() => deleteNoteOnPage()}>
						Delete Note
					</button>
					<button type="button" onClick={() => patchSelectedNote()}>
						Edit Note
					</button>
				</div>
			</main>
		</>
	);
};

export default NotePage;
