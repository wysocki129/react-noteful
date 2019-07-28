import React from 'react';
import Note from '../Note/Note';
import { Link } from 'react-router-dom';
import useNotesState from '../../useNotesState';
import useFoldersState from '../../useFoldersState';

const NotePage = ({ noteId }) => {
	const { getNoteWithNoteId } = useNotesState();
	const { getFolderWithFolderId } = useFoldersState();

	const displayNote = getNoteWithNoteId(noteId);
	const folder = getFolderWithFolderId(displayNote.folderId);

	return (
		<>
			<nav className="NotePage_nav">
				<Link to={`/folder/${folder.id}`}>{folder.name}</Link>
				<h4>{displayNote.name}</h4>
			</nav>
			<Note data={displayNote} />
		</>
	);
};

export default NotePage;
