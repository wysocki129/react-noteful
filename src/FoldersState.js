import React, { createContext, useState } from 'react';

const FoldersStateContext = createContext([{}, () => {}]);

const FoldersStateProvider = props => {
	const [foldersState, setFoldersState] = useState({
		folders: [],
		selectedFolderId: null
	});

	return (
		<FoldersStateContext.Provider value={[foldersState, setFoldersState]}>
			{props.children}
		</FoldersStateContext.Provider>
	);
};

export { FoldersStateContext, FoldersStateProvider };
