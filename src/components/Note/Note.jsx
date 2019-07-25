import React from 'react';
import { Link } from 'react-router-dom';

const Note = ({ data }) => {
	return (
		<div className="Note" key={data.id} id={data.id}>
			<Link to={`/folder/${data.folderId}/note/${data.id}`}>
				<h3> {data.name} </h3>
			</Link>
			<p>{data.modified}</p>
			<p>{data.content}</p>
			<button
				type="button"
				onClick={() => console.log('Note Deleted')}
			>
				Delete Note
			</button>
		</div>
	);
};

export default Note;
