import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Note = ({ data }) => {
	const [isContentActive, setIsContentActive] = useState(false);

	const showContent = ({ isContentActive }) => {
		let whatToShow =
			isContentActive === true ? (
				<>
					<p>{data.content}</p>
					<button
						type="button"
						onClick={() => setIsContentActive(false)}
					>
						Hide Content
					</button>
				</>
			) : (
				<button
					type="button"
					onClick={() => setIsContentActive(true)}
				>
					Show Content
				</button>
			);
		return whatToShow;
	};

	return (
		<div className="Note" key={data.id} id={data.id}>
			<Link to={`/folder/${data.folderId}/note/${data.id}`}>
				<h3> {data.name} </h3>
			</Link>
			<p>{data.modified}</p>
			{showContent({ isContentActive })}
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
