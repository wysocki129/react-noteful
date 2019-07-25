import React from 'react';


const Note = ({data}) => {
	return (
		<div className="Note" key={data.id} id={data.id}>
			<h3> {data.name} </h3>
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
