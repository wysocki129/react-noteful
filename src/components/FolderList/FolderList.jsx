import React from 'react';
import Folder from '../Folder/Folder';
import { NavLink } from 'react-router-dom';

import useFoldersState from '../../useFoldersState';

const FolderList = () => {
	const {
		getFolderName,
		getFolderId,
		addNewFolder,
		deleteSelectedFolder,
		getFoldersState,
		getSelectedFolderId
	} = useFoldersState();

	return (
		<>
			<h1>Folders List</h1>
		</>
	);
};

export default FolderList;
