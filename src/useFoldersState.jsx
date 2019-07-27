import { useContext } from 'react';
import { FoldersStateContext } from './FoldersState';

const useFoldersState = () => {
	const [foldersState, setFoldersState] = useContext(FoldersStateContext);
	const dbURL = 'http://localhost:9090/folders';

	function fetchFoldersFromDb() {
		fetch(dbURL)
			.then(res => res.json())
			.then(allFolders =>
				setFoldersState(foldersState => ({ ...foldersState, folders: allFolders }))
			)
			.then(() => console.log('Folder Fetch Complete'))
			.catch(e => console.log(e));
	}

	function getFoldersState() {
		return foldersState;
	}

	function getFolderName(folderIndex) {
		return foldersState.folders[folderIndex].name;
	}

	function getFolderId(folderIndex) {
		return foldersState.folders[folderIndex].id;
	}

	function addNewFolder() {
		const newFolder = { name: 'Name_String' };
		let newJsonFolder = foldersState.folders;
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newFolder)
		};

		fetch(dbURL, options)
			.then(response => response.json())
			.then(myJson => newJsonFolder.push(myJson))
			.catch(e => console.log(e));

		setFoldersState(foldersState => ({ ...foldersState, folders: newJsonFolder }));
	}

	function deleteSelectedFolder(folderIndex) {
		const folderId = getFolderId(folderIndex);
		const deleteURL = dbURL + '/' + folderId;
		let newFoldersArray = foldersState.folders.filter(({ id }) => {
			return id !== folderId;
		});

		fetch(deleteURL, { method: 'DELETE' })
			.then(response => response.json())
			.then(console.log('Folder Deleted'))
			.then(setFoldersState(foldersState => ({ ...foldersState, folders: newFoldersArray })))
			.catch(e => console.log(e));
	}

	return {
		fetchFoldersFromDb,
		getFolderName,
		getFolderId,
		getFoldersState,
		addNewFolder,
		deleteSelectedFolder
	};
};

export default useFoldersState;
