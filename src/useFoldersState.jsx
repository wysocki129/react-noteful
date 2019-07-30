import { useContext } from 'react';
import { FoldersStateContext } from './FoldersState';
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry';

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
			.then(folderGetRequest())
			.catch(e => console.log(e));
	}

	function deleteSelectedFolder() {
		const deleteURL = dbURL + '/' + foldersState.selectedFolderId;

		fetch(deleteURL, { method: 'DELETE' })
			.then(response => response.json())
			.then(folderGetRequest())
			.catch(e => console.log(e));
	}

	function newFolderAuth(values) {
		let errors = {};
		const isNotUnique = () =>
			foldersState.folders.filter(folder => folder.name === values.name);
		if (!values.name) {
			errors.name = 'Each new folder needs a unique name.';
		} else if (isNotUnique()[0] !== undefined) {
			errors.name = 'This new folder name is not unique, try adding another one.';
		}
		if (Object.keys(errors).length !== 0) {
			console.log(errors);
		} else {
			postNewFolder(values.name);
		}
	}

	return {
		getFoldersState,
		postNewFolder,
		deleteSelectedFolder,
		getFoldersArray,
		getSelectedFolder,
		folderGetRequest,
		newFolderAuth
	};
};

export default useFoldersState;
