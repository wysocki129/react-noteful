import React from 'react';

const Note = () => {
	return (
		<div className="Note">
			<h3>Note Title</h3>
			<p>Date Modified</p>
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
