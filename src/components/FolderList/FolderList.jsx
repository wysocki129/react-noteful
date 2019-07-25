import React from 'react';
import Folder from '../Folder/Folder';
import { Link } from 'react-router-dom';

const FolderList = ({ allFolders }) => {
	return (
		<nav>
			{allFolders.map(folder => (
				<Link key={folder.id} to={`/folder/${folder.id}`}>
					<Folder data={folder} />
				</Link>
			))}
			<button type="button">Add Folder</button>
		</nav>
	);
};

export default FolderList;
