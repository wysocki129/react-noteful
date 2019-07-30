import React from 'react';
import Folder from '../Folder/Folder';
import AddFolder from '../AddFolder/AddFolder';
import { NavLink } from 'react-router-dom';

import useFoldersState from '../../useFoldersState';

const FolderList = () => {
	const { getFoldersArray } = useFoldersState();

	return (
		<>
			{getFoldersArray().map(folder => (
				<NavLink key={folder.id} to={`/folder/${folder.id}`}>
					<Folder name={folder.name} />
				</NavLink>
			))}
			<AddFolder />
		</>
	);
};

export default FolderList;
