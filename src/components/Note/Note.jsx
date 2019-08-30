import React from 'react';
import { Link } from 'react-router-dom';
import useNotesState from '../../useNotesState';

const Note = ({ data }) => {
	const { deleteSelectedNote } = useNotesState();

	return (
		<div className="Note" key={data.id} id={data.id}>
			<Link to={`/folder/${data.folderid}/note/${data.id}`}>
				<h3> {data.name} </h3>
			</Link>
			<p>{data.modified}</p>
			<button type="button" onClick={() => deleteSelectedNote(data.id)}>
				Delete Note
			</button>
		</div>
	);
};

export default Note;
