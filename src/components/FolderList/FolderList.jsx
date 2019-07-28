import React, { useContext } from 'react';
import Folder from '../Folder/Folder';
import { NavLink } from 'react-router-dom';
import NoteList from '../NoteList/NoteList';

import useFoldersState from '../../useFoldersState';

const FolderList = ({ allFolders }) => {
	const {
		fetchFoldersFromDb,
		getFolderName,
		getFolderId,
		addNewFolder,
		deleteSelectedFolder,
		getFoldersState,
		getSelectedFolderId
	} = useFoldersState();

	return (
		<></>
		// <>
		// 	{allFolders.map(folder => (
		// 		<NavLink key={folder.id} to={`/folder/${folder.id}`}>
		// 			<Folder data={folder} />
		// 		</NavLink>
		// 	))}
		// 	<button type="button">Add Folder</button>
		// </>
	);
};

export default FolderList;
