import React from 'react';
import Folder from './Folder';
import AddFolder from './AddFolder';
import { NavLink } from 'react-router-dom';

import useFoldersState from '../../useFoldersState';

const FolderList = () => {
	const { getFoldersArray, deleteSelectedFolder } = useFoldersState();

	return (
		<>
			{getFoldersArray().map(folder => (
				<ul>
					<NavLink key={folder.id} to={`/folder/${folder.id}`}>
						<Folder name={folder.name} />
					</NavLink>
					<button type="button" onClick={() => deleteSelectedFolder(folder)}>
						Delete Folder
					</button>
				</ul>
			))}
			<AddFolder />
		</>
	);
};

export default FolderList;
