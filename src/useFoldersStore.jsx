import { useContext } from 'react';
import { FoldersStoreContext } from './FoldersStore';

const useFoldersStore = () => {
	const [foldersStore, setFoldersStore] = useContext(FoldersStoreContext);

	function fetchFoldersFromDb() {
		fetch('http://localhost:9090/folders')
			.then(res => res.json())
			.then(myJson => setFoldersStore(folders => ({ ...folders, folders: myJson })))
			.then(() => console.log('Folder Fetch Complete'))
			.catch(e => console.log(e));
	}

	function getFolderName(folderIndex) {
		return foldersStore.folders[folderIndex].name;
	}

	function getFolderId(folderIndex) {
		return foldersStore.folders[folderIndex].id;
	}

	return { fetchFoldersFromDb, getFolderName, getFolderId };
};

export default useFoldersStore;
