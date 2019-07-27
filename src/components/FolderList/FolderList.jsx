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
		<>
			<h2>Folders</h2>
			<button type="button" onClick={() => fetchFoldersFromDb()}>
				Fetch
			</button>
			<button type="button" onClick={() => console.log(getFolderName(0))}>
				Get Folder Name
			</button>
			<button type="button" onClick={() => console.log(getFolderId(0))}>
				Get Folder Id
			</button>
			<button type="button" onClick={() => addNewFolder()}>
				Add New Folder
			</button>
			<button type="button" onClick={() => deleteSelectedFolder(0)}>
				Delete Selected Folder
			</button>
			<button type="button" onClick={() => console.log(getFoldersState())}>
				Log foldersState
			</button>
			<br />
			<hl />
			<h2>Notes</h2>
			<NoteList />
		</>
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
