import { useContext } from 'react';
import { FoldersStateContext } from './FoldersState';

const useFoldersState = () => {
	const [foldersState, setFoldersState] = useContext(FoldersStateContext);
	const dbURL = 'http://localhost:9090/folders';

	const folderGetRequest = () => {
		var getRequestRN = foldersState.getRequestNum;
		getRequestRN++;
		setFoldersState(foldersState => ({ ...foldersState, getRequestNum: getRequestRN }));
	};

	function getFoldersState() {
		return foldersState;
	}

	function getFoldersArray() {
		return foldersState.folders;
	}

	function getSelectedFolder() {
		const folderObj = foldersState.folders.filter(folder => {
			return folder.id === foldersState.selectedFolderId;
		});
		console.log(folderObj);
		return folderObj[0];
	}

	function postNewFolder(newFolderName = 'Folder_String') {
		const newFolder = { name: `${newFolderName}` };
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newFolder)
		};

		fetch(dbURL, options)
			.then(console.log('Post Request Complete'))
			.then(folderGetRequest())
			.catch(e => console.log(e));
	}

	function deleteSelectedFolder() {
		const deleteURL = dbURL + '/' + foldersState.selectedFolderId;

		fetch(deleteURL, { method: 'DELETE' })
			.then(response => response.json())
			.then(folderGetRequest())
			.then(console.log('Folder Deleted'))
			.catch(e => console.log(e));
	}

	return {
		getFoldersState,
		postNewFolder,
		deleteSelectedFolder,
		getFoldersArray,
		getSelectedFolder,
		folderGetRequest
	};
};

export default useFoldersState;
