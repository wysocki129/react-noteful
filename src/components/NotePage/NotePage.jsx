import React from 'react';
import Note from '../Note/Note';
import { Link } from 'react-router-dom';

const NotePage = ({ data }) => {
	return (
		<>
			<nav className="NotePage_nav">
				<Link to={`/folder/${data.folderId}`}>Go Back</Link>
				<h4>{data.folderName}</h4>
			</nav>
			<Note data={data} />
		</>
	);
};

export default NotePage;
