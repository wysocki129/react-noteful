import { useContext } from 'react';
import { FoldersStoreContext } from './FoldersStore';

const useFoldersStore = () => {
	const [foldersStore, setFoldersStore] = useContext(FoldersStoreContext);
	const dbURL = 'http://localhost:9090/folders';

	function fetchFoldersFromDb() {
		fetch(dbURL)
			.then(res => res.json())
			.then(allFolders =>
				setFoldersStore(foldersStore => ({ ...foldersStore, folders: allFolders }))
			)
			.then(() => console.log('Folder Fetch Complete'))
			.catch(e => console.log(e));
	}

	function getFoldersStore() {
		return foldersStore;
	}

	function getFolderName(folderIndex) {
		return foldersStore.folders[folderIndex].name;
	}

	function getFolderId(folderIndex) {
		return foldersStore.folders[folderIndex].id;
	}

	function addNewFolder() {
		const newFolder = { name: 'Name_String' };
		let newJsonFolder = foldersStore.folders;
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

		setFoldersStore(foldersStore => ({ ...foldersStore, folders: newJsonFolder }));
	}

	function deleteSelectedFolder(folderIndex) {
		const folderId = getFolderId(folderIndex);
		const deleteURL = dbURL + '/' + folderId;
		let newFoldersArray = foldersStore.folders.filter(({ id }) => {
			return id !== folderId;
		});

		fetch(deleteURL, { method: 'DELETE' })
			.then(response => response.json())
			.then(console.log('Folder Deleted'))
			.then(setFoldersStore(foldersStore => ({ ...foldersStore, folders: newFoldersArray })))
			.catch(e => console.log(e));
	}

	return {
		fetchFoldersFromDb,
		getFolderName,
		getFolderId,
		getFoldersStore,
		addNewFolder,
		deleteSelectedFolder
	};
};

export default useFoldersStore;
