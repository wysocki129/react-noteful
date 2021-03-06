import React, { createContext, useState, useEffect } from 'react';

const FoldersStateContext = createContext([{}, () => {}]);

const FoldersStateProvider = props => {
	const [foldersState, setFoldersState] = useState({
		folders: [],
		selectedFolderId: null,
		getRequestNum: 0
	});

	useEffect(() => {
		fetchFoldersFromDb();
	}, [foldersState.getRequestNum]);

	function fetchFoldersFromDb() {
		fetch('https://still-citadel-89591.herokuapp.com/api/folders')
			.then(res => res.json())
			.then(allFolders =>
				setFoldersState(foldersState => ({ ...foldersState, folders: allFolders }))
			)
			.then(() => console.log('Folder Fetch Complete'))
			.catch(e => console.log(e));
	}

	return (
		<FoldersStateContext.Provider value={[foldersState, setFoldersState]}>
			{props.children}
		</FoldersStateContext.Provider>
	);
};

export { FoldersStateContext, FoldersStateProvider };
