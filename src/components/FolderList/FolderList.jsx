import React from 'react';
import Folder from '../Folder/Folder';
import { Link } from 'react-router-dom';

const FolderList = ({ allFolders }) => {
	console.log(allFolders);
	return (
		<nav>
			{allFolders.map(folder => (
				<Link to={`/folder/${folder.id}`}>
					<Folder data={folder} />
				</Link>
			))}
			<button type="button">Add Folder</button>
		</nav>
	);
};

export default FolderList;
