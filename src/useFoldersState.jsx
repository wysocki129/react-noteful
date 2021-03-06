import { useContext } from 'react';
import { FoldersStateContext } from './FoldersState';
import { Redirect } from 'react-router';

const useFoldersState = () => {
	const [foldersState, setFoldersState] = useContext(FoldersStateContext);
	const dbURL = 'https://still-citadel-89591.herokuapp.com/api/folders';

	const folderGetRequest = () => {
		var getRequestRN = foldersState.getRequestNum;
		getRequestRN++;
		setFoldersState(foldersState => ({ ...foldersState, getRequestNum: getRequestRN }));
	};

	function getFoldersState() {
		return foldersState;
	}

	function addNewFolder(id, name) {
		folderGetRequest();
	}

	function getFoldersArray() {
		return foldersState.folders;
	}

	function getSelectedFolder() {
		const folderObj = foldersState.folders.filter(folder => {
			return folder.id === foldersState.selectedFolderId;
		});
		// console.log(folderObj);
		return folderObj[0];
	}

	function postNewFolder(newFolderName = 'Folder_String', history) {
		const newFolder = { name: `${newFolderName}` };
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newFolder)
		};

		fetch(dbURL, options)
			.then(response => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				return response.json();
			})
			.then(myJson => {
				addNewFolder();
				history.push('/');
			})
			.catch(e => console.log(e));
	}

	function deleteSelectedFolder(folder) {
		const deleteURL = `${dbURL}/${folder.id}`;

		fetch(deleteURL, { method: 'DELETE' })
			.then(response => response.json())
			.then(folderGetRequest())
			.catch(e => console.log(e));
	}

	function newFolderAuth(values, history) {
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
			postNewFolder(values.name, history);
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
