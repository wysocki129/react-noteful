import React, { createContext, useState } from 'react';

const FoldersStateContext = createContext([{}, () => {}]);

const FoldersStateProvider = props => {
	const dbURL = 'http://localhost:9090/folders';
	const [foldersState, setFoldersState] = useState({
		folders: [],
		selectedFolderId: null,
		firstFetch: true
	});

	function fetchFoldersFromDb() {
		fetch(dbURL)
			.then(res => res.json())
			.then(allFolders =>
				setFoldersState(foldersState => ({ ...foldersState, folders: allFolders }))
			)
			.then(() => console.log('Folder Fetch Complete'))
			.catch(e => console.log(e));
	}

	if (foldersState.firstFetch === true) {
		fetchFoldersFromDb();
		setFoldersState(foldersState => ({ ...foldersState, firstFetch: false }));
	}

	return (
		<FoldersStateContext.Provider value={[foldersState, setFoldersState]}>
			{props.children}
		</FoldersStateContext.Provider>
	);
};

export { FoldersStateContext, FoldersStateProvider };
