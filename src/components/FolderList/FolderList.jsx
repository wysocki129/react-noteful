import React from 'react';
import Folder from '../Folder/Folder';
import { NavLink } from 'react-router-dom';

const FolderList = ({ allFolders }) => {
	return (
		<>
			{allFolders.map(folder => (
				<NavLink key={folder.id} to={`/folder/${folder.id}`}>
					<Folder data={folder} />
				</NavLink>
			))}
			<button type="button">Add Folder</button>
		</>
	);
};

export default FolderList;
